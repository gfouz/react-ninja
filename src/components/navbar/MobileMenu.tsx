import { Link, useLocation } from 'react-router-dom';

const MobileMenu = () => {
  let { pathname } = useLocation();
  return (
    <div className='md:hidden' id='mobile-menu'>
      <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
        <Link
          to='/'
          className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
        >
          {pathname !== '/' ? 'Home' : null}
        </Link>
        <Link
          to='/register'
          className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
        >
          {pathname !== '/register' ? 'register' : null}
        </Link>
        <Link
          to='/login'
          className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
        >
          {pathname !== '/login' ? 'login' : null}
        </Link>
        <Link
          to='/create/post'
          className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
        >
          {pathname !== 'create/post' ? 'Create Post' : null}
        </Link>
      </div>
    </div>
  );
};
export default MobileMenu;
