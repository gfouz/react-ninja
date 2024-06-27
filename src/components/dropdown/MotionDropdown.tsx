import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@nextui-org/button';

const variants = {
  links: {
    display: 'block',
    opacity: [0, 0.25, 0.5, 0.75, 1],
    transition: {
      duration: 5,
    },
  },

  open: {
    display: 'block',
    height: 160,
    opacity: [0, 0.25, 0.5, 0.75, 1],
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    height: 0,
    display: 'none',
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const Dropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <section className='relative  w-[130px] bg-rose-500'>
      <div
        className='flex flex-col items-center '
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='h-[64px] flex justify-center items-center'>
          <Button
            variant='flat'
            className='flex w-[100px] justify-center items-center border border-gray-800 rounded-lg bg-rose-500 text-white  capitalize'
          >
            <img
              className='w-[25px] h-auto '
              src='/images/www.png'
              alt='www.png'
            />
            <span className='font-bold text-white'>Fouz</span>
          </Button>
        </div>

        <motion.nav
          className='bg-rose-500 w-full absolute top-[60px] left-0 rounded-b-md'
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
        >
          <div
            className={` ${isOpen ? 'open' : 'closed'}  capitalize h-[160px] flex flex-col justify-evenly text-center text-white text-sm`}
          >
            <a
              className={` ${isOpen ? 'links' : 'closed'}  hover:bg-rose-400`}
              href='https://github.com/gfouz'
            >
              github
            </a>

            <a
              className={` ${isOpen ? 'links' : 'closed'}  hover:bg-rose-400`}
              href='https://www.linkedin.com/in/giovani-fouz-373210258/'
            >
              linkedIn
            </a>

            <a
              className={` ${isOpen ? 'links' : 'closed'}  hover:bg-rose-400`}
              href='https://dev.to/gfouz'
            >
              Community
            </a>
          </div>
        </motion.nav>
      </div>
    </section>
  );
};
export default Dropdown;
