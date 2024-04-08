import React from 'react';
import { Link } from 'react-router-dom';
import CrudButton from '../buttons/CrudButton.tsx';

const Table = ({ posts }) => {
	const [data, setData] = React.useState([]);
	React.useEffect(() => {
		setData(posts);
	}, [posts]);
	return (
		<div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
			<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
				<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
					<tr>
						<th scope='col' className='px-6 py-3'>
							Title
						</th>
						<th scope='col' className='px-6 py-3'>
							Author
						</th>
						<th scope='col' className='px-6 py-3'>
							Date
						</th>
						<th scope='col' className='px-6 py-3'>
							<span className='sr-only'>Edit</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((post) => {
						return (
							<tr
								key={post?.id}
								className='bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600'
							>
								<th
									scope='row'
									className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
								>
									<Link
										className='no-underline'
										to={`/published/${post?.slug}`}
									>
										{post?.title}
									</Link>
								</th>
								<td className='px-6 py-4'>{post.author?.username}</td>
								<td className='px-6 py-4'>{post?.date}</td>

								<td className=''>
									<CrudButton postId={post?.id} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
export default Table;
