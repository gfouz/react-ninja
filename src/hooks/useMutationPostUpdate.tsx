import { useMutation, QueryClient } from '@tanstack/react-query';

interface UpdatePostData {
  title: string;
  content: string;
}

const queryClient = new QueryClient();

export const useMutationPostUpdate = (
  fetchApi: (data: UpdatePostData, url: string, token: string | undefined) => Promise<any>,
  url: string,
  token: string | undefined,
) => {
  const mutation = useMutation({
    mutationFn: (data: UpdatePostData) => {
      return fetchApi(data, url, token);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
  return { mutation };
};
