import { Button } from "components/button";
import { Footer } from "components/footer";
import { Head } from "components/head";
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
            {/** Options */}
            <div className="flex justify-end mb-4">
              <a className="ml-4">Visitar luego</a>
              <a className="ml-4">Compartir</a>
              <a className="ml-4">Opinar</a>
            </div>
          </div>
          {/** Images */}
          <div>
            <div>
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
          <h3 className="text-xl mb-4">Ubicación y horarios</h3>
          <div>
            <img src="https://maps.google.com/maps/api/staticmap?&channel=ta.desktop.restaurant_review&zoom=15&size=347x137&scale=1&client=gme-tripadvisorinc&format=jpg&sensor=false&language=es_CL&center=-33.441883,-70.632385&maptype=roadmap&&markers=icon:http%3A%2F%2Fc1.tacdn.com%2F%2Fimg2%2Fmaps%2Ficons%2Fcomponent_map_pins_v1%2FR_Pin_Small.png|-33.441883,-70.632385&signature=nR7QpN0_upOa2H_6egc1w13A9Ms=" />
            <p className="my-2">Av Italia 940, Santiago</p>
          </div>
          <div>
            <p className="my-2 font-bold">Horarios</p>
            <ul>
              <li>Lunes 9:00 - 19:00</li>
              <li>Martes 9:00 - 19:00</li>
              <li>Miercoles 9:00 - 19:00</li>
              <li>Jueves 9:00 - 19:00</li>
              <li>Viernes 9:00 - 19:00</li>
              <li>Sábado 9:00 - 19:00</li>
              <li>Domingo cerrado</li>
            </ul>
          </div>
        </section>
        <section className="bg-white w-11/12 max-w-7xl shadow-lg rounded p-2 mb-6">
          <h3 className="text-xl mb-4">Opiniones</h3>
          <div>
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
          </div>
          <div className="flex justify-center mb-4">
            <Button>Leer más</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PlacePage;
