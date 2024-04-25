//@ts-nocheck
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import PostNavbar from '../../components/post/PostNavbar.tsx';
import { usePostListQuery } from '../../hooks/usePostListQuery.tsx';

export default function PostLayout() {
  const { slug } = useParams();
  const { posts } = usePostListQuery();
  const post = posts?.find((post) => post.slug === slug);
  const created_at = post?.created_at !== undefined ? post.created_at : '';
  const published = new Date(created_at).toDateString();

  return (
    <>
      {post && (
        <div className='container mx-auto px-4 py-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='md:col-span-2'>
              <div className='bg-white rounded-lg shadow-md p-6'>
                <h1 className='font-bold mb-4'>{post?.title}</h1>
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
              <div className='bg-white rounded-lg shadow-md p-6'>
                <h2 className='text-lg font-bold mb-4'>Learn more</h2>
                <PostNavbar />
                <hr className='my-4 bg-[#000000]' />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

//https://www.w3.org/TR/wai-aria-1.2/#landmark_roles
