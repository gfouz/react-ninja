import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
//@ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
import PostNavbar from '../../components/post/PostNavbar.tsx';
import { usePostListQuery } from '../../hooks/usePostListQuery.tsx';

export default function Post() {
  const { slug } = useParams();
  const { posts } = usePostListQuery();

  const post = posts?.find((post) => post.slug === slug);

  return (
    <>
      {post && (
        <>
          <section className='relative'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
              <main className='md:col-span-8 px-4 py-8'>
                <header className='flex justify-between items-center  text-yellow-600 fixed left-0 right-0 text-left h-[80px]  px-8'>
                  <h1 className='text-[2rem]'>Post about technology</h1>
                </header>
                <article className='p-2 text-left '>
                  <ReactMarkdown
                    className='codes'
                    components={{
                      /*@ts-ignore*/
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
                </article>
              </main>
              <aside className='md:col-span-4 md:block px-4 py-8'>
                <article className='col-span-4 bg-gray-100 rounded shadow p-4'>
                  <h2 className='text-left text-gray-600 hover:text-gray-800'>
                    Easy navigation to another post
                  </h2>
                  <PostNavbar />
                  <hr className='my-4 bg-[#000000]' />
                </article>
              </aside>
            </div>

            <div className='grid-footer'>
              <footer className='flex justify-center items-center'>
                fouz.dev &copy;{new Date().getFullYear()}
              </footer>
            </div>
          </section>
        </>
      )}
    </>
  );
}
