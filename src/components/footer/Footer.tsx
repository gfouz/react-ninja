import CommentsForm from '../../components/form/CommentsForm.tsx';

interface IFooter {
  color?: string;
  background?: string;
}

export default function Footer(props: IFooter) {
  const { color, background } = props;
  return (
    <footer
      style={{ backgroundColor: background }}
      className='flex justify-center px-4 w-[100%] bg-[#140F0F]'
    >
      <div className='container px-4 py-8'>
        <div className='flex justify-center py-6'>
          <CommentsForm />
        </div>
        <hr className='h-px mt-6 bg-gray-700 border-none' />

        <div className='text-[#FEF08A] flex flex-col items-center justify-between mt-6 md:flex-row'>
          <div>
            <a style={{ color: color }} href='#' className='text-xl font-bold'>
              fouz.dev
            </a>
          </div>
          <div className='flex mt-4 md:m-0 '>
            <div className='-mx-4'>
              <a
                style={{ color: color }}
                href='https://github.com/gfouz'
                className='px-4 text-sm'
              >
                Github
              </a>
              <a style={{ color: color }} href='/blog' className='px-4 text-sm'>
                Blog
              </a>
              <a
                style={{ color: color }}
                href='https://dev.to/gfouz'
                className='px-4 text-sm'
              >
                DevTo
              </a>
              <a style={{ color: color }} href='#' className='px-4 text-sm'>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
