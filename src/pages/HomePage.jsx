import ProductCard from "../components/ProductCard";
import Banner from "../../public/images/Banner.jpg";
import AboutUs from "./AboutUs";
export default function HomePage() {
  return (
    <>
      <section>
        <div className="relative w-full h-[95vh] overflow-hidden">
          <img
            src={Banner}
            alt="Banner"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 z-10">
            <h1 className="text-4xl sm:text-4xl md:text-5xl mb-6 text-center drop-shadow-lg font-bold tracking-tight">
              Welcome
            </h1>

            <p className="text-center text-lg md:text-lg text-white/90 max-w-3xl font-semibold leading-relaxed">
              Find your fashion style with MicaStore
            </p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h1 className="text-center text-3xl font-sans mt-10 font-bold">
            Products
          </h1>
          <div>
            <ProductCard showTitle={false} />
          </div>
        </div>
      </section>
      <AboutUs />
    </>
  );
}
