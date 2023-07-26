import React from "react";
import GlobalStats from "./components/HomeComponents/GlobalStats.jsx";
import CarouselFunction from "./components/HomeComponents/Carousel.jsx";
import CryptoList from "./components/CryptoList.jsx";

import NewsAndBestCoins from "./components/HomeComponents/NewsAndBestCoins";

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
