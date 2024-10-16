import { useState } from 'react'
import Header from "@/components/layout/Header";
import ButtonsContainer from '@/components/landing/ButtonsContainer';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-light-background dark:bg-dark-background">
      <Header navigation={navigation} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className="bg-light-background dark:bg-dark-background min-h-screen relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-light-text dark:text-dark-text sm:text-6xl">
              Hi, I'm Jeydin!
            </h1>
            <p className="mt-6 text-lg leading-8 text-light-text dark:text-dark-text">
              I'm a Linux enthusiast and I hate Windows. I love developing things related to anime or games, and I'm always open to collaborating on projects and innovative ideas.
            </p>
            <ButtonsContainer />
          </div>
          <div className="animate-bounce absolute bottom-10 left-1/2 mt-10">
            <span className="text-3xl text-light-text dark:text-dark-text">↓</span>
          </div>
        </div>
      </div>
    </div>
  );
}