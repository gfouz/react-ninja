import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface Category {
	id: string;
	name: string;
}

type Props = {
	register: UseFormRegister<{ categories: string }>;
	errors: FieldErrors<{ categories: string }>;
	categories: Category[];
};

const Select = ({ register, errors, categories }: Props) => {
	return (
		<section className=''>
			<select
				multiple
				{...register('categories')}
				className='bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  focus:ring-blue-500 focus:border-blue-500'
			>
				{categories ? (
					categories.map((category) => (
						<option
							key={category.id}
							className='selected_categories'
							value={category.name}
						>
							{category.name}
						</option>
					))
				) : (
					<option className='selected_categories' value='no-data'>
						no-data
					</option>
				)}
			</select>
			{errors?.categories?.message ? (
				<p>{`${errors.categories?.message}`}</p>
			) : null}
		</section>
	);
};
export default Select;
