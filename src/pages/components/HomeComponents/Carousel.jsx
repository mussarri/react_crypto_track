import React from "react";
import Slider from "react-slick";
import { useGetCoinsQuery } from "../../../redux/api";
import Coin from "./Coin";
import { useTheme } from "@emotion/react";
import { Box, Skeleton, Typography, useMediaQuery } from "@mui/material";
import Loading from "../Loading";

function CarouselFunction() {
  // eslint-disable-next-line no-unused-vars
  const { data, isLoading, isError } = useGetCoinsQuery({
    limit: 10,
    orderBy: "change",
  });
  const theme = useTheme();
  const lg = useMediaQuery("(min-width:1150px)");
  const md = useMediaQuery("(min-width:900px)");
  const sm = useMediaQuery("(min-width:600px)");
  console.log(theme);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow:lg ? 4 : md ? 3 : sm ? 2 : 1,
    slidesToScroll: 4,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    variableWidth: false,
    arrows: false,
    pauseOnHover: false,
  };

  if (isError) return <div>Error</div>;

  return (
    <>
      <Typography px={2} mt={5} variant="h5">
        Top Movers
      </Typography>
      <div
        style={{
          padding: 20,
          borderBottom: "1px solid",
          borderColor: theme.palette.grey[400],
        }}
      >
        {data && (
          <Slider {...settings}>
            {data?.data.coins.map((coin, index) => (
              <Coin
                index={index}
                theme={theme}
                url={coin.iconUrl}
                name={coin.symbol}
                price={coin.price.slice(0, 8)}
                change={coin.change}
                id={coin.uuid}
              />
            ))}
          </Slider>
        )}
        {isLoading && (
          <Slider {...settings}>
            {Array(10)
              .fill(0)
              .map(() => (
                <Loading theme={theme} isCoin={true} />
              ))}
          </Slider>
        )}
      </div>
    </>
  );
}

export default CarouselFunction;
