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
      <main className='mx-auto'>
        {/* About Section  w-[100%] aspect-[1.85] */}

        <section className='relative grid place-items-center  bg-[#030303]'>
          <img src='images/space.jpg' alt='space' />
          <section className='absolute top-0 grid place-items-center left-0 w-full h-full'>
            <div className='flex flex-col items-center z-10'>
              <h2 className='text-[6vw] text-white'>
                Web<span className='text-red-500'>Developer</span>
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
          <div className='p-12'>
            <h2 className='text-center text-3xl text-slate-600 font-extrabold tracking-tight'>
              Projects
            </h2>
          </div>
          <article className='grid place-items-center'>
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
