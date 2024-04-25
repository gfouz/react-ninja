import Navbar from '../components/navbar/Navbar';
import { projects, about } from './content.ts';

const Root = () => {
  return (
    <div className='font-sans antialiased bg-slate-800'>
      {/* Header */}
      <header className=''>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className='mx-auto'>
        {/* About Section */}

        <section className='grid place-items-center w-[100%] aspect-[1.85] bg-slate-800'>
          <div className='grid place-items-center text-center'>
            <img
              className='girl-motion max-w-[200px]'
              src='images/www.png'
              alt='young girl'
            />
            <div className='input-errors my-8'>
              <p className='text-white font-bold text-[1.2em] '>
                Welcome to my Portfolio!
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-blue-100 my-8'>Projects</h2>
            <p className='text-lg text-blue-100'>Check out some of my work.</p>
          </div>
          <div className='grid-auto-fit p-4'>
            {/* Your projects here */}
            <div className='text-blue-100 p-6 rounded-lg border'>
              <div className='grid place-items-center aspect-[600/400] text-center rounded-lg'>
                <img src='images/blog.png' alt='' />
              </div>
              <h3 className='text-xl font-bold mb-2 text-blue-100'>
                Ninja Blog
              </h3>
              <p
                className='text-blue-100 paragraphs-link'
                dangerouslySetInnerHTML={{ __html: projects.blog }}
              />
            </div>
            <div className='text-blue-100 p-6 rounded-lg border'>
              <div className='grid place-items-center aspect-[600/400] text-center '>
                <img src='images/handbag.png' alt='' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Finances App</h3>
              <p
                className='paragraphs-link'
                dangerouslySetInnerHTML={{ __html: projects.blog }}
              />
            </div>
            <div className='text-blue-100 p-6 rounded-lg border'>
              <div className='grid place-items-center aspect-[600/400] text-center rounded-lg transition-all'>
                <img className='' src='images/cart.png' alt='' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Ecommerce</h3>
              <p
                className='paragraphs-link'
                dangerouslySetInnerHTML={{ __html: projects.blog }}
              />
            </div>
          </div>
        </section>
        <img src='images/fouz-dev.jpg' alt='' />

        <div className='p-6 max-w-[700px] text-left mx-auto'>
          <h3 className=' text-center text-blue-100 font-bold my-6'>
            About me
          </h3>
          <p className='text-blue-100'>{about.col_one}</p>
        </div>
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
