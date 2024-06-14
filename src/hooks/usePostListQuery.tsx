import { useQuery } from '@tanstack/react-query';
import { get_posts } from '../services/getPostList';
import { Post } from '../store/actions';

export const usePostListQuery = () => {
  const { isPending, isError, data, error, refetch } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: get_posts,
  });
  const posts = data?.map((post) => post);
  return { posts, error, isError, isPending, refetch };
};
