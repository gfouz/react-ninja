import { useMutation, QueryClient } from '@tanstack/react-query';

interface UpdatePostData {
  title: string;
  content: string;
}
interface MutationFnInterface { 
  (data: UpdatePostData, url: string): Promise<any>; (arg0: UpdatePostData, arg1: any): Promise<unknown>; }

const queryClient = new QueryClient();

export const useUpdatePost = (fetchApi: MutationFnInterface, url: string) => {
  const mutation = useMutation({
    mutationFn: (data: UpdatePostData ) => {
      return fetchApi(data, url);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
  return { mutation };
};
