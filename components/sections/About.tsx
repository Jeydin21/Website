import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function About() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div id="about" className="pt-24 border-t-2 border-gray-500 bg-slate-200 dark:bg-dark-background2 h-full relative isolate px-6 lg:px-8">
      <div className="mx-auto font-extrabold text-3xl text-center text-light-text dark:text-white mb-8 underline underline-offset-8">
        About Me
      </div>
      <div
        ref={ref}
        className={`mx-auto max-w-2xl space-y-6 text-light-text dark:text-dark-text transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="text-lg leading-8">
          <p>
            Hi, I'm a computer science and computer engineering student based in Katy, Texas.
            <br /><br />
            I'm a tech enthusiast with a love for Linux and open-source software. Creating websites and stylish user interfaces is what I do, and I'm always open to collaboration on projects and innovative ideas.
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold text-light-text dark:text-white">Hobbies & Activities</h2>
            <ul className="list-disc list-inside mt-2">
              <li>Programming (duh)</li>
              <li>Binging anime / Reading manga</li>
              <li>Valorant with my homies</li>
              <li>Customizing my Ubuntu rice AGAIN</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}