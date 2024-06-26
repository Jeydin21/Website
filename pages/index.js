import Head from "next/head";
import { FaSquareXTwitter, FaSquareEnvelope, FaSquareGithub, FaSquareInstagram, FaLinkedin, FaSquareYoutube } from "react-icons/fa6";

function Home() {
  return (
    <>
      <Head>
        <title>Jeydin21</title>
        <meta name="title" content="Jeydin21" />
        <meta name="description" content="My personal landing page made with ❤️" />
        <meta name="theme-color" content="#f2cdcd" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="j21.dev" />
        <meta property="og:title" content="Jeydin21" />
        <meta property="og:description" content="My personal landing page made with ❤️" />
        <meta property="og:image" content="/favicon.png" />

        <meta property="twitter:url" content="j21.dev" />
        <meta property="twitter:title" content="Jeydin21" />
        <meta property="twitter:description" content="My personal landing page made with ❤️" />
        <meta property="twitter:image" content="/favicon.png" />

        <link rel="icon" href="/favicon.ico" type="image/png" />

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>


      <div className="bg-light-background dark:bg-dark-background flex flex-col min-h-screen justify-center text-center">
        <div>
          <div className="text-light-text dark:text-dark-text font-semibold text-4xl sm:text-7xl">Hello, I'm Jeydin!</div>
          <div className="text-light-text dark:text-dark-text font-extralight text-xl sm:text-3xl m-5">Student | Anime Enjoyer | Linux Enthusiast
          </div>
          <div className="flex flex-row justify-center text-light-buttons dark:text-dark-buttons">
            <a className="no-underline" target="_blank" href="mailto:jeydin@j21.dev">
              <div className="p-2 duration-300 text-[3em] hover:-translate-y-2 hover:rotate-6" aria-hidden="true"
                title="Email">
                <FaSquareEnvelope />
              </div>
            </a>
            <a className="no-underline" target="_blank" href="https://github.com/Jeydin21">
              <div className="p-2 duration-300 text-[3em] hover:-translate-y-2 hover:rotate-6" aria-hidden="true"
                title="GitHub">
                <FaSquareGithub />
              </div>
            </a>
            <a className="no-underline" target="_blank" href="https://twitter.com/Jeydin21">
              <div className="p-2 duration-300 text-[3em] hover:-translate-y-2 hover:rotate-6" aria-hidden="true"
                title="Twitter">
                <FaSquareXTwitter />
              </div>
            </a>
            <a className="no-underline" target="_blank" href="https://www.youtube.com/@Jeydin21">
              <div className="p-2 duration-300 text-[3em] hover:-translate-y-2 hover:rotate-6" aria-hidden="true"
                title="Instagram">
                <FaSquareYoutube />
              </div>
            </a>
            <a className="no-underline" target="_blank" href="https://www.instagram.com/jeydin21">
              <div className="p-2 duration-300 text-[3em] hover:-translate-y-2 hover:rotate-6" aria-hidden="true"
                title="Instagram">
                <FaSquareInstagram />
              </div>
            </a>
            <a className="no-underline" target="_blank" href="https://www.linkedin.com/in/jeydinpham">
              <div className="p-2 duration-300 text-[3em] hover:-translate-y-2 hover:rotate-6" aria-hidden="true"
                title="LinkedIn">
                <FaLinkedin />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;