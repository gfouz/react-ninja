import Navbar from '../components/navbar/Navbar';
import MotionOnScroll from '../components/framer-motion/MotionOnScroll.tsx';
import { opacity } from '../components/framer-motion/MotionOnScroll.tsx';
import { projects } from './content.ts';
import About from '../components/about/About.tsx';
import Projects from '../components/projects/Projects.tsx';

import Footer from '../components/footer/Footer.tsx';

const links = ['/', '/register', '/login', '/blog-dashboard'];

const Root = () => {
  return (
    <div className='font-sans antialiased'>
      {/* Header */}
      <header className=''>
        <Navbar links={links} color='text-blue-950' background='bg-white' />
      </header>

      {/* Main Content */}
      <main className='mx-auto'>
        {/* About Section  w-[100%] aspect-[1.85] */}

        <section className='relative grid place-items-center  bg-[#030303]'>
          <img src='images/space.jpg' alt='space' />
          <section className='absolute top-0 grid place-items-center left-0 w-full h-full'>
            <div className='flex flex-col items-center z-10'>
              <img
                className='girl-motion max-w-[100px] md:max-w-[200px]'
                src='images/www.png'
                alt='welcome'
              />
              <div className='input-errors my-8'>
                <p className='text-black font-extrabold tracking-tight text-[1.2em] '>
                  Welcome to my Portfolio!
                </p>
              </div>
            </div>
          </section>
        </section>

        {/* Projects Section */}
        <section className=''>
          <h2 className='my-16 text-center text-3xl text-gray-800 font-extrabold tracking-tight'>
            Projects
          </h2>
          <article className='grid place-items-center aspect-[1300/740]  md:my-12'>
            <MotionOnScroll className='relative' variants={opacity}>
              <Projects projects={projects} />
            </MotionOnScroll>
          </article>
        </section>
        <About />
      </main>
      <Footer color='text-gray-100' background='bg-slate-900' />
    </div>
  );
};

export default Root;
