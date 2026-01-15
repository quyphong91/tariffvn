import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { addRequestId } from '@/lib/hsRequestStorage';

const DAILY_QUOTA = 50;

export interface HSRequest {
  id: string;
  created_at: string;
  product_name: string;
  product_description: string;
  material: string | null;
  function_use: string | null;
  status: 'pending' | 'processing' | 'completed';
  ai_response: string | null;
  hs_code: string | null;
  admin_note: string | null;
}

export interface SubmitRequestData {
  product_name: string;
  product_description: string;
  material?: string;
  function_use?: string;
}

// Hook để lấy số quota còn lại
export const useQuotaCount = () => {
  return useQuery({
    queryKey: ['hs-quota'],
    queryFn: async () => {
      const { data, error } = await supabase.rpc('get_today_request_count');
      
      if (error) {
        console.error('Error fetching quota:', error);
        throw error;
      }
      
      const count = data ?? 0;
      return {
        used: count,
        remaining: Math.max(0, DAILY_QUOTA - count),
        total: DAILY_QUOTA,
      };
    },
    staleTime: 30000, // 30 giây
  });
};

// Hook để lấy public requests (processing + completed)
export const usePublicRequests = (page: number = 1, searchTerm: string = '') => {
  const pageSize = 10;
  
  return useQuery({
    queryKey: ['hs-public-requests', page, searchTerm],
    queryFn: async () => {
      let query = supabase
        .from('hs_requests')
        .select('*', { count: 'exact' })
        .in('status', ['processing', 'completed'])
        .order('created_at', { ascending: false });
      
      if (searchTerm.trim()) {
        query = query.ilike('product_name', `%${searchTerm.trim()}%`);
      }
      
      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;
      query = query.range(from, to);
      
      const { data, error, count } = await query;
      
      if (error) {
        console.error('Error fetching public requests:', error);
        throw error;
      }
      
      return {
        requests: (data || []) as HSRequest[],
        totalCount: count || 0,
        totalPages: Math.ceil((count || 0) / pageSize),
        currentPage: page,
      };
    },
    staleTime: 10000, // 10 giây
  });
};

// Hook để lấy my requests (by IDs từ localStorage)
export const useMyRequests = (ids: string[]) => {
  return useQuery({
    queryKey: ['hs-my-requests', ids],
    queryFn: async () => {
      if (ids.length === 0) {
        return [];
      }
      
      const { data, error } = await supabase
        .from('hs_requests')
        .select('*')
        .in('id', ids)
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching my requests:', error);
        throw error;
      }
      
      return (data || []) as HSRequest[];
    },
    enabled: ids.length > 0,
    staleTime: 10000,
  });
};

// Hook để submit request mới
export const useSubmitRequest = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: SubmitRequestData) => {
      const { data: result, error } = await supabase
        .from('hs_requests')
        .insert({
          product_name: data.product_name.trim(),
          product_description: data.product_description.trim(),
          material: data.material?.trim() || null,
          function_use: data.function_use?.trim() || null,
        })
        .select()
        .single();
      
      if (error) {
        console.error('Error submitting request:', error);
        throw error;
      }
      
      return result as HSRequest;
    },
    onSuccess: (data) => {
      // Lưu ID vào localStorage
      addRequestId(data.id);
      // Invalidate queries
      queryClient.invalidateQueries({ queryKey: ['hs-quota'] });
      queryClient.invalidateQueries({ queryKey: ['hs-my-requests'] });
      queryClient.invalidateQueries({ queryKey: ['hs-public-requests'] });
    },
  });
};
