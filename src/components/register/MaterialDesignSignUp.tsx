import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, RegisterInput } from '../../schemas/register.schema';
import { registerService } from '../../services/registerService';
import { useRegisterMutation } from '../../hooks/useRegisterMutation';

import SubmitButton from './SubmitButton';
import MaterialDesignInput from '../../components/input/MaterialDesignInput.tsx';
import LoginButton from '../../components/buttons/LoginButton.tsx';

export interface FormInput {
  username: string;
  email: string;
  password: string;
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
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-slate-500 text-3xl font-extrabold tracking-tight mb-6 text-center'>
          Sign Up
        </h2>
        <form className='mt-6' onSubmit={handleSubmit(onSubmit)}>
          <MaterialDesignInput
            type='text'
            label='username'
            register={register}
            errors={errors}
          >
            Username
          </MaterialDesignInput>
          <MaterialDesignInput
            type='email'
            label='email'
            register={register}
            errors={errors}
          >
            Your Email
          </MaterialDesignInput>
          <MaterialDesignInput
            label='password'
            register={register}
            errors={errors}
          >
            Your Password
          </MaterialDesignInput>
          <MaterialDesignInput
            label='confirmPassword'
            register={register}
            errors={errors}
          >
            Confirm Password
          </MaterialDesignInput>

          {mutation?.status === 'success' ? <LoginButton /> : <SubmitButton />}
        </form>
        {mutation.failureReason ? (
          <p className='text-rose-500 tracking-tight font-extrabold text-xs mt-1'>{`${mutation.failureReason}`}</p>
        ) : null}
      </div>
    </div>
  );
}

//#1e293b slate-800
