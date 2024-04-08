import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import PostNavbar from '../../components/post/PostNavbar.tsx';
import { usePostListQuery } from '../../hooks/usePostListQuery.tsx';

export default function Post() {
  const { slug } = useParams();
  const { posts } = usePostListQuery();

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return <p>{`This page doesn't contain fav Post`}</p>;
  }
  return (
    <>
      {post && (
        <>
          <section className='relative'>
            <header className='flex justify-between items-center  text-yellow-600 fixed left-0 right-0 text-left h-[80px]  px-8'>
              <h1 className='text-[2rem]'>Post about technology</h1>
            </header>
            <div className='flex-container md:p-2 md:py-24'>
              <main className='shadow-lg shadow-[#222222]'>
                <article className='p-2 text-left '>
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
                </article>
              </main>
              <aside className='sidebar-md p-2 z-10 relative  shadow-lg shadow-[#222222] pt-[0] md:pt-[70px]'>
                <h2 className='text-left'>Easy navigation to another post</h2>
                <PostNavbar />
                <hr className='my-4 bg-[#000000]' />
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
