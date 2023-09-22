import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Content from "components/Content";
import Portifolio from "components/Portifolio";

export default function Home() {
  return (
    <div className=" bg-purple-900 flex text-gray-100 flex-col justify-center">
      <NavBar />
      <Content />
      <Portifolio />
      <Footer />
    </div>
  );
}
