import { useQuery } from '@tanstack/react-query';
import { get_categories } from '../services/getCategories.ts';

interface Category {
	id: string;
	name: string;
}

export const useCategoriesQuery = () => {
	const { isPending, isError, data, error, refetch } = useQuery<Category[]>({
		queryKey: ['get_categories'],
		queryFn: get_categories,
	});
	const categories = data?.map((cat) => cat);
	return { categories, error, isError, isPending, refetch };
};
