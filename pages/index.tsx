import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Header from "@/components/layout/Header";

import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

export default function Landing() {
  const [cookies, setCookie] = useCookies(['theme']);
  const [theme, setTheme] = useState(cookies.theme || 'dark');

  useEffect(() => {
    setCookie('theme', theme, { sameSite: 'lax' });
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme = theme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-light-background dark:bg-dark-background2 bg-fixed bg-[linear-gradient(to_right,#0096FF20_1px,transparent_1px),linear-gradient(to_bottom,#0096FF20_1px,transparent_1px)] bg-[size:48px_48px] transition-all">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}