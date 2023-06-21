import Link from "next/link";
import Image from "next/image";
import github from "public/github-icon.svg";
import curriculum from "public/curriculum_icon.svg";
import linkedin from "public/linkedin_icon.svg";

export default function NavBar() {
  return (
    <nav
      className="flex justify-between px-3 text-1xl gap-2 font-semibold py-4 md:px-10 sm:text-3xl sm:py-10
      flex-wrap md:justify-around xl:p-0 xl:pt-12 xl:pr-16 xl:justify-end"
    >
      <Link
        href="https://github.com/liondexx"
        className="flex items-center xl:ml-24"
      >
        <Image src={github} alt="github-icon" className="w-9 sm:w-16" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/lion-patrocino-96b808229/"
        className="flex items-center xl:ml-24"
      >
        <Image src={linkedin} alt="linkedin-link" className="w-9 sm:w-16" />
      </Link>
      <Link
        href="https://docs.google.com/document/d/1ZOdIUhwBNUM5f378i0-V3_O6JeL6DhNI6elGRM_Iofw/edit#heading=h.7vtcyzeczjot"
        className="flex items-center xl:ml-24"
      >
        <Image src={curriculum} alt="curriculo-link" className="w-9 sm:w-16" />
      </Link>
    </nav>
  );
}
