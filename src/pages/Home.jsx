import React from "react";
import GlobalStats from "./components/GlobalStats";
import CarouselFunction from "./components/Carousel";
import CryptoList from "./components/CryptoList";

import NewsAndBestCoins from "./components/NewsAndBestCoins";

function Home() {
  return (
    <>
      <GlobalStats />
      <NewsAndBestCoins />
      <CarouselFunction />

      <CryptoList isHome={true} />
    </>
  );
}

export default Home;
