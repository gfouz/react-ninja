import { useNavigate } from 'react-router-dom';

export default function HomepageButton() {
	const navigate = useNavigate();
	return (
		<button
			onClick={() => {
				navigate('/');
			}}
			className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4  dark:border-gray-600 font-extrabold tracking-tight dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'
		>
			Go homepage
		</button>
	);
}
