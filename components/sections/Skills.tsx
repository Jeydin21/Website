import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaMarkdown, FaJsSquare, FaNodeJs, FaPython, FaJava, FaUbuntu, FaGithub, FaDocker, FaWindows } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import { SiVisualstudiocode, SiVercel, SiNeovim, SiNetlify, SiArchlinux } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

const skills = {
  "Frontend and Design": [
    { name: "React.js", icon: <FaReact />, color: "text-cyan-500" },
    { name: "Next.js", icon: <RiNextjsLine />, color: "text-white" },
    { name: "HTML", icon: <FaHtml5 />, color: "text-red-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill />, color: "text-sky-500" },
    { name: "Markdown", icon: <FaMarkdown />, color: "text-white" },
  ],
  "Backend": [
    { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
    { name: "TypeScript", icon: <BiLogoTypescript />, color: "text-blue-700" },
    { name: "Java", icon: <FaJava />, color: "text-cyan-500" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "Python", icon: <FaPython />, color: "text-sky-600" },
  ],
  "DevOps": [
    { name: "Visual Studio Code", icon: <SiVisualstudiocode />, color: "text-blue-500" },
    { name: "GitHub", icon: <FaGithub />, color: "text-white" },
    { name: "Docker", icon: <FaDocker />, color: "text-blue-500" },
    { name: "Vercel", icon: <SiVercel />, color: "text-black" },
    { name: "Netlify", icon: <SiNetlify />, color: "text-cyan-400" },
    { name: "Firebase", icon: <RiFirebaseFill />, color: "text-red-500" },
  ],
  "Additional": [
    { name: "Ubuntu Linux", icon: <FaUbuntu />, color: "text-amber-500" },
    { name: "Arch Linux", icon: <SiArchlinux />, color: "text-blue-500" },
    { name: "Neovim", icon: <SiNeovim />, color: "text-green-500" },
    { name: "Windows", icon: <FaWindows />, color: "text-blue-300" }

  ]
};

export default function Skills() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-100 text-center mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Frontend and Design Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-100 mb-4">Frontend and Design</h3>
          <p className="text-gray-400 mb-4">
            I enjoy creating visually appealing and user-friendly interfaces. I strive to make the web a more beautiful place.
          </p>
          <div className="flex flex-wrap gap-2 text-[2.5em]">
            {skills["Frontend and Design"].map((skill, index) => (
              <div title={skill.name} key={index} className={`flex items-center space-x-2 ${skill.color}`}>
                {skill.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Backend Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-100 mb-4">Backend</h3>
          <p className="text-gray-400 mb-4">
            I love problem-solving and building complex programs. I seek to create scalable, reliable, and secure solutions.
          </p>
          <div className="flex flex-wrap gap-2 text-[2.5em]">
            {skills["Backend"].map((skill, index) => (
              <div title={skill.name} key={index} className={`flex items-center space-x-2 ${skill.color}`}>
                {skill.icon}
              </div>
            ))}
          </div>
        </div>

        {/* DevOps Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-100 mb-4">DevOps</h3>
          <p className="text-gray-400 mb-4">
            I am passionate about automating workflows and ensuring smooth deployments. I aim to bridge the gap between development and operations.
          </p>
          <div className="flex flex-wrap gap-2 text-[2.5em]">
            {skills["DevOps"].map((skill, index) => (
              <div title={skill.name} key={index} className={`flex items-center space-x-2 ${skill.color}`}>
                {skill.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Card (if needed) */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-100 mb-4">Additional Skills</h3>
          <p className="text-gray-400 mb-4">
            Here are some additional skills that I have acquired over time.
          </p>
          <div className="flex flex-wrap gap-2 text-[2.5em]">
            {skills["Additional"].map((skill, index) => (
              <div title={skill.name} key={index} className={`flex items-center space-x-2 ${skill.color}`}>
                {skill.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}