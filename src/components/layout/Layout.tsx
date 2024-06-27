import React from 'react';
import Navbar from '../../components/navbar/NextNavbar.tsx';
import Footer from '../../components/footer/Footer.tsx';

interface LayoutProps {
  color?: string;
  background?: string;
  children: React.ReactNode;
}

const links = [
  '/',
  '/about',
  '/login',
  '/register',
  '/blog-dashboard',
  '/create/post',
];

const Layout = ({ color, children, background }: LayoutProps) => {
  return (
    <section className={`${color} dark h-full w-full ${background}`}>
      <header className='sticky top-0 left-0 z-30'>
        <Navbar links={links} />
      </header>
      <article className='mx-auto'>{children}</article>
      <Footer color={color} background={background} />
    </section>
  );
};

export default Layout;
