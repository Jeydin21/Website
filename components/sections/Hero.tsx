import ButtonsContainer from "@/components/buttons/ButtonsContainer";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <div className="h-screen relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
            Hi, I'm Jeydin!
          </h1>
          <p className="mt-6 text-3xl leading-8 text-black dark:text-white mb-2">
            I am a{" "}
            <ReactTyped
              strings={["student", "developer", "Linux enthusiast", "anime enjoyer"]}
              typeSpeed={50}
              backSpeed={40}
              backDelay={2000}
              loop
            />
          </p>
          <ButtonsContainer />
        </div>
      </div>
    </div>
  );
}