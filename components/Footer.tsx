import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="flex py-4 text-gray-300 border-gray-300 w-full justify-center 
      flex-col font-bold tracking-wide p-6 xl:px-64 xl:py-14 xl:text-xl"
    >
      <ul className="flex flex-wrap  leading-5">
        <li className="border-b mr-3 mb-2">
          <Link href="/">Home</Link>{" "}
        </li>
        <li className="border-b mr-3 mb-2">
          <Link href="mailto:lionlpcc@gmail.com">Say Hi</Link>
        </li>
        <li className="border-b mr-3 mb-2">
          <Link href="https://github.com/liondexx">Github</Link>
        </li>

        <li className="border-b mr-3 mb-2">
          <Link href="https://www.linkedin.com/in/lion-patrocino-96b808229/">
            Linkedin
          </Link>
        </li>
      </ul>
      <p>
        © 2023 Lion Patrocinio Cunha Costa |{" "}
        <Link
          className="border-b"
          href="https://github.com/liondexx/lion-dex-portfolio"
        >
          Source Code
        </Link>
      </p>
    </footer>
  );
}
