import Image from "next/image";
import NavBar from "components/NavBar";
import expempleApps from "../../public/device-mobile.png";

export default function Home() {
  return (
    <main className=" bg-purple-900 mc:px-4 xl:p-0">
      <div className="flex text-gray-100 px-4 flex-col md:p-0 py-4 max-[374px]:px-2  min-[820px]:px-5 min-[900px]:px-16 max-[360px]:p-0 bs:px-9 xl:p-0 justify-center">
        <NavBar />
        <section className="flex justify-center">
          <div className="lg:px-12 xl:py-64 xl:p-0 xl:max-w-3xl">
            <h2 className="font-bold font sm:text-4xl max-[360px]:text-xl min-[520px]:text-2xl">
              OI, EU SOU LION👋
            </h2>
            <h1 className="text-5xl min-[360px]:text-6xl  font-extrabold mc:text-6xl sm:text-7xl md:text-9xl">
              FRONTEND
            </h1>
            <h1 className="text-5xl min-[360px]:text-6xl  font-extrabold mc:text-6xl sm:text-7xl md:text-9xl">
              DEVELOPER
            </h1>
            <p className="text-xs font-semibold sm:text-2xl xl:font-normal">
              Sou programador a 3 anos, trabalho como freelancer, entre em
              contato.
            </p>
          </div>
        </section>
        <div>
          <Image src={expempleApps} alt="exple-apps"></Image>
          <p className="text-center font-semibold">
            cat ipsum scratch, ipssum hlwio scratch io ispum cat cat
          </p>
        </div>
        <div>
          <Image src={expempleApps} alt="exple-apps"></Image>
          <p className="text-center font-semibold">
            cat ipsum scratch, ipssum hlwio scratch io ispum cat cat
          </p>
        </div>
        <footer className=" mt-5">
          <p className="text-left font-semibold">(41)987319845</p>
          <p className="text-left font-semibold">lionfillesoffices@gmail.com</p>
        </footer>
      </div>
    </main>
  );
}
