import Form from '../form/Form';

export default function Footer() {
  return (
    <footer className='flex justify-center px-4 w-[100%] bg-[#140F0F]'>
      <div className='container py-6'>
        <h2 className='text-[#FEF08A] text-center   '>
          Enter your email and send me a default message.
        </h2>
        <div className='flex justify-center py-6'>
          <Form />
        </div>
        <hr className='h-px mt-6 bg-gray-700 border-none' />

        <div className='text-[#FEF08A] flex flex-col items-center justify-between mt-6 md:flex-row'>
          <div>
            <a href='#' className='text-xl font-bold'>
              Brand
            </a>
          </div>
          <div className='flex mt-4 md:m-0 '>
            <div className='-mx-4'>
              <a href='https://github.com/gfouz' className='px-4 text-sm'>
                Github
              </a>
              <a href='#' className='px-4 text-sm'>
                Blog
              </a>
              <a href='https://dev.to/gfouz' className='px-4 text-sm'>
                DevTo
              </a>
              <a href='#' className='px-4 text-sm'>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
