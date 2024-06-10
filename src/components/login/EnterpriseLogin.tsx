import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, LoginInferData } from '../../schemas/login.schema.ts';
import { loginService } from '../../services/loginService.ts';
import { useLoginMutation } from '../../hooks/useLoginMutation.tsx';
import CancelButton from '../../components/buttons/CancelButton.tsx';
import SuccessButton from '../../components/buttons/SuccessButton.tsx';
import { useUserStore } from '../../store/userstore.ts';
import { Button } from '@nextui-org/button';
import Input from '../../components/input/Input.tsx';
import PasswordInput from '../../components/input/PasswordInput.tsx';

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
    <div className='min-h-screen flex items-center justify-center bg-slate-800 '>
      <div className='bg-slate-900 p-8 rounded-3xl shadow-lg w-full max-w-md '>
        <h2 className='text-slate-500 text-3xl font-extrabold tracking-tight mb-6 text-center'>
          Sign In
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='my-24'>
            <div className='w-full mb-5'>
              <Input
                color='secondary'
                label='username'
                errors={errors}
                register={register}
                placeholder='Enter your Username'
              />
            </div>
          </div>
          <div className='my-16'>
            <div className='w-full mb-5'>
              <PasswordInput
                label='password'
                color='secondary'
                errors={errors}
                register={register}
              />
            </div>
          </div>

          {mutation?.status === 'success' ? (
            <SuccessButton />
          ) : (
            <div className='flex justify-evenly p-4 my-8'>
              <Button color='primary' type='submit' className='px-10'>
                Sign In
              </Button>
              <CancelButton />
            </div>
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
