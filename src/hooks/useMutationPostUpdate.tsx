import { useMutation, QueryClient } from '@tanstack/react-query';
import { Post } from '../schemas/post.schema';

const queryClient = new QueryClient();

export const useMutationPostUpdate = (
  fetchApi: (
    data: Post,
    url: string,
    token: string | undefined,
  ) => Promise<any>,
  url: string,
  token: string | undefined,
) => {
  const mutation = useMutation({
    mutationFn: (data: Post) => {
      return fetchApi(data, url, token);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
  return { mutation };
};
