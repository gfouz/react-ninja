import { useMutation, QueryClient } from '@tanstack/react-query';
interface PostData {
  title: string;
  content: string;
}
const queryClient = new QueryClient();

export const useAcyncMutation = (
  fetchApi: (arg0: PostData) => Promise<unknown>,
) => {
  const mutation = useMutation({
    mutationFn: (data: PostData) => {
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
