import ButtonsContainer from "@/components/buttons/ButtonsContainer"
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Footer = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <footer ref={ref} className={`border-t-2 border-gray-500 bg-slate-200 dark:bg-dark-background2 py-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-2">
          <ButtonsContainer />
          {/* <p>&copy; {new Date().getFullYear()} Jeydin21. All rights reserved.</p> */}
          <p className="font-bold text-black dark:text-white">Crafted with ❤️ by Jeydin Pham</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;