export default function About() {
  return (
    <div id="about" className="py-24 border-y-2 border-gray-300 bg-slate-200 dark:bg-dark-background h-full relative isolate px-6 lg:px-8">
      <div className="mx-auto font-extrabold text-3xl text-center text-light-text dark:text-white mb-8">
        About Me
      </div>
      <div className="mx-auto max-w-2xl space-y-6 text-light-text dark:text-dark-text">
        <div className="text-lg leading-8">
          <p>
            Hi, I'm Jeydin! I'm a passionate developer with a love for Linux and open-source software. I enjoy creating websites and cool user interfaces, and I'm always open to collaborating on projects and innovative ideas.
          </p>
        </div>
        <div className="flex flex-row justify-between">
        <div>
          <h2 className="text-2xl font-bold text-light-text dark:text-white">Skills</h2>
          <ul className="list-disc list-inside mt-2">
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
            <li>HTML / CSS / Tailwind CSS</li>
            <li>Node.js</li>
            <li>Git / GitHub</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-light-text dark:text-white">Hobbies</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Anime</li>
            <li>Gaming</li>
            <li>Linux Enthusiast</li>
            <li>Open-source Contributions</li>
            <li>Reading Tech Blogs</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}