interface EyeButtonI {
	type: string;
	setType: React.Dispatch<React.SetStateAction<string>>;
}

const EyeButton = ({ type, setType }: EyeButtonI) => {
	function handleClick() {
		setType((st: string) => (st = st == 'text' ? 'password' : 'text'));
	}

	return (
		<button
			type='button'
			onClick={handleClick}
			className='absolute inset-y-0 right-0 pr-3 flex items-center'
		>
			{type ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6 text-gray-400 cursor-pointer'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
					/>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M10 14l4-4m0 0l-4-4m4 4H6'
					/>
				</svg>
			) : (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6 text-gray-400 cursor-pointer'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
					/>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M10 14l4-4m0 0l-4-4m4 4H6'
					/>
				</svg>
			)}
		</button>
	);
};
export default EyeButton;
