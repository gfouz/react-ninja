import { useMutation, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const useDelete = (fetchApi) => {
  const mutation = useMutation({
    mutationFn: (url: string) => {
      return fetchApi(url);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
  return { mutation };
};
