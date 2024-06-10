import React from 'react';
import Navbar from '../../components/navbar/Navbar.tsx';
import Footer from '../../components/footer/Footer.tsx';

interface LayoutProps {
  color?: string;
  background?: string;
  children: React.ReactNode;
}

const links = ['/', '/login', '/blog-dashboard', '/register', '/create/post'];

const Layout = ({ color, children, background }: LayoutProps) => {
  return (
    <div className={`${color} h-full min-h-screen w-full ${background}`}>
      <header>
        <Navbar links={links} color={color} background={background} />
      </header>
      <main className='container mx-auto p-4'>{children}</main>
      <Footer color={color} background={background} />
    </div>
  );
};

export default Layout;
