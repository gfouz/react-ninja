import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@nextui-org/button';

const variant2 = {
  open: {
    display: 'flex',
    height: 160,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.3,
    },
  },
  closed: {
    height: 0,
    display: 'none',
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const variants = {
  open: {
    display: 'block',
    height: 160,
    opacity: [0, 0.25, 0.5, 0.75, 1],
    transition: {
      duration: 0.8,
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
          className='bg-rose-500 w-full absolute top-[60px] left-0 rounded-b-xl'
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
        >
          <div
            className={` ${isOpen ? 'open' : 'closed'}  capitalize h-[160px] flex flex-col justify-evenly text-center text-white text-sm`}
          >
            <motion.a
              className={` ${isOpen ? 'open' : 'closed'} justify-center items-center border-y border-rose-800  hover:bg-rose-400`}
              href='https://github.com/gfouz'
              animate={isOpen ? 'open' : 'closed'}
              variants={variant2}
            >
              github
            </motion.a>

            <motion.a
              className={` ${isOpen ? 'open' : 'closed'} justify-center items-center border-b border-rose-800 hover:bg-rose-400`}
              href='https://www.linkedin.com/in/giovani-fouz-373210258/'
              animate={isOpen ? 'open' : 'closed'}
              variants={variant2}
            >
              linkedIn
            </motion.a>

            <motion.a
              className={` ${isOpen ? 'open' : 'closed'} justify-center items-center   hover:bg-rose-400`}
              href='https://dev.to/gfouz'
              animate={isOpen ? 'open' : 'closed'}
              variants={variant2}
            >
              Community
            </motion.a>
          </div>
        </motion.nav>
      </div>
    </section>
  );
};
export default Dropdown;
