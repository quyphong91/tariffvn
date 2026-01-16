import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { HSRequest } from './useHSRequests';

export interface UpdateRequestData {
  id: string;
  status?: 'pending' | 'processing' | 'completed';
  ai_response?: string;
  hs_code?: string;
  admin_note?: string;
}

export const useAdminRequests = (
  page: number = 1,
  statusFilter: string = 'all',
  searchTerm: string = ''
) => {
  const pageSize = 20;

  return useQuery({
    queryKey: ['admin-hs-requests', page, statusFilter, searchTerm],
    queryFn: async () => {
      let query = supabase
        .from('hs_requests')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false });

      if (statusFilter !== 'all') {
        query = query.eq('status', statusFilter);
      }

      if (searchTerm.trim()) {
        query = query.ilike('product_name', `%${searchTerm.trim()}%`);
      }

      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;
      query = query.range(from, to);

      const { data, error, count } = await query;

      if (error) {
        console.error('Error fetching admin requests:', error);
        throw error;
      }

      return {
        requests: (data || []) as HSRequest[],
        totalCount: count || 0,
        totalPages: Math.ceil((count || 0) / pageSize),
        currentPage: page,
      };
    },
    staleTime: 5000,
  });
};

export const useUpdateRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: UpdateRequestData) => {
      const { id, ...updateData } = data;
      
      const { data: result, error } = await supabase
        .from('hs_requests')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Error updating request:', error);
        throw error;
      }

      return result as HSRequest;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-hs-requests'] });
      queryClient.invalidateQueries({ queryKey: ['hs-public-requests'] });
      queryClient.invalidateQueries({ queryKey: ['hs-my-requests'] });
    },
  });
};
