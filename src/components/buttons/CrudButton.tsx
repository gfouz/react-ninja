import React from 'react';
import DeleteButton from './DeleteButton.tsx';
import EditButton from './EditButton.tsx';
import ThreeDotsButton from './ThreeDotsButton.tsx';
import DeleteWarning from './DeleteWarning.tsx';

const CrudButton = ({ postId }) => {
	const [dropdown, setDrodown] = React.useState(false);
	const [isDelete, setIsDelete] = React.useState(false);

	return (
		<div className='flex'>
			<ThreeDotsButton toggle={setDrodown} />
			<div className='z-10 w-44 bg-white rounded  divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'>
				{dropdown === true ? (
					<ul className='py-1 text-sm'>
						<li>
							<EditButton postId={postId} />
						</li>
						<li>
							{isDelete === true ? (
								<DeleteWarning postId={postId} />
							) : (
								<DeleteButton setIsDelete={setIsDelete} />
							)}
						</li>
					</ul>
				) : null}
			</div>
		</div>
	);
};
export default CrudButton;
