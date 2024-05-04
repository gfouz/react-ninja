import { Link, useLocation } from 'react-router-dom';

let regex = /\//g;

const DesktopMenu = (props) => {
  const { links, color } = props;
  let { pathname } = useLocation();
  return (
    <div className='hidden md:flex items-center space-x-4'>
      {links?.map((link) => (
        <div key={link} className={pathname !== link ? 'block' : 'hidden'}>
          <Link
            to={link}
            style={{ color: color }}
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold'
          >
            <span>{pathname !== link ? link.replace(regex, ' ') : null} </span>
            <span>{link === '/' && pathname !== link ? 'home' : null}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default DesktopMenu;
