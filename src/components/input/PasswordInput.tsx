import React from 'react';
import { Input } from '@nextui-org/input';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import EyeButton from '../buttons/EyeButton';
import { LoginInferData } from '../../schemas/login.schema.ts';


interface InputProps {
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined;
  label: string;
  errors: FieldErrors<LoginInferData>;
  register: UseFormRegister<LoginInferData>;
}

const PasswordInput = ({ color, label, errors, register }: InputProps) => {
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
          placeholder='Enter your Password'
          {...register('password')}
          isInvalid={errors?.password?.message ? true : false}
          errorMessage={`${errors?.password?.message}`}
          endContent={<EyeButton color={color} type={type} setType={setType} />}
        />
      </div>
    </>
  );
};

export default PasswordInput;
