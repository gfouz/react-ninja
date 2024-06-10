import { Input as NextInput } from '@nextui-org/input';
import { InputProps } from '../types';

type keys = 'title' | 'content' ;
const Input = (props: InputProps<keys>) => {
  const { errors, type = 'text', color, label, register,  placeholder } = props;

  return (
    <div className=''>
      <label htmlFor={label} className='my-4'>
        {label.toLowerCase().charAt(0).toUpperCase() + label.slice(1)}
      </label>
      <NextInput
        id={label}
        type={type}
        color={color}
        variant='underlined'
        placeholder={placeholder}
        {...register(label)}
        isInvalid={errors[label]?.message ? true : false}
        errorMessage={`${errors[label]?.message}`}
      />
    </div>
  );
};
export default Input;
