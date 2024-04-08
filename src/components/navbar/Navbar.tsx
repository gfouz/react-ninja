import React from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import HamburgerButton from '../buttons/HamburgerButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-6 py-3'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <a
              href='https://github.com/gfouz'
              className='text-white text-lg font-semibold'
            >
              <img
                className='w-[40px] h-auto'
                src='images/logo.png'
                alt='my personal logo'
              />
              fouzJs
            </a>
          </div>
          <DesktopMenu />
          <div className='md:hidden'>
            <HamburgerButton toggleNavbar={toggleNavbar} isOpen={isOpen} />
          </div>
        </div>
      </div>

      {isOpen && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
