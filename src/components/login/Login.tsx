import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { LoginSchema, LoginInput } from '../../schemas/login.schema.ts';
import { loginService } from '../../services/loginService.ts';
import { useAcyncMutation } from '../../hooks/useAcyncMutation';

import GithubButton from '../../components/buttons/GithubButton.tsx';
import GoogleButton from '../../components/buttons/GoogleButton.tsx';
import SubmitButton from '../../components/buttons/SubmitButton.tsx';
import UsernameInput from '../../components/input/UsernameInput.tsx';
import PasswordInput from '../../components/input/PasswordInput.tsx';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
  });
  const { mutation } = useAcyncMutation(loginService);
  const onSubmit: SubmitHandler<addPostType> = async (data) => {
    const res = mutation.mutateAsync(data);
  };
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
        </div>
      </div>
    </div>
  );
};

export default Login;
