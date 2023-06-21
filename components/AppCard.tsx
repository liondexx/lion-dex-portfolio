import Image from "next/image";
import expempleApps from "../public/device-mobile.png";

export default function AppCard() {
  return (
    <div className="flex flex-col items-center ">
      <Image
        className="inline-block w-5/5"
        src={expempleApps}
        alt="exemple-apps"
      />
      <p className="text-center font-semibold ">
        cat ipsum scratch, ipssum hlwio scratch io ispum cat cat
      </p>
    </div>
  );
}
