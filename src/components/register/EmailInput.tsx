import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { RegisterInput } from '../../schemas/register.schema';

type Props = {
  register: UseFormRegister<RegisterInput>;
  errors: FieldErrors<RegisterInput>;
};

const EmailInput = ({ register, errors }: Props) => {
  return (
    <div className='relative mt-3'>
      <input
        className='appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline'
        id='username'
        type='text'
        placeholder='Email'
        {...register('email')}
      />
      <div className='absolute left-0 inset-y-0 flex items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-7 w-7 ml-3 text-gray-400 p-1'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
          <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
        </svg>
      </div>
      {errors.email?.message ? <p>{`${errors.email?.message}`}</p> : null}
    </div>
  );
};
export default EmailInput;
