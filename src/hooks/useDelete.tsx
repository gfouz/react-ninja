import { useMutation, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const useDelete = (fetchApi: { (url: string): Promise<any>; (arg0: string): Promise<unknown>; }) => {
  const mutation = useMutation({
    mutationFn: (url: string) => {
      return fetchApi(url);
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
