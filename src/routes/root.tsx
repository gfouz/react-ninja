import Navbar from '../components/navbar/Navbar';
import MotionOnScroll from '../components/framer-motion/MotionOnScroll.tsx';
import { opacity, zoom } from '../components/framer-motion/MotionOnScroll.tsx';
import { blog_overview, about } from './content.ts';
import QuoteSlideshow from '../components/slideshow/QuoteSlideshow.tsx';
const links = ['/', '/register', '/login', '/blog-dashboard'];

const Root = () => {
  return (
    <div className='font-sans antialiased bg-slate-800'>
      {/* Header */}
      <header className=''>
        <Navbar links={links} />
      </header>

      {/* Main Content */}
      <main className='mx-auto'>
        {/* About Section */}

        <section className='grid place-items-center w-[100%] aspect-[1.85] bg-slate-800'>
          <div className='grid place-items-center text-center'>
            <img
              className='girl-motion max-w-[200px] '
              src='images/www.png'
              alt='welcome'
            />
            <div className='input-errors my-8'>
              <p className='text-white font-bold text-[1.2em] '>
                Welcome to my Portfolio!
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-blue-100 my-8'>Projects</h2>
            <p className='text-lg text-blue-100'>Check out some of my work.</p>
          </div>
          <div className='grid-auto-fit p-4'>
            {/* Your projects here */}
            <div className='text-blue-100 p-6 rounded-lg border border-gray-500'>
              <div className='grid place-items-center aspect-[600/400] text-center rounded-lg'>
                <div className='rounded-lg border border-gray-700 overflow-hidden'>
                  <img
                    className='transition-all hover:scale-[1.2]'
                    src='images/blog.jpg'
                    alt=''
                  />
                </div>
              </div>
              <h3 className='text-xl font-bold mb-2 text-blue-100'>
                Ninja Blog
              </h3>
              <p
                className='text-blue-100 paragraphs-link'
                dangerouslySetInnerHTML={{ __html: blog_overview }}
              />
            </div>
            <div className='text-blue-100 p-6 rounded-lg border border-gray-500'>
              <div className='grid place-items-center aspect-[600/400] text-center '>
                <div className='rounded-lg border border-gray-700 overflow-hidden'>
                  <img
                    className='transition-all hover:scale-[1.2]'
                    src='images/finances.jpg'
                    alt=''
                  />
                </div>
              </div>
              <h3 className='text-xl font-bold mb-2'>Finances App</h3>
              <p
                className='paragraphs-link'
                dangerouslySetInnerHTML={{ __html: blog_overview }}
              />
            </div>
            <div className='text-blue-100 p-6 rounded-lg border border-gray-500'>
              <div className='grid place-items-center aspect-[600/400] text-center rounded-lg transition-all'>
                <div className='rounded-lg border border-gray-700 overflow-hidden'>
                  <img
                    className='transition-all hover:scale-[1.2]'
                    src='images/shopping.jpg'
                    alt=''
                  />
                </div>
              </div>
              <h3 className='text-xl font-bold mb-2'>Ecommerce</h3>
              <p
                className='paragraphs-link'
                dangerouslySetInnerHTML={{ __html: blog_overview }}
              />
            </div>
          </div>
        </section>
        <article className='grid place-items-center aspect-[1300/740] p-20 md:my-12'>
          <MotionOnScroll className='relative' variants={opacity}>
            <img
              className='responsive-img'
              src='images/fouz-stack.png'
              alt=''
            />

            <MotionOnScroll
              className='w-full h-full absolute top-0 left-0 flex items-center'
              variants={zoom}
            >
              <img
                className='max-w-[150px]'
                src='images/girl.png'
                alt='fouz-avatar'
              />
            </MotionOnScroll>
          </MotionOnScroll>
        </article>

        <div className='p-6 max-w-[700px] text-left mx-auto'>
          <h3 className=' text-center text-3xl font-extrabold tracking-tight text-blue-100  my-6'>
            About me
          </h3>
          <article className='p-6 min-h-[350px]'>
            <QuoteSlideshow />
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-yellow-300 text-black font-semibold py-6'>
        <div className='container mx-auto text-center'>
          <p>&copy; 2024 Forest Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Root;
