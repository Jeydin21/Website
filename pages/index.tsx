import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Header from "@/components/layout/Header";
import Skills from "@/components/sections/Skills";

import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { FaX } from 'react-icons/fa6';
import Link from 'next/link';

export default function Landing() {
  const [cookies, setCookie] = useCookies(['theme']);
  const [theme, setTheme] = useState(cookies.theme || 'dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setCookie('theme', theme, { sameSite: 'lax' });
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme = theme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`bg-light-background dark:bg-dark-background2 bg-fixed bg-[linear-gradient(to_right,#0096FF20_1px,transparent_1px),linear-gradient(to_bottom,#0096FF20_1px,transparent_1px)] bg-[size:48px_48px] transition-all`}>
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Experience />
      <Skills />

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-50 flex justify-end ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
        {mobileMenuOpen && (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setMobileMenuOpen(false)}></div>
            <div className="relative bg-gray-800 w-64 h-full shadow-xl z-50">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-gray-300 hover:text-white focus:outline-none"
              >
                <FaX className="w-6 h-6" />
              </button>
              <div className="flex flex-col items-start p-6 space-y-4">
                <Link href="#hero" className="text-gray-300 hover:text-white text-lg" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link href="#about" className="text-gray-300 hover:text-white text-lg" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link href="#experience" className="text-gray-300 hover:text-white text-lg" onClick={() => setMobileMenuOpen(false)}>Experience</Link>
                <Link href="#skills" className="text-gray-300 hover:text-white text-lg" onClick={() => setMobileMenuOpen(false)}>Skills</Link>
                <Link href="#projects" className="text-gray-300 hover:text-white text-lg" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                <Link href="#contact" className="text-gray-300 hover:text-white text-lg" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}