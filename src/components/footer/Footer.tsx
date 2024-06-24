import CommentsForm from '../../components/form/CommentsForm.tsx';

interface IFooter {
  color?: string;
  background?: string;
}

export default function Footer(props: IFooter) {
  const { color, background } = props;
  return (
    <footer
      className={`${color} dark:bg-gray-900 dark:text-gray-100 flex justify-center px-4 w-[100%] ${background}`}
    >
      <div className='container px-4 py-8'>
        <div className='flex justify-center py-6'>
          <CommentsForm color={color} background={background} />
        </div>
        <hr className='h-px mt-6 bg-gray-700 border-none' />

        <div className='flex flex-col items-center justify-between mt-6 md:flex-row'>
          <div>
            <a
              href='https://github.com/gfouz'
              className={`${color} capitalize px-4 text-sm`}
            >
              fouz.dev
            </a>
          </div>
          <div className='flex mt-4 md:m-0 '>
            <div className='mx-4'>
              <a
                href='https://github.com/gfouz'
                className={`${color} px-4 text-sm`}
              >
                Github
              </a>
              <a href='/blog-dashboard' className={`${color} px-4 text-sm`}>
                Blog
              </a>
              <a
                href='https://dev.to/gfouz'
                className={`${color} px-4 text-sm`}
              >
                DevCommunity
              </a>
              <a href='#' className={`${color} px-4 text-sm`}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
