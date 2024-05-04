import { blog_overview } from './content.ts';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer.tsx';
import PostPreview from '../components/post/PostPreview.tsx';

const links = ['/', '/login', '/blog', '/register', '/create/post'];

const Blog = () => {
	return (
		<div className='text-gray-800 bg-gray-100 min-h-screen'>
			{/* Navbar */}
			<header className='bg-blue-500'>
				<div className='mx-auto px-4'>
					<Navbar links={links} color='#ffffff' background='#3B82F6' />
				</div>
			</header>
			{/* Main Content */}
			<div className='mx-auto px-1 py-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{/* Featured Section */}
					<div className='col-span-1 lg:col-span-2'>
						<div className='bg-white p-6 rounded-lg shadow-md'>
							<h2 className=' text-3xl font-bold mb-4'>NINJA BLOG</h2>
							{/* Featured content goes here */}
							<img src='images/blog.jpg' alt='' />
						</div>
					</div>
					{/* Sidebar */}
					<div className='col-span-1'>
						<div className='bg-white p-4 rounded-lg shadow-md'>
							<h2 className='text-3xl font-semibold mb-4'>Overview</h2>
							{/* Sidebar content goes here */}
							<p
								className=''
								dangerouslySetInnerHTML={{ __html: blog_overview }}
							/>
						</div>
					</div>
					{/* Recent Posts Section */}
					<div className='col-span-1 lg:col-span-2'>
						<div className='bg-white p-6 rounded-lg shadow-md pb-20'>
							<h2 className='text-center text-gray-700 text-3xl font-extrabold tracking-tight my-12'>
								Recent Posts
							</h2>
							{/* Recent posts list goes here */}
							<PostPreview />
						</div>
					</div>
				</div>
			</div>
			{/* Footer */}
			<Footer color='#f1f1f1' background='#111827' />
		</div>
	);
};

export default Blog;
