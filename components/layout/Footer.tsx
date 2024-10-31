import ButtonsContainer2 from "@/components/buttons/ButtonsContainer"

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-500 bg-slate-200 dark:bg-dark-background2 text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-xs">
            <ButtonsContainer2 />
          </div>
          {/* <p>&copy; {new Date().getFullYear()} Jeydin21. All rights reserved.</p> */}
          <p className="font-bold">Crafted with ❤️ by Jeydin Pham</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;