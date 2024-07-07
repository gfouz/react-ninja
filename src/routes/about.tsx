import Layout from '../components/layout/Layout.tsx';
import { about_welcome, technical_skills, devto_about } from './content.ts'

export default function About() {
  return ( 
  <Layout>
    <section className='w-full flex flex-col justify-center items-center bg-[#0c0b1f]'>
      <div className='relative'>
        <section className='w-full h-full absolute top-0 left-0 flex justify-center items-center'>
          <h2 className='text-gray-900 text-[7vw] font-extrabold tracking-tight mb-20'>About Giovani</h2>
        </section>
        <img className='max-w-[100%] h-auto' src='images/devto.jpg' alt='devto' />
      </div>
      
      <article className='max-w-[600px]  py-16 text-left text-violet-400'>
        <h2 className='text-center text-4xl mb-10 mx-4 font-extrabold tracking-wider'>Technical profile</h2>
        <section className='p-4 bg-[#1e1136]'>
          <h2 className='text-3xl text-[#f4c703] font-extrabold tracking-wider'>Hello!</h2>
          <p>{ about_welcome }</p>
          <h2 className='capitalize text-3xl text-[#f4c703] font-extrabold tracking-wider'>technical skills</h2>
          <div dangerouslySetInnerHTML={{ __html: technical_skills }} />
            <h2 className='text-3xl text-[#f4c703] font-extrabold tracking-wider'>Developers Community</h2>
          <div dangerouslySetInnerHTML={{ __html:  devto_about  }} />
        </section>
      </article> 
    </section>
  </Layout>
  );  
}
