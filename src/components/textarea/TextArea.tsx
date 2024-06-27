import { Textarea as NextUITextarea } from '@nextui-org/input';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Post, InputProps } from '../../schemas/post.schema';

export default function Textarea({
  color,
  register,
  errors,
  defaultValue,
}: InputProps) {
  return (
    <NextUITextarea
      color={color}
      maxRows={10}
      label='Markdown Content'
      variant='underlined'
      labelPlacement='outside'
      {...register('content')}
      placeholder='Enter your Content'
      classNames={{
        input: 'dark:!text-white max-w-2xl',
        label: 'dark:!text-white text-sm',
      }}
      defaultValue={defaultValue}
      isInvalid={errors?.content?.message ? true : false}
      errorMessage={`${errors?.content?.message}`}
    />
  );
}
