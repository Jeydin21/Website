import ButtonsContainer from "@/components/buttons/ButtonsContainer";

export default function Hero() {
  return (
    <div className="bg-light-background dark:bg-dark-background h-screen relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-light-text dark:text-dark-text sm:text-6xl">
            Hi, I'm Jeydin!
          </h1>
          <p className="mt-6 text-lg leading-8 text-light-text dark:text-dark-text mb-2">
            I'm a Linux enthusiast and I hate Windows. I love creating websites and cool user interfaces, and I'm always open to collaborating on projects and innovative ideas.
          </p>
          <ButtonsContainer />
        </div>
      </div>
    </div>
  );
}