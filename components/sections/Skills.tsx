import React from 'react';

const skills = [
  'React.js',
  'Next.js',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Markdown',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Python',
  'Java',
  'R',
  'Linux',
  'Git',
  'GitHub',
  'Docker',
  'Vercel',
  'GitHub Pages',
  'Netlify',
  'Firebase'
];

/*
Frontend and Design:
React.js
Next.js
HTML
CSS
Tailwind CSS
Markdown

Backend:
JavaScript
TypeScript
Node.js
Python
Java
R

DevOps:
Linux
Git
GitHub
Docker

Management:
Vercel
GitHub Pages
Netlify
Firebase

*/

export default function Skills() {
  return (
    <div className="h-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-light-text dark:text-white mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-lg text-center">
              <span className="text-lg font-semibold text-light-text dark:text-white">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};