import { useMutation, QueryClient } from '@tanstack/react-query';
import { CreatePostInferface } from '../schemas/post.schema.ts';

const queryClient = new QueryClient();

type MutationFunctionType = {
  (data: CreatePostInferface, token: string | undefined): Promise<any>;
  (arg0: CreatePostInferface, arg1: string): any;
};

export const useCreatePostMutation = (
  fetchApi: MutationFunctionType,
  token: string | undefined,
) => {
  const mutation = useMutation({
    mutationFn: (data: CreatePostInferface) => {
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
