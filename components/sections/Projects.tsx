import { useEffect, useState } from 'react';
import ProjectCard from '../buttons/ProjectsCard';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface Project {
  title: string;
  description: string;
  link: string;
  owner: string;
  repo: string;
  language?: string;
  stars?: number;
  forks?: number;
}

const languageColors: { [key: string]: string } = {
  JavaScript: 'bg-[#f0db4f]',
  TypeScript: 'bg-[#3178c6]',
  Python: 'bg-[#3572A5]',
  Java: 'bg-[#b07219]',
  HTML: 'bg-[#e34c26]',
  Unknown: 'bg-gray-500'
};

export default function Projects() {
  const [projectData, setProjectData] = useState<Project[]>([
    {
      title: "Munchyroll",
      description: "Ad-free anime streaming web app aimed at minimality and responsive design.",
      link: "https://github.com/Jeydin21/Munchyroll",
      owner: "Jeydin21",
      repo: "Munchyroll"
    },
    {
      title: "Personal Website",
      description: "Personal website I created in my senior year of high school for my computer science class.",
      link: "https://github.com/Jeydin21/Website",
      owner: "Jeydin21",
      repo: "Website"
    },
    {
      title: "Raincheck ☔",
      description: "Raincheck is a web app that displays the weather for any location in the world. ",
      link: "https://github.com/Jeydin21/Raincheck",
      owner: "Jeydin21",
      repo: "Raincheck"
    },
    {
      title: "Tailwind Calculator",
      description: "Simple calculator web app created using Tailwind CSS.",
      link: "https://github.com/Jeydin21/Calculator-App",
      owner: "Jeydin21",
      repo: "Calculator-App"
    },
    {
      title: "Crypto Comparer",
      description: "Web app created with Flask to compare the prices of two cryptocurrencies. ",
      link: "https://github.com/Jeydin21/Crypto-Comparer",
      owner: "Jeydin21",
      repo: "Crypto-Comparer"
    }
  ]);

  useEffect(() => {
    const fetchRepoData = async () => {
      const updatedProjects = await Promise.all(projectData.map(async (project) => {
        const response = await fetch(`https://api.github.com/repos/${project.owner}/${project.repo}`);
        const data = await response.json();
        return {
          ...project,
          stars: data.stargazers_count,
          language: data.language
        };
      }));
      setProjectData(updatedProjects);
    };

    fetchRepoData();
  }, []);

  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div id="projects" className="py-24 h-full relative isolate px-6 sm:px-24 xl:px-36">
      <div className="mx-auto font-extrabold text-3xl text-center text-light-text dark:text-white mb-8 underline underline-offset-8">
        Projects
      </div>
      <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.title}
            description={project.description}
            language={project.language || 'Unknown'}
            languageColor={languageColors[project.language || 'Unknown']}
            url={project.link}
            stars={project.stars || 0}
          />
        ))}
      </div>
    </div>
  );
}