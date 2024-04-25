import { useMutation, QueryClient } from '@tanstack/react-query';
import { CreatePostInterface } from '../schemas/post.schema.ts';

const queryClient = new QueryClient();

 type MutationFunctionType = {(data: CreatePostInterface, token: string): Promise<any>; (arg0: CreatePostInterface, arg1: string): any};
 
export const useCreatePostMutation = (
  fetchApi: MutationFunctionType, token: string) => {
  const mutation = useMutation({
    mutationFn: (data: CreatePostInterface) => {
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
