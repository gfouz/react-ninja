import React from 'react';
import Navbar from '../../components/navbar/Navbar.tsx';
import EnterpriseFooter from '../../components/footer/EnterpriseFooter.tsx';

const links = ['/', '/login', '/blog', '/register', '/create/post'];

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <header>
        <Navbar links={links} />
      </header>
      <main className='container mx-auto p-4'>{children}</main>
      <EnterpriseFooter />
    </div>
  );
};

export default Layout;
