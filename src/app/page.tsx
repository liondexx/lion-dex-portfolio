import Image from "next/image";
import NavBar from "components/NavBar";
import AppCard from "components/AppCard";
import Footer from "components/Footer";

export default function Home() {
  return (
    <main className=" bg-purple-900 ">
      <div className="flex text-gray-100 flex-col justify-center">
        <NavBar />
        <section className="flex justify-center">
          <div className="max-w-3xl xl:py-64 mc:px-8 nn:p-1 min-[360px]:p-3 md:px-3">
            <h2 className="font-bold font sm:text-4xl max-[360px]:text-xl min-[520px]:text-2xl">
              OI, EU SOU LION👋
            </h2>
            <h1 className="text-5xl min-[360px]:text-6xl font-extrabold mc:text-6xl sm:text-7xl md:text-9xl">
              FRONTEND
            </h1>
            <h1 className="text-5xl min-[360px]:text-6xl font-extrabold mc:text-6xl sm:text-7xl md:text-9xl">
              DEVELOPER
            </h1>
            <p className="text-xs font-semibold sm:text-2xl xl:font-normal">
              Olá meu nome é Lion, sou programador a 3 anos, trabalho como
              autonomo, sou apiaxaonado por ui, vai ser um prazer trabalhar com
              vc.
            </p>
          </div>
        </section>
        <section className="flex justify-center flex-wrap my-16 gap-12 xl:p-5">
          <AppCard />
          <AppCard />
        </section>
        <Footer />
      </div>
    </main>
  );
}
