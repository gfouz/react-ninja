import Circles from '../svg/Circle.tsx';
import Modal from '../modal/Modal.tsx';
import { bio, title, info } from './content';

const About = () => {
  return (
    <section className='overflow-hidden bg-white px-8  pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] dark:bg-dark'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap items-center justify-between'>
          <div className='w-full px-4 lg:w-6/12'>
            <div className='flex items-center'>
              <div className='w-full  xl:w-1/2'>
                <div className='py-3 sm:py-4'>
                  <img
                    src='images/about-1.jpg'
                    alt=''
                    className='w-full rounded-2xl'
                  />
                </div>
                <div className='py-3 sm:py-4'>
                  <img
                    src='images/about-2.jpg'
                    alt=''
                    className='w-full rounded-2xl'
                  />
                </div>
              </div>
              <div className='w-full px-3 sm:px-4 xl:w-1/2'>
                <div className='relative z-10 my-4'>
                  <img
                    src='images/about-3.jpg'
                    alt=''
                    className='w-full rounded-2xl'
                  />
                  <span className='absolute -bottom-7 -right-7 z-[-1]'>
                    <Circles />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full px-4 lg:w-1/2 xl:w-5/12'>
            <div className='mt-10 lg:mt-0'>
              <span className='mb-4 block text-lg font-semibold text-primary'>
                A short biography about me.
              </span>
              <h2 className='mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px] dark:text-white'>
                {title}
              </h2>
              <p className='mb-5 text-base text-body-color dark:text-dark-6'>
                {bio}
              </p>
              {/*<NavButton name='Dev Community' link='https://dev.to/gfouz' />*/}
              <Modal title={title} info={info} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
