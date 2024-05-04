import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, LoginInferData } from '../../schemas/login.schema.ts';
import { loginService } from '../../services/loginService.ts';
import { useLoginMutation } from '../../hooks/useLoginMutation.tsx';

import GithubButton from '../../components/buttons/GithubButton.tsx';
import GoogleButton from '../../components/buttons/GoogleButton.tsx';
import SubmitButton from '../../components/buttons/SubmitButton.tsx';
import UsernameInput from './UsernameInput.tsx';
import PasswordInput from './PasswordInput.tsx';
import { useUserStore } from '../../store/userstore.ts';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInferData>({
    resolver: zodResolver(LoginSchema),
  });
  const dispatch = useUserStore((state) => state.dispatch);
  const user = useUserStore((state) => state.user);
  const { mutation } = useLoginMutation(loginService);
  const onSubmit: SubmitHandler<LoginInferData> = async (data) => {
    const res = await mutation.mutateAsync(data);
    dispatch({ type: 'SET_USER', payload: res });
  };

  console.log(mutation.failureReason);

  return (
    <div className='w-full h-[100vh] bg-slate-800'>
      <div className='p-8 lg:w-1/2 mx-auto'>
        <div className='bg-white rounded-t-lg p-8'>
          <p className='text-center text-sm text-gray-400 font-light'>
            Sign in with
          </p>
          <div>
            <div className='flex items-center justify-center space-x-4 mt-3'>
              <GithubButton />
              <GoogleButton />
            </div>
          </div>
        </div>
        <div className='bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24'>
          <p className='text-center text-sm text-gray-500 font-light'>
            {' '}
            Or sign in with credentials{' '}
          </p>
          <form className='mt-6' onSubmit={handleSubmit(onSubmit)}>
            <UsernameInput register={register} errors={errors} />
            <PasswordInput register={register} errors={errors} />
            <SubmitButton />
          </form>
          {mutation.failureReason ? (
            <p className='text-red-500'>{`${mutation.failureReason}`}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Login;
