import Link from 'next/link'
import { FaDownload, FaSun } from 'react-icons/fa6'

interface HeaderProps {
  navigation: { name: string, href: string }[]
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-600 bg-opacity-90 text-white shadow-xl rounded-full py-3 px-5 z-50 w-[85%] max-w-8xl backdrop-blur-sm">
      <div className="flex justify-between items-center">
        {/* Left section (Logo and name) */}
        <div className="flex items-center space-x-4">
          <img
            src="/favicon.png"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-lg font-extrabold">Jeydin21</span>
        </div>

        {/* Right section (Links, CV button, and Language button) */}
        <div className="flex items-center space-x-3">
          {/* Navigation links */}
          <div className="hidden md:flex space-x-6 font-extrabold">
            <Link href="/" title='Home' className="hover:text-green-500">Home</Link>
            <Link href="/about" title='About' className="hover:text-green-500">About</Link>
            <Link href="/experience" title='Experience' className="hover:text-green-500">Experience</Link>
            <Link href="/projects" title='Projects' className="hover:text-green-500">Projects</Link>
            <Link href="/contact" title='Contact' className="hover:text-green-500">Contact</Link>
          </div>

          {/* CV Download button */}
          <Link
            className='flex flex-row items-center border-2 border-green-500 bg-gray-800/95 text-white px-4 py-2 rounded-full'
            href="/Resume.pdf"
            title='Download CV'
          >
            <p className="hidden md:block">Download CV</p>
            <span className='ml-1'><i><FaDownload /></i></span>
          </Link>

          {/* Language button */}
          <button title='Toggle theme' className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full">
            <span><i className='w-5 h-5'><FaSun /></i></span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 rounded-lg bg-gray-800 bg-opacity-90 py-2 px-4">
          <div className="space-y-1">
            <Link href="/about" className="block text-gray-300 hover:text-white">About</Link>
            <Link href="/experience" className="block text-gray-300 hover:text-white">Experience</Link>
            <Link href="/projects" className="block text-gray-300 hover:text-white">Projects</Link>
            <Link href="/contact" className="block text-gray-300 hover:text-white">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};