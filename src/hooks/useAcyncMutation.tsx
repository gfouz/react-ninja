import { useMutation, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const useAcyncMutation = (fetchApi) => {
  const mutation = useMutation({
    mutationFn: (data: any) => {
      return fetchApi(data);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
  return { mutation };
};
