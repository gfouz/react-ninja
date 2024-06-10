import React from 'react';
import { Input } from '@nextui-org/input';
import EyeButton from '../buttons/EyeButton';
import { InputProps } from '../types';

type labels = 'username' | 'email' | 'password' | 'confirmPassword';


const PasswordInput = ({ color, label, errors, register }: InputProps<labels>) => {
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
