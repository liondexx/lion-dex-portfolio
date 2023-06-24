import Link from "next/link";
import Image from "next/image";
import github from "public/github-icon.svg";
import curriculum from "public/curriculum_icon.svg";
import linkedin from "public/linkedin_icon.svg";

export default function NavBar() {
  return (
    <div className="flex px-6 py-6 md:px-10 md:py-12 md:justify-end ">
      <nav className="flex w-full md:w-2/5 lg:w-3/12 justify-between">
        <Link
          target="_blank"
          href="https://github.com/liondexx"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <Image src={github} alt="github-icon" className="w-14 md:ml-4" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/lion-patrocino-96b808229/"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <Image src={linkedin} alt="linkedin-link" className="w-14 md:ml-4" />
        </Link>
        <Link
          target="_blank"
          href="https://docs.google.com/document/d/1ZOdIUhwBNUM5f378i0-V3_O6JeL6DhNI6elGRM_Iofw/edit#heading=h.7vtcyzeczjot"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <Image
            src={curriculum}
            alt="curriculo-link"
            className="w-14 md:ml-4"
          />
        </Link>
      </nav>
    </div>
  );
}
