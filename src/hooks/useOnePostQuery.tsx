import { useQuery } from '@tanstack/react-query';
import { Post } from '../store/actions';

export const useOnePostQuery = (
  queryFn: (arg0: any) => Post | Promise<Post>,
  url: string,
) => {
  const { isPending, isError, data, error } = useQuery<Post>({
    queryKey: ['get-one-post'],
    queryFn: () => {
      return queryFn(url);
    },
  });
  return { data, error, isError, isPending };
};
