import { useState } from 'react'
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-light-background dark:bg-dark-background2 bg-fixed bg-[linear-gradient(to_right,#0096FF20_1px,transparent_1px),linear-gradient(to_bottom,#0096FF20_1px,transparent_1px)] bg-[size:48px_48px] overscroll-contain">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <About />
    </div>
  );
}