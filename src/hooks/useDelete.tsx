import { useMutation, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const useDelete = (
  fetchApi: {
    (url: string, token: string): Promise<any>;
    (arg0: string, arg1: string): Promise<unknown>;
  },
  url: string,
  token: string,
) => {
  const mutation = useMutation({
    mutationFn: () => {
      return fetchApi(url, token);
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
