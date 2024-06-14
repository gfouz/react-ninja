import { useMutation, QueryClient } from '@tanstack/react-query';
interface PostData {
  title: string;
  content: string;
}
interface MutationFnInterface {
  (data: any): Promise<any>;
  (data: { username: string; email: string; password: string }): Promise<any>;
  (data: { username: string; password: string }): Promise<any>;
  (arg0: PostData): Promise<unknown>;
}
const queryClient = new QueryClient();

export const useAcyncMutation = (fetchApi: MutationFnInterface) => {
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
