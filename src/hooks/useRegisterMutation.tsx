import { useMutation, QueryClient } from '@tanstack/react-query';
import { RegisterInput } from '../schemas/register.schema';

interface MutationFnInterface {
  (data: any): Promise<any>;
  (data: { username: string; email: string; password: string }): Promise<any>;

  (arg0: RegisterInput): Promise<unknown>;
}
const queryClient = new QueryClient();

export const useRegisterMutation = (fetchApi: MutationFnInterface) => {
  const mutation = useMutation({
    mutationFn: (data: RegisterInput) => {
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
