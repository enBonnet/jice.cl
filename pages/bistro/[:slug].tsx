import { Button } from "components/button";
import { Footer } from "components/footer";
import { Head } from "components/head";
import { LocationTime } from "components/locationTime";
import { Navbar } from "components/navbar";
import ReviewItem from "components/reviewItem/ReviewItem";

const PlacePage = () => {
  return (
    <>
      <Head>Bistro</Head>
      <Navbar />
      <main className="flex items-center justify-center flex-col bg-yellow-100 py-4">
        <section className="bg-white w-11/12 max-w-7xl shadow-lg rounded p-2 mb-6">
          <div>
            {/** Title */}
            <h2 className="text-2xl mb-4 font-bold">
              Bistro my website is faster than yours
            </h2>
            <div className="sm:flex justify-between">
              <div className="mb-6">
                <div className="text-sm flex">
                  <span className="font-semibold mr-4">Abierto ahora</span>
                  <div className="flex">
                    <img className="mr-2" src="/icons/clock.svg" />
                    Horarios
                  </div>
                </div>
              </div>
              {/** Ranks */}
              <div className="flex items-center mb-6">
                <div className="flex">
                  <img className="mr-2" src="/icons/coffee.svg" />
                  <img className="mr-2" src="/icons/coffee.svg" />
                  <img className="mr-2" src="/icons/coffee.svg" />
                  <img className="mr-2" src="/icons/coffee.svg" />
                  <img className="mr-2" src="/icons/coffee.svg" />
                </div>
                <div className="text-xs">65 opiniones</div>
              </div>
            </div>
            {/** Options */}
            <div className="flex justify-end mb-4">
              <a className="ml-4">Visitar luego</a>
              <a className="ml-4">Compartir</a>
              <a className="ml-4">Opinar</a>
            </div>
          </div>
          {/** Images */}
          <div>
            <div className="max-w-md">
              <img src="https://images.unsplash.com/photo-1514845994104-1be22149278b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80" />
            </div>
            <div className="absolute">
              <div className="relative bottom-8 left-2 rounded text-xs text-black bg-gray-300 p-1">
                6 fotos
              </div>
            </div>
          </div>
          {/** Options */}
          <div className="flex justify-around">
            <div className="font-bold px-3 py-4">Llamar</div>
            <div className="font-bold px-3 py-4">Mapa</div>
            <div className="font-bold px-3 py-4">Menú</div>
            <div className="font-bold px-3 py-4">Sitio web</div>
          </div>
        </section>
        <section className="bg-white w-11/12 max-w-7xl shadow-lg rounded p-2 mb-6">
          <h3 className="text-xl mb-4">Opiniones recientes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl:grid-cols-4 ">
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
          </div>
          <div className="flex justify-center mb-4">
            <Button>Más opiniones</Button>
          </div>
        </section>
        <section className="bg-white w-11/12 max-w-7xl shadow-lg rounded p-2 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl:grid-cols-4 ">
            <LocationTime />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PlacePage;
