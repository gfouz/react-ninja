import React from 'react';
import { arrows, content, backgrounds } from '../colors';

interface TooltipProps {
  theme: 'indigo' | 'purple' | 'stone' | 'slate' | 'amber' | 'zinc';
  link: string;
  children: React.ReactNode;
  info: string;
}

export default function Tooltip({ theme, link, children, info }: TooltipProps) {
  const [text, setText] = React.useState<string>('text-[#d8b4fe]');
  const [arrow, setArrow] = React.useState<string>('after:border-b-[#3b0764]');
  const [background, setBackground] = React.useState<string>('bg-[#3b0764]');

  React.useEffect(() => {
    setArrow(arrows[theme]);
    setText(content[theme]);
    setBackground(backgrounds[theme]);
  }, [theme]);

  return (
    <div className='w-[100%] min-h-[100vh] flex items-center justify-center'>
      <a
        href={link || '#'}
        className='group border relative inline-block text-blue-500 underline hover:text-red-500 duration-300'
      >
        {children}

        <span
          className={`${text} flex justify-center font-semibold absolute mt-1 hidden group-hover:flex -left-5 top-[100%]  w-48 px-1 py-2  ${background} rounded-lg text-center  text-xs after:content-[''] after:absolute after:left-1/2  after:bottom-[100%]  after:border-8 ${arrow} after:border-x-transparent  after:border-t-transparent`}
        >
          {info || 'some useful information'}
        </span>
      </a>
    </div>
  );
}
