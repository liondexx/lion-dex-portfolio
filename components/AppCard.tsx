import Image from "next/image";
import expempleApps from "../public/screenshot.png";
import Link from "next/link";

export default function AppCard({ props }: any) {
  const link = props;
  return (
    <Link href={link}>
      <div className="flex flex-col items-center my-20">
        <Image
          className="inline-block w-5/6"
          src={expempleApps}
          alt="exemple-apps"
        />
      </div>
    </Link>
  );
}
