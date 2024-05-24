import React from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import HamburgerButton from '../buttons/HamburgerButton';

interface NavbarProps {
  links: string[];
  color?: string;
  background?: string;
}

const Navbar = (props: NavbarProps) => {
  const { links, color, background } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav style={{ backgroundColor: background }} className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-6 py-3'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <a
              style={{ color: color }}
              href='https://github.com/gfouz'
              className='flex text-gray-300 text-lg font-bold'
            >
              <img
                className='w-[25px] h-auto'
                src='/images/logo.png'
                alt='my logo'
              />
              <span className='mx-1'>fouzJs</span>
            </a>
          </div>
          <DesktopMenu links={links} color={color} />
          <div className='md:hidden'>
            <HamburgerButton toggleNavbar={toggleNavbar} isOpen={isOpen} />
          </div>
        </div>
      </div>

      {isOpen && <MobileMenu links={links} color={color} />}
    </nav>
  );
};

export default Navbar;
