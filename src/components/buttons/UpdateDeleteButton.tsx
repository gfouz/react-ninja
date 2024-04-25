import React from 'react';
import EditButton from './EditButton.tsx';
import DeleteButton from './DeleteButton.tsx';
import DeleteWarning from './DeleteWarning.tsx';
import { Post } from '../../store/actions.ts';

interface CrudButtonProps {
	postId: string;
	post: Post;
}

const UpdateDeleteButton = ({ postId, post }: CrudButtonProps) => {
	const [isDelete, setIsDelete] = React.useState(false);

	return (
		<div className='flex'>
			<div className='z-10 w-44 '>
				<ul className='flex py-1 text-sm'>
					<li>
						<EditButton post={post} />
					</li>
					<li>
						{isDelete === true ? (
							<DeleteWarning postId={postId} />
						) : (
							<DeleteButton setIsDelete={setIsDelete} />
						)}
					</li>
				</ul>
			</div>
		</div>
	);
};
export default UpdateDeleteButton;
