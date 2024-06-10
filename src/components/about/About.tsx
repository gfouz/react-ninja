import Circles from '../svg/Circle.tsx';
import NavButton from '../buttons/NavButton.tsx';

const About = () => {
	return (
		<section className='overflow-hidden bg-white px-8  pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] dark:bg-dark'>
			<div className='container mx-auto'>
				<div className='-mx-4 flex flex-wrap items-center justify-between'>
					<div className='w-full px-4 lg:w-6/12'>
						<div className='flex items-center'>
							<div className='w-full  xl:w-1/2'>
								<div className='py-3 sm:py-4'>
									<img
										src='images/about-1.jpg'
										alt=''
										className='w-full rounded-2xl'
									/>
								</div>
								<div className='py-3 sm:py-4'>
									<img
										src='images/about-2.jpg'
										alt=''
										className='w-full rounded-2xl'
									/>
								</div>
							</div>
							<div className='w-full px-3 sm:px-4 xl:w-1/2'>
								<div className='relative z-10 my-4'>
									<img
										src='images/about-3.jpg'
										alt=''
										className='w-full rounded-2xl'
									/>
									<span className='absolute -bottom-7 -right-7 z-[-1]'>
										<Circles />
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className='w-full px-4 lg:w-1/2 xl:w-5/12'>
						<div className='mt-10 lg:mt-0'>
							<span className='mb-4 block text-lg font-semibold text-primary'>
								A short biography about me.
							</span>
							<h2 className='mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px] dark:text-white'>
								Who am I and which technologies I work with.
							</h2>
							<p className='mb-5 text-base text-body-color dark:text-dark-6'>
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
								The point of using Lorem Ipsum is that it has a more-or-less.
							</p>
							<p className='mb-8 text-base text-body-color dark:text-dark-6'>
								A domain name is one of the first steps to establishing your
								brand. Secure a consistent brand image with a domain name that
								matches your business.
							</p>
							<NavButton name='Dev Community' link='https://dev.to/gfouz' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default About;
