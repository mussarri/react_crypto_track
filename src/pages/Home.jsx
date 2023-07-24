import React from "react";
import GlobalStats from "./components/GlobalStats";
import CarouselFunction from "./components/Carousel";
import CryptoList from "./components/CryptoList";
import NewestAndBest from "./components/NewestAndBest";

function Home() {
  return (
    <>
      <GlobalStats />
      <NewestAndBest />

      <CarouselFunction />

      <CryptoList isHome={true} />
    </>
  );
}

export default Home;
