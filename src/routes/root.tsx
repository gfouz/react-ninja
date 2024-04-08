import DualInput from '../components/input/DualInput';
import PendingDots from '../components/loader/PendingDots';
import Navbar from '../components/navbar/Navbar';
import PostNavbar from '../components/post/PostNavbar.tsx';
import { usePostListQuery } from '../hooks/usePostListQuery.tsx';

const Root = () => {
  const { posts } = usePostListQuery();

  return (
    <div className='font-sans antialiased bg-slate-800'>
      {/* Header */}
      <header className=''>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className='container mx-auto'>
        {/* About Section */}

        <section className='grid place-items-center w-[100%] aspect-[1.85] bg-slate-800'>
          <div className='text-center'>
            <img
              className='girl-motion'
              src='images/slate-girl.jpg'
              alt='young girl'
            />
            <div className='input-errors'>
              <p className='text-white font-bold text-[1.2em]'>
                welcome to my Portfolio!
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-green-800 mb-4'>Projects</h2>
            <p className='text-lg text-green-700'>Check out some of my work.</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Your projects here */}
            <div className='bg-white rounded-lg shadow p-6'>
              <h3 className='text-xl font-bold mb-2 text-green-800'>
                Project Name
              </h3>
              <p className='text-green-700'>Description of the project</p>
              <PostNavbar />
            </div>
            {/* Repeat for each project */}
            <DualInput />
          </div>
          <button className='border border-gray-900 rounded py-1 px-4'>
            {' '}
            <PendingDots pending={true} />{' '}
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className='bg-green-700 text-white py-6'>
        <div className='container mx-auto text-center'>
          <p>&copy; 2024 Forest Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Root;
