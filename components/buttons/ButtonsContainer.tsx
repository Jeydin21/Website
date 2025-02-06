import { FaXTwitter, FaGithub, FaRegEnvelope, FaInstagram, FaLinkedin, FaSquareYoutube } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

export default function ButtonsContainer() {
  return (
    <div className="flex flex-row justify-center text-xl text-red-400 dark:text-red-300">
      <a className="no-underline text-blue-500" target="_blank" href="https://www.linkedin.com/in/jeydinpham">
        <div className="p-2 duration-300 text-[2em] hover:-translate-y-1.5 hover:scale-105" aria-hidden="true"
          title="LinkedIn">
          <FaLinkedin />
        </div>
      </a>
      <a className="no-underline text-black dark:text-white" target="_blank" href="https://github.com/Jeydin21">
        <div className="p-2 duration-300 text-[2em] hover:-translate-y-1.5 hover:scale-105" aria-hidden="true"
          title="GitHub">
          <FaGithub />
        </div>
      </a>
      <a className="no-underline text-yellow-500 dark:text-yellow-300" target="_blank" href="mailto:jeydin@j21.dev">
        <div className="p-2 duration-300 text-[2em] hover:-translate-y-1.5 hover:scale-105" aria-hidden="true"
          title="Email">
          <FaRegEnvelope />
        </div>
      </a>
      <a className="no-underline text-red-400" target="_blank" href="/Jeydin_Pham_Resume_2025.pdf" download title='Download CV'>
        <div className="p-2 duration-300 text-[2em] hover:-translate-y-1.5 hover:scale-105" aria-hidden="true"
          title="Download CV">
          <TbFileCv />
        </div>
      </a>
      {/* <a className="no-underline text-white" target="_blank" href="https://twitter.com/Jeydin21">
        <div className="p-2 duration-300 text-[2em] hover:-translate-y-1.5 hover:scale-105" aria-hidden="true"
          title="Twitter">
          <FaXTwitter />
        </div>
      </a>
      <a className="no-underline text-red-500" target="_blank" href="https://www.youtube.com/@Jeydin21">
        <div className="p-2 duration-300 text-[2em] hover:-translate-y-1.5 hover:scale-105" aria-hidden="true"
          title="Instagram">
          <FaYoutube />
        </div>
      </a>
      <a className="no-underline text-orange-500" target="_blank" href="https://www.instagram.com/jeydin21">
        <div className="p-2 duration-300 text-[2em] hover:-translate-y-1.5 hover:scale-105" aria-hidden="true"
          title="Instagram">
          <FaInstagram />
        </div>
      </a> */}
    </div>
  );
}