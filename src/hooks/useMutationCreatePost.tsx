import { useMutation, QueryClient } from '@tanstack/react-query';
import { Post } from '../schemas/post.schema.ts';

const queryClient = new QueryClient();

type MutationFunctionType = {
  (data: Post, token: string | undefined): Promise<any>;
  (arg0: Post, arg1: string): any;
};

export const useMutationCreatePost = (
  fetchApi: MutationFunctionType,
  token: string | undefined,
) => {
  const mutation = useMutation({
    mutationFn: (data: Post) => {
      return fetchApi(data, token);
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
