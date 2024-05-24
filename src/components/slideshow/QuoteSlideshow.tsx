import React, { useState, useEffect } from 'react';
// import quotes from './quotes.json';

const quotes = [
	{
		quote:
			'Web developer focused on ReactJs and its ecosystem. I have experience with technologies such as Html, Css, Scss, JavaScript, TypeScript and libraries such as TailwindCss, styled-components and css-modules and some ui-libraries.',
		author: 'John Lennon',
	},
	{
		quote:
			'And i have also used Django and Django Ninja for handling the heavy lifting of RESTful APIs and backend logic using Python.',
		author: 'Steve Jobs',
	},
	{
		quote:
			'Because Django Ninja effortlessly manages authentication, data validation, and API endpoints, ensuring security and scalability.',
		author: 'Abraham Lincoln',
	},
];

const QuoteSlideshow = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className='rounded-lg border border-gray-500 p-2 relative h-[240px] overflow-hidden'>
			{quotes.map((quote, idx) => (
				<blockquote
					key={idx}
					className={` px-8 p-4 absolute top-0 left-0  transition-all duration-1000 ${
						idx === index ? '' : ''
					}`}
				>
					<p
						className={`text-blue-100 transition-all duration-1000 ${
							idx === index ? 'opacity-1' : 'opacity-0'
						}`}
					>
						{quote.quote}
					</p>
				</blockquote>
			))}
		</div>
	);
};

export default QuoteSlideshow;
