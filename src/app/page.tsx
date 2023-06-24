import NavBar from "components/NavBar";
import AppCard from "components/AppCard";
import Footer from "components/Footer";
import Content from "components/Content";

export default function Home() {
  return (
    <div className=" bg-purple-900 flex text-gray-100 flex-col justify-center">
      <NavBar />
      <Content />
      <section className="flex justify-center flex-wrap my-16 gap-12 xl:p-5">
        <AppCard />
        <AppCard />
      </section>
      <Footer />
    </div>
  );
}
