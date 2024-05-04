import { Link, useLocation } from 'react-router-dom';

let regex = /\//g;

const MobileMenu = (props) => {
  const { links, color } = props;
  let { pathname } = useLocation();
  return (
    <div className='md:hidden' id='mobile-menu'>
      <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
        {links?.map((link) => (
          <div key={link} className={pathname !== link ? 'block' : 'hidden'}>
            <Link
              to={link}
              style={{ color: color }}
              className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              <span>
                {pathname !== link ? link.replace(regex, ' ') : null}{' '}
              </span>
              <span>{link === '/' && pathname !== link ? 'home' : null}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MobileMenu;
