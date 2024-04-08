import { UseFormRegister } from 'react-hook-form';

type Props = {
  register: UseFormRegister<IFormValues>;
};

const EmailInput = ({ register }) => {
  return (
    <div className='relative mt-3'>
      <input
        className='appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline'
        id='username'
        type='text'
        placeholder='Password'
        {...register('password')}
      />
      <div className='absolute left-0 inset-y-0 flex items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-7 w-7 ml-3 text-gray-400 p-1'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z' />
        </svg>
      </div>
    </div>
  );
};
export default EmailInput;
