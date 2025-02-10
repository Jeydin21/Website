import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  url: string;
  stars: number;
}

export default function ProjectCard({ name, description, language, languageColor, url, stars }: ProjectCardProps) {
  return (
    <Link title={name} href={url} target="_blank" rel="noopener noreferrer" className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-2 duration-300 h-44 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      </div>
      <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
        <div className="flex items-center space-x-2">
          <span className={`w-3 h-3 mt-1 rounded-full ${languageColor}`}></span>
          <span>{language}</span>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927C9.469 1.64 10.531 1.64 10.951 2.927L12.3 7.05C12.4 7.36 12.69 7.55 13.02 7.55H17.5C18.88 7.55 19.34 9.34 18.18 10.18L14.5 12.88C14.23 13.08 14.12 13.44 14.22 13.75L15.57 17.87C15.99 19.16 14.54 20.16 13.38 19.32L9.7 16.62C9.43 16.42 9.07 16.42 8.8 16.62L5.12 19.32C3.96 20.16 2.51 19.16 2.93 17.87L4.28 13.75C4.38 13.44 4.27 13.08 4 12.88L0.32 10.18C-0.84 9.34 -0.38 7.55 1 7.55H5.48C5.81 7.55 6.1 7.36 6.2 7.05L7.55 2.93C7.97 1.64 9.03 1.64 9.45 2.93L9.049 2.927Z"></path></svg>
            <span className='mt-0.5'>{stars}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};