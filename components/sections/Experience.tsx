import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const experiences = [
  {
    date: 'August 2021 - Present',
    title: 'High School Student @ CRHS',
    description: 'Relevant coursework: AP C.S. Principles, AP C.S. A, KAP Data Structures & Algorithms',
  },
  {
    date: 'May 2023 - Present',
    title: 'Teaching and Grading Assitant @ Kumon North America',
    description: 'Helped with grading assignments and tests, providing constructive feedback to students based on results. Aided in teaching students new concepts and strategies to improve their understanding of the material.',
  },
  {
    date: 'August 2025 - May 2029',
    title: 'Computer Science Student @ Texas A&M University',
    description: 'Pursuing a B.S. in Computer Science with a minor in Computer Engineering',
  },
];

export default function Experience() {
  return (
    <div id="experience" className="h-full py-24 border-b-2 border-gray-500 bg-slate-200 dark:bg-dark-background2 px-6 lg:px-8">
      <div className="container mx-auto sm:px-36 xl:px-52">
        <h2 className="text-3xl font-extrabold text-center text-light-text dark:text-white mb-8 underline underline-offset-8">
          My Experiences
        </h2>
        <div className="relative border-l-4 border-blue-500 dark:border-blue-300">
          {experiences.map((experience, index) => {
            const [ref, isVisible] = useIntersectionObserver();
            return (
              <div
                key={index}
                ref={ref}
                className={`mb-8 ml-6 border border-gray-300 dark:border-hidden rounded-md transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="absolute w-6 h-6 mt-10 bg-blue-500 dark:bg-blue-300 rounded-full -left-3.5 border-4 border-light-background dark:border-dark-background2"></div>
                <div className="bg-light-background dark:bg-dark-background p-4 rounded-lg shadow-lg">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{experience.date}</span>
                  <h3 className="text-xl font-semibold text-light-text dark:text-white">{experience.title}</h3>
                  <p className="text-light-text dark:text-dark-text">{experience.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}