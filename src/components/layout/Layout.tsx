import React from 'react';
import Navbar from '../../components/navbar/NextNavbar.tsx';
import Footer from '../../components/footer/Footer.tsx';

interface LayoutProps {
  color?: string;
  background?: string;
  children: React.ReactNode;
}

const links = ['/', '/login', '/register', '/blog-dashboard', '/create/post'];

const Layout = ({ color, children, background }: LayoutProps) => {
  return (
    <section className={`${color} dark h-full w-full ${background}`}>
      <header>
        <Navbar links={links} />
      </header>
      <article className='container mx-auto'>{children}</article>
      <Footer color={color} background={background} />
    </section>
  );
};

export default Layout;
