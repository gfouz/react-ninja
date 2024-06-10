import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, RegisterInput } from '../../schemas/register.schema';
import { registerService } from '../../services/registerService';
import { useRegisterMutation } from '../../hooks/useRegisterMutation';

import SubmitButton from '../../components/buttons/SubmitButton.tsx';
import LoginButton from '../../components/buttons/LoginButton.tsx';

import PasswordInput from './PasswordInput.tsx';
import ConfirmPassword from '../../components/input/ConfirmPassword.tsx';
import { Spacer } from '@nextui-org/spacer';
import Input from './Input.tsx';

export interface FormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function MaterialDesignSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
  });

  const { mutation } = useRegisterMutation(registerService);

  const onSubmit: SubmitHandler<RegisterInput> = async (data) => {
    mutation.mutateAsync(data);
  };
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-cyan-900'>
      <div className='bg-cyan-950 p-8 py-16 rounded-3xl shadow-lg w-full max-w-md '>
        <h2 className='text-slate-500 text-3xl font-extrabold tracking-tight mb-6 text-center'>
          Sign Up
        </h2>
        <form className='mt-6' onSubmit={handleSubmit(onSubmit)}>
          <div className='my-18'>
            <Input
              color='warning'
              label='username'
              errors={errors}
              register={register}
              placeholder='Enter your Username'
            />
            <Spacer y={8} />
            <Input
              color='warning'
              type='email'
              label='email'
              errors={errors}
              register={register}
              placeholder='Enter your Email'
            />
            <Spacer y={8} />
            <PasswordInput
              color='warning'
              label='password'
              errors={errors}
              register={register}
            />
            <Spacer y={8} />
            <ConfirmPassword
              color='warning'
              label='confirmPassword'
              register={register}
              errors={errors}
            />
            <Spacer y={8} />
            {mutation?.status === 'success' ? (
              <LoginButton />
            ) : (
              <SubmitButton />
            )}
          </div>
        </form>
        {mutation.failureReason ? (
          <p className='text-rose-500 tracking-tight font-extrabold text-xs mt-1'>{`${mutation.failureReason}`}</p>
        ) : null}
      </div>
    </div>
  );
}

//#1e293b slate-800
