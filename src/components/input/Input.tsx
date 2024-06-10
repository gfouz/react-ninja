import { UseFormRegister, FieldErrors, Path } from 'react-hook-form';
import { Input as NextInput } from '@nextui-org/input';


type keys = "username" | "password";

type GenericRegister<k extends string> = {
  [key in k]: string;
};

interface InputProps<keys extends string> {
  type?: string;
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined;
  placeholder?: string;
  label: Path<GenericRegister<keys> >;
  register: UseFormRegister<GenericRegister<keys>>;
  errors: FieldErrors<GenericRegister<keys>>;
}

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
