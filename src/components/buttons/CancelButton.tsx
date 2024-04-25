import { useNavigate } from 'react-router-dom';

interface CancelButtonProps {
	color?: string;
	size?: number;
	content?: string;
}

export default function CancelButton({
	color = '#222222',
	size = 24,
	content = 'Cancel',
}: CancelButtonProps) {
	const navigate = useNavigate();
	return (
		<button
			onClick={() => {
				navigate('/');
			}}
			className='flex items-center my-4 py-2 px-4 sm:mx-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5'
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				fill={color}
				viewBox='0 0 576 512'
			>
				<path d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z' />
			</svg>
			<span className='font-extrabold mx-2'>{content}</span>
		</button>
	);
}
