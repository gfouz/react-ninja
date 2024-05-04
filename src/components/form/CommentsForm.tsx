import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { commentSchema } from '../../schemas/form.input.schema';
import { CommentInterface } from '../../schemas/form.input.schema';
import { useContactService } from '../../hooks/useContactService';
import EmailsInput from './EmailsInput.tsx';

const CommentsForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CommentInterface>({
		resolver: zodResolver(commentSchema),
	});

	const { fetchData } = useContactService();

	const onSubmit: SubmitHandler<InputData> = async (data) => {
		fetchData(data);
	};
	return (
		<section className='rounded-lg rounded-t-lg bg-gray-900'>
			<div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
				<div className='mx-auto max-w-screen-md sm:text-center'>
					<div className='py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
						<label for='comment' className='sr-only'>
							Your comment
						</label>
						<textarea
							{...register('message')}
							rows='6'
							className='px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800'
							placeholder='Write a comment...'
						></textarea>
						{errors.message?.message ? (
							<p className='text-red-400'>{`${errors.message?.message}`}</p>
						) : null}
					</div>
					<h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
						Send a comment
					</h2>
					<p className='mx-auto mb-8 max-w-2xl  text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400'>
						Stay up to date with the roadmap progress, announcements and
						exclusive discounts feel free to sign up with your email.
					</p>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0'>
							<EmailsInput register={register} errors={errors} />
						</div>
						<div className='mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300'>
							{errors.email?.message ? (
								<p className='text-sm text-red-400'>{`${errors.email?.message}`}</p>
							) : null}
							We care about the protection of your data.{' '}
							<a
								href='#'
								className='font-medium text-primary-600 dark:text-primary-500 hover:underline'
							>
								Read our Privacy Policy
							</a>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};
export default CommentsForm;
