import Link from "next/link";
import Image from "next/image";
import github from "public/github-icon.svg";
import curriculum from "public/curriculum_icon.svg";
import linkedin from "public/linkedin_icon.svg";

export default function NavBar() {
  return (
    <nav className="flex justify-between text-1xl gap-2 font-semibold py-4 sm:text-3xl sm:py-10 flex-wrap md:justify-between xl:p-0 xl:pt-16 xl:pr-16 lg:justify-end">
      <Link href="./" className="flex items-center">
        <Image src={github} alt="github-icon" className="w-8 sm:w-14" />
        <p>GitHub</p>
      </Link>
      <Link href="./" className="flex items-center">
        <Image src={linkedin} alt="github-icon" className="w-8 sm:w-14" />
        <p>Linkedin</p>
      </Link>
      <Link href="./" className="flex items-center">
        <Image src={curriculum} alt="github-icon" className="w-8 sm:w-14" />
        <p>Curiculo</p>
      </Link>
    </nav>
  );
}
