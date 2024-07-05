import MotionOnScroll from '../components/framer-motion/MotionOnScroll.tsx';
import Layout from '../components/layout/Layout.tsx';
import { opacity } from '../components/framer-motion/MotionOnScroll.tsx';
import { projects } from './content.ts';
import About from '../components/about/About.tsx';
import Projects from '../components/projects/Projects.tsx';
import { introduction } from './content.ts'

const Root = () => {
  return (
    <Layout>
      <main className='mx-auto  bg-slate-300'>
        {/* About Section  w-[100%] aspect-[1.85] */}
        <section className='w-full relative shadow shadow-2xl'>
          <img
            className='max-w-[100%] h-auto '
            src='images/space.jpg'
            alt='woman on laptop'
          />
          <section className='absolute top-0 flex px-8 justify-end items-center left-0 w-full h-full'>
            <a
              href='https://github.com/gfouz'
              className='flex flex-col items-center'
            >
              <h1 className='sr-only'>Giovani fouz portfolio</h1>
              <h2 className='text-[6vw] text-white'>
                Web<span className='text-rose-500'>Developer</span>
              </h2>
              <div className='input-errors my-8'>
                <p className='text-white font-extrabold tracking-tight text-[2vw] relative bottom-10'>
                  Welcome to my Portfolio!
                </p>
              </div>
              <img
                className='w-[25px] h-auto m-[-3rem] md:w-[40px]'
                src='/images/www.png'
                alt='my logo'
              />
            </a>
          </section>
        </section>

        <section className='max-w-[600px] p-8 mt-10 mx-auto'>
          <p className='text-[4vw] sm:text-[3vw] text-justify'>{ introduction }</p>
          <p className='text-[3vw] sm:text-[2vw]'>Alvin Toffler (1979)</p>
        </section>

        {/* Projects Section */}
        <section className='px-8'>
          <div className='py-20'>
            <a href='https://github.com/gfouz'>
              <h2 className='text-center text-3xl font-bold text-dark sm:text-[40px]/[48px]'>
                Github Projects
              </h2>
            </a>
          </div>
          <article className='grid place-items-center '>
            <MotionOnScroll className='relative' variants={opacity}>
              <Projects projects={projects} />
            </MotionOnScroll>
          </article>
        </section>

        <About />
      </main>
    </Layout>
  );
};

export default Root;
