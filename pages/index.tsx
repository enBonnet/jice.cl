import { Head } from "components/head";
import { Navbar } from "components/navbar";
import { Hero } from "components/hero";
import { CardsContainer } from "components/cardsContainer";
import { BarCard } from "components/barCard";
import { ReviewCard } from "components/reviewCard";
import { Footer } from "components/footer";

export default function Home() {
  return (
    <>
      <Head>Inicio</Head>
      <Navbar />
      <Hero />
      <CardsContainer title="Barras">
        <BarCard />
        <BarCard />
        <BarCard />
      </CardsContainer>
      <CardsContainer className="bg-yellow-100" title="Reseñas">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </CardsContainer>
      <Footer />
    </>
  );
}
