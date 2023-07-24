import React from "react";
import Slider from "react-slick";
import { useGetCoinsQuery } from "../../redux/api";
import Coin from "./Coin";
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  speed: 10000,
  autoplaySpeed: 10000,
  cssEase: "linear",
  variableWidth: false,
  arrows: false,
  pauseOnHover: false,
};

function CarouselFunction() {
  // eslint-disable-next-line no-unused-vars
  const { data, isLoading, isError } = useGetCoinsQuery({
    limit: 10,
    orderBy: "change",
  });
  const theme = useTheme();

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  if (data)
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
          <Slider {...settings}>
            {data?.data.coins.map((coin, index) => (
              <Coin
                index={index}
                theme={theme}
                url={coin.iconUrl}
                name={coin.symbol}
                price={coin.price.slice(0, 8)}
                change={coin.change}
              />
            ))}
          </Slider>
        </div>
      </>
    );
}

export default CarouselFunction;
