import AppCard from "./AppCard";

export default function Portifolio() {
  return (
    <section className="flex flex-col items-center justify-center gap-3 xl:p-5 xl:flex-row">
      <AppCard props="https://laila-achitect.vercel.app/" />
    </section>
  );
}
