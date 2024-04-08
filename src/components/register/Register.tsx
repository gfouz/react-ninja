import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, RegisterInput } from '../../schemas/register.schema';
import { registerService } from '../../services/registerService';
import { useAcyncMutation } from '../../hooks/useAcyncMutation';

import GithubButton from '../buttons/GithubButton';
import GoogleButton from '../buttons/GoogleButton';
import SubmitButton from './SubmitButton';
import UsernameInput from '../../components/input/UsernameInput';
import EmailInput from '../../components/input/EmailInput';
import PasswordInput from '../../components/input/PasswordInput';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
  });

  const { mutation } = useAcyncMutation(registerService);

  const onSubmit: SubmitHandler<RegisterInput> = async (data) => {
    const res = mutation.mutateAsync(data);
  };
  return (
    <div className='w-full h-[100vh] bg-slate-800'>
      <div className='p-8 lg:w-1/2 mx-auto'>
        <div className='bg-white rounded-t-lg p-8'>
          <p className='text-center text-sm text-gray-400 font-light'>
            Sign up with
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
            Or sign up with credentials{' '}
          </p>
          <form className='mt-6' onSubmit={handleSubmit(onSubmit)}>
            <UsernameInput register={register} errors={errors} />
            <EmailInput register={register} errors={errors} />
            <PasswordInput register={register} errors={errors} />
            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  );
}

//#1e293b slate-800
