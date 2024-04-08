import { useQuery } from '@tanstack/react-query';
import { get_posts } from '../services/getPostList';

export const usePostListQuery = () => {
	const { isPending, isError, data, error } = useQuery({
		queryKey: ['posts'],
		queryFn: get_posts,
	});
	const posts = data?.map((post) => post);
	return { posts, error, isError, isPending };
};
