import React from 'react';
import { Input } from '@nextui-org/input';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import EyeButton from '../buttons/EyeButton';
import { RegisterInput } from '../../schemas/register.schema';


interface InputProps {
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined;
  label: string;
  errors: FieldErrors<RegisterInput>;
  register: UseFormRegister<RegisterInput>;
}

const PasswordInput = ({ label, color, errors, register }: InputProps) => {
  const [type, setType] = React.useState('password');

  return (
    <>
      <div className='w-full'>
        <label htmlFor={label} className='my-4'>
          {label.toLowerCase().charAt(0).toUpperCase() + label.slice(1)}
        </label>
        <Input
          type={type}
          color={color}
          variant='underlined'
          placeholder='Repeat your Password'
          {...register('confirmPassword')}
          isInvalid={errors?.confirmPassword?.message ? true : false}
          errorMessage={`${errors?.confirmPassword?.message}`}
          endContent={<EyeButton color={color} type={type} setType={setType} />}
        />
      </div>
    </>
  );
};

export default PasswordInput;
