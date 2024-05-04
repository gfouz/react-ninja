//@ts-nocheck
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import PostNavbar from '../../components/post/PostNavbar.tsx';
import { usePostListQuery } from '../../hooks/usePostListQuery.tsx';
import CommentsForm from '../../components/form/CommentsForm.tsx';

export default function PostLayout() {
  const { slug } = useParams();
  const { posts } = usePostListQuery();
  const post = posts?.find((post) => post.slug === slug);
  const created_at = post?.created_at !== undefined ? post.created_at : '';
  const published = new Date(created_at).toDateString();

  return (
    <>
      {post && (
        <div className='mx-auto px-4 py-8'>
          <div className='fixed top-20 right-8 z-10 rounded-[50%] bg-gray-900 p-2 w-[40px] h-[40px]'>
            <Link className='' to='/blog'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  fill-rule='evenodd'
                  d='M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z'
                  clip-rule='evenodd'
                />
              </svg>
            </Link>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='md:col-span-2'>
              <div className='bg-white rounded-lg shadow-md p-6'>
                <h1 className='text-3xl sm:text-4xl font-bold mb-4'>
                  {post?.title}
                </h1>
                <p className='text-gray-700 mb-6'>{published}</p>
                <img
                  src='https://via.placeholder.com/800x400'
                  alt='Post Image'
                  className='mb-4 rounded-lg'
                />
                <ReactMarkdown
                  className='codes'
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || '');
                      return !inline && match ? (
                        <SyntaxHighlighter
                          {...props}
                          className='codes'
                          language='javascript'
                          PreTag='div'
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code {...props} className='overflow-x-auto codes'>
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {post?.content}
                </ReactMarkdown>
              </div>
            </div>

            <div className='md:col-span-1'>
              <div className='relative bg-gray-900 rounded-lg shadow-md p-6 my-8'>
                <h2 className='text-white text-3xl sm:text-4xl font-bold mb-4'>
                  Learn more
                </h2>
                <PostNavbar />
                <hr className='my-4 bg-[#000000]' />
              </div>
              <CommentsForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

//https://www.w3.org/TR/wai-aria-1.2/#landmark_roles
