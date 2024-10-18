import ButtonsContainer from "@/components/buttons/ButtonsContainer";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <div className="h-screen relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Hello, I'm{' '}
            <span className="from-orange-600 to-orange-500 dark:from-orange-700 dark:to-orange-400 mt-10 bg-gradient-to-r bg-clip-text text-center text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
              Jeydin
            </span>{' '}
            👋
          </h1>
          <p className="mt-6 text-2xl leading-8 text-black dark:text-white mb-2 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            I am a{' '}
            <span className="text-2xl font-extrabold text-transparent sm:text-2xl sm:leading-10 md:text-4xl md:leading-14 bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-400 dark:to-cyan-300 ">
              <ReactTyped
                strings={["student", "developer", "Linux enthusiast", "frontend developer"]}
                typeSpeed={50}
                backSpeed={40}
                backDelay={2000}
                loop
              />
            </span>
          </p>
          <ButtonsContainer />
        </div>
      </div>
    </div>
  );
}