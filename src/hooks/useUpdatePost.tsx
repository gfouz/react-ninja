import { useMutation, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const useUpdatePost = (fetchApi, url) => {
  const mutation = useMutation({
    mutationFn: (data: any) => {
      return fetchApi(data, url);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
  return { mutation };
};
