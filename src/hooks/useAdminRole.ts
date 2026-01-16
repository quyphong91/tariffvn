import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export const useAdminRole = () => {
  const { user, loading: authLoading } = useAuth();

  const { data: isAdmin, isLoading: roleLoading } = useQuery({
    queryKey: ['admin-role', user?.id],
    queryFn: async () => {
      if (!user) return false;

      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .eq('role', 'admin')
        .maybeSingle();

      if (error) {
        console.error('Error checking admin role:', error);
        return false;
      }

      return !!data;
    },
    enabled: !!user,
    staleTime: 60000, // 1 minute
  });

  return {
    isAdmin: isAdmin ?? false,
    loading: authLoading || roleLoading,
    user,
  };
};
