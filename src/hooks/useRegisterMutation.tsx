import { useMutation, QueryClient } from '@tanstack/react-query';
import { Auth } from '../schemas/auth.schema';

interface MutationFnInterface {
  (data: any): Promise<any>;
  (data: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }): Promise<any>;

  (arg0: Auth): Promise<unknown>;
}
const queryClient = new QueryClient();

export const useRegisterMutation = (fetchApi: MutationFnInterface) => {
  const mutation = useMutation({
    mutationFn: (data: Auth) => {
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
