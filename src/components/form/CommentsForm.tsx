import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	contactSchema,
	ContactInterface,
} from '../../schemas/contact.schema.ts';
import { useContactMutation } from '../../hooks/useContactMutation.tsx';
import { contactService } from '../../services/contactService.ts';
import EmailsInput from './EmailsInput.tsx';

const CommentsForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactInterface>({
		resolver: zodResolver(contactSchema),
	});

	const { mutation } = useContactMutation(contactService);
	console.log(mutation.data?.Error_Message);

	const onSubmit: SubmitHandler<ContactInterface> = async (data) => {
		await mutation.mutateAsync(data);
	};
	return (
		<section className='rounded-lg rounded-t-lg bg-[140F0F]'>
			<div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
				<div className='mx-auto max-w-screen-md sm:text-center'>
					<div className='py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
						<label htmlFor='comment' className='sr-only'>
							Your comment
						</label>
						<textarea
							{...register('message')}
							rows={6}
							className='px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800'
							placeholder='Write a comment...'
						></textarea>
					</div>
					{errors.message?.message ? (
						<p className=' text-left text-red-400'>{`${errors.message?.message}`}</p>
					) : null}
					<h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
						Send a comment
					</h2>
					<p className='mx-auto mb-8 max-w-2xl  text-slate-800 md:mb-12 sm:text-xl dark:text-gray-400'>
						Stay up to date with the latest trends, announcements and exclusive
						information about React and Django Ninja.
					</p>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0'>
							<EmailsInput register={register} />
						</div>
						<div className='mx-auto max-w-screen-sm  text-left text-gray-500 newsletter-form-footer dark:text-gray-300'>
							{errors.email?.message ? (
								<p className='text-red-400'>{`${errors.email?.message}`}</p>
							) : null}
							Protection of your data is granted.{' '}
							<a
								href='#'
								className='font-medium text-primary-600 dark:text-primary-500 hover:underline'
							>
								Read Privacy Policy
							</a>
						</div>
					</form>
				</div>
			</div>
			{mutation?.failureReason ? (
				<p className='text-red-500'>{`${mutation?.failureReason}`}</p>
			) : null}
		</section>
	);
};
export default CommentsForm;
