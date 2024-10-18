import React from 'react';
import { DiReact, DiCss3 } from "react-icons/di";
import { FaHtml5, FaMarkdown, FaJs, FaNodeJs, FaPython, FaJava, FaUbuntu, FaGithub, FaDocker } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import { SiTypescript, SiVisualstudiocode, SiVercel, SiNetlify } from "react-icons/si";

type SkillCategory = {
  name: string;
  icon: JSX.Element;
};

type SkillsType = {
  "Frontend and Design": SkillCategory[];
  Backend: SkillCategory[];
  DevOps: SkillCategory[];
};

const skills: SkillsType = {
  "Frontend and Design": [
    { name: "React.js", icon: <DiReact /> },
    { name: "Next.js", icon: <RiNextjsFill /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <DiCss3 /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { name: "Markdown", icon: <FaMarkdown /> },
  ],
  "Backend": [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
  ],
  "DevOps": [
    { name: "Visual Studio Code", icon: <SiVisualstudiocode /> },
    { name: "Ubuntu Linux", icon: <FaUbuntu /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Firebase", icon: <RiFirebaseFill /> },
  ],
};

export default function Skills() {
  return (
    <div id="skills" className=" border-y-2 border-gray-300 bg-light-background dark:bg-dark-background min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-light-text dark:text-white mb-8">
          My Skills (Under Construction)
        </h2>
        {Object.keys(skills).map((category) => (
          <div key={category} className="mb-8">
            <h3 className="text-2xl font-bold text-light-text dark:text-white mb-4">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills[category as keyof SkillsType].map((skill, index) => (
                <div key={index} className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-lg flex items-center space-x-2">
                  <span className="text-2xl text-light-text dark:text-white">{skill.icon}</span>
                  <span className="text-lg font-semibold text-light-text dark:text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};