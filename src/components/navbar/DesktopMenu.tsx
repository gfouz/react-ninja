import { Link, useLocation } from 'react-router-dom';

const DesktopMenu = () => {
  let { pathname } = useLocation();
  return (
    <div className='hidden md:flex items-center space-x-4'>
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
        {pathname !== '/register' ? 'Register' : null}
      </Link>
      <Link
        to='/login'
        className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
      >
        {pathname !== '/login' ? 'Login' : null}
      </Link>
      <Link
        to='/create/post'
        className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
      >
        {pathname !== '/create/post' ? 'Create Post' : null}
      </Link>
    </div>
  );
};
export default DesktopMenu;
