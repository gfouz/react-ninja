export default function DualInput({ success = true }: { success: boolean }) {
  return (
    <>
      {success == false ? (
        <div className='relative'>
          <input
            className='appearance-none border placeholder-red-500 focus:placeholder-gray-600 border-red-300 hover:border-red-400 transition-colors rounded-md w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:border-gray-400 focus:shadow-outline'
            id='username'
            type='text'
            placeholder='Error'
          />
          <div className='absolute right-0 inset-y-0 flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mr-3 bg-red-500 rounded-full text-white p-1'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fill-rule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                clip-rule='evenodd'
              />
            </svg>
          </div>
        </div>
      ) : (
        <div className='relative'>
          <input
            className='appearance-none border placeholder-green-500 focus:placeholder-gray-600 border-green-300 hover:border-green-400 transition-colors rounded-md w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:border-gray-400 focus:shadow-outline'
            id='username'
            type='text'
            placeholder='Success'
          />
          <div className='absolute right-0 inset-y-0 flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mr-3 bg-green-500 rounded-full text-white p-1'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 13l4 4L19 7'
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
}
