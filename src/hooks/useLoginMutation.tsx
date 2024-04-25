import { useMutation, QueryClient } from '@tanstack/react-query';
import { LoginInferData } from '../schemas/login.schema.ts';

const queryClient = new QueryClient();

export const useLoginMutation = (
  fetchApi: (arg0: { username: string; password: string }) => Promise<unknown>,
) => {
  const mutation = useMutation({
    mutationFn: (data: LoginInferData) => {
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
