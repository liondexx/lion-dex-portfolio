import Image from "next/image";
import expempleApps from "../public/device-mobile.png";

export default function AppCard() {
  return (
    <div className="flex flex-col items-center shadow-lg ">
      <Image
        className="inline-block w-5/5"
        src={expempleApps}
        alt="exemple-apps"
      />
      <p className="text-center font-semibold ">
        este é um projeto com HTML & CSS não autoral, em breve novos projetos!
      </p>
    </div>
  );
}
