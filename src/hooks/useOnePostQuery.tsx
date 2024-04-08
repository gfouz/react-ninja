import { useQuery } from '@tanstack/react-query';

export const useOnePostQuery = (queryFn, url) => {
	const { isPending, isError, data, error } = useQuery({
		queryKey: ['get-one-post'],
		queryFn: () => {
			return queryFn(url);
		},
	});
	return { data, error, isError, isPending };
};
