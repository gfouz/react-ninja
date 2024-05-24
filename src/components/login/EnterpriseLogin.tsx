import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, LoginInferData } from '../../schemas/login.schema.ts';
import { loginService } from '../../services/loginService.ts';
import { useLoginMutation } from '../../hooks/useLoginMutation.tsx';

import GithubButton from '../../components/buttons/GithubButton.tsx';
import GoogleButton from '../../components/buttons/GoogleButton.tsx';
import OutlineButton from '../../components/buttons/OutlineButton.tsx';
import HomepageButton from '../../components/buttons/HomepageButton.tsx';
import MaterialDesignInput from '../../components/input/MaterialDesignInput.tsx';
import PasswordInput from './PasswordInput.tsx';
import { useUserStore } from '../../store/userstore.ts';

const EnterpriseLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInferData>({
    resolver: zodResolver(LoginSchema),
  });
  const dispatch = useUserStore((state) => state.dispatch);
  const { mutation } = useLoginMutation(loginService);
  const onSubmit: SubmitHandler<LoginInferData> = async (data) => {
    const res = await mutation.mutateAsync(data);
    dispatch({ type: 'SET_USER', payload: res });
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-slate-500 text-3xl font-extrabold tracking-tight mb-6 text-center'>
          Sign In
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='my-16'>
            <div className='relative z-0 w-full mb-5 group'>
              <MaterialDesignInput errors={errors} register={register}>
                Username
              </MaterialDesignInput>
            </div>
          </div>
          <div className='my-16'>
            <div className='relative z-0 w-full mb-5 group'>
              <MaterialDesignInput
                label='password'
                type='password'
                errors={errors}
                register={register}
              >
                Password
              </MaterialDesignInput>
            </div>
          </div>

          {mutation?.status === 'success' ? (
            <HomepageButton />
          ) : (
            <OutlineButton>Submit</OutlineButton>
          )}
        </form>
        {mutation.failureReason ? (
          <p className='text-rose-500 text-xs tracking-tight font-extrabold'>{`${mutation.failureReason}`}</p>
        ) : null}
      </div>
    </div>
  );
};

export default EnterpriseLogin;
