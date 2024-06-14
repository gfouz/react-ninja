import { useMutation, QueryClient } from '@tanstack/react-query';
import { Auth } from '../schemas/auth.schema.ts';
import { User } from '../store/actions.ts';

const queryClient = new QueryClient();

export const useLoginMutation = (
  fetchApi: (arg0: { username: string; password: string }) => Promise<User>,
) => {
  const mutation = useMutation({
    mutationFn: (data: Auth) => {
      return fetchApi(data);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
    mutationKey: ['posts'],
  });
  return { mutation };
};
