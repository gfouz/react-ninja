import Navbar from '../components/navbar/Navbar';
import MotionOnScroll from '../components/framer-motion/MotionOnScroll.tsx';
import Layout from '../components/layout/Layout.tsx';
import { opacity } from '../components/framer-motion/MotionOnScroll.tsx';
import { projects } from './content.ts';
import About from '../components/about/About.tsx';
import Projects from '../components/projects/Projects.tsx';

import Footer from '../components/footer/Footer.tsx';

const links = ['/', '/about', '/register', '/login', '/blog-dashboard'];

const Root = () => {
  return (
    <Layout>
      <main className='mx-auto bg-slate-300'>
        {/* About Section  w-[100%] aspect-[1.85] */}

        <section className='w-full relative shadow shadow-2xl'>
          <img
            className='max-w-[100%] h-auto '
            src='images/space.jpg'
            alt='woman on laptop'
          />
          <section className='absolute top-0 flex px-8 justify-end items-center left-0 w-full h-full'>
            <div className='flex flex-col items-center'>
              <h1 className='sr-only'>Giovani fouz portfolio</h1>
              <h2 className='text-[6vw] text-white'>
                Web<span className='text-rose-500'>Developer</span>
              </h2>
              <div className='input-errors my-8'>
                <p className='text-white font-extrabold tracking-tight text-[2vw] relative bottom-10'>
                  Welcome to my Portfolio!
                </p>
              </div>
            </div>
          </section>
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
