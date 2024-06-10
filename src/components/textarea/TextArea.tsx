import { Textarea as NextUITextarea } from '@nextui-org/input';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { CreatePostInferface } from '../../schemas/post.schema';

type TextareaProps = {
	register: UseFormRegister<CreatePostInferface>;
	errors: FieldErrors<CreatePostInferface>;
};

export default function Textarea({ register, errors }: TextareaProps) {
	return (
		<NextUITextarea
			maxRows={5}
			variant='underlined'
			className='max-w-xl'
			{...register('content')}
			placeholder='Enter your Content'
			isInvalid={errors?.content?.message ? true : false}
			errorMessage={`${errors?.content?.message}`}
		/>
	);
}
