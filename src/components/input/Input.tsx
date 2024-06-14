import { Input as NextUIInput } from '@nextui-org/input';
import { InputProps } from '../../schemas/auth.schema.ts';

const Input = (props: InputProps) => {
  const { errors, type = 'text', color, label, register, placeholder } = props;
  const tag = label.toLowerCase().charAt(0).toUpperCase() + label.slice(1);

  return (
    <NextUIInput
      type={type}
      label={tag}
      color={color}
      variant='underlined'
      labelPlacement='outside'
      placeholder={placeholder}
      {...register(label)}
      classNames={{ label: 'dark:!text-white' }}
      isInvalid={errors[label]?.message ? true : false}
      errorMessage={`${errors[label]?.message}`}
    />
  );
};
export default Input;
