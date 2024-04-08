import { UseFormRegister } from 'react-hook-form';

type Props = {
  register: UseFormRegister<IFormValues>;
};

const UsernameInput = ({ register }: Props) => {
  return (
    <div className='relative'>
      <input
        className='appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline'
        id='username'
        type='text'
        placeholder='Username'
        {...register('username')}
      />
      <div className='absolute left-0 inset-y-0 flex items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-7 w-7 ml-3 text-gray-400 p-1'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z' />
        </svg>
      </div>
    </div>
  );
};
export default UsernameInput;