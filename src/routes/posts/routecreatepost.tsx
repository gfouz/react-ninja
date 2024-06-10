import PostCreate from '../../components/post/PostCreate.tsx';
import Navbar from '../../components/navbar/Navbar.tsx';
import BasicFooter from '../../components/footer/BasicFooter.tsx';

const links = ['/', '/register', '/login', '/blog-dashboard'];

const RouteCreatePost = () => {
  return (
    <div className='w-full min-h-screen bg-gray-200'>
      <Navbar links={links} color='text-gray-700' background='bg-slate-200' />
      <PostCreate />
      <BasicFooter color='text-gray-700' background='bg-slate-200' />
    </div>
  );
};
export default RouteCreatePost;
