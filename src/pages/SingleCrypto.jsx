import { useParams } from "react-router-dom";
import { useGetSingleCoinQuery } from "../redux/api";
import { Box, useMediaQuery } from "@mui/material";

import LineChart from "./components/SingleCoin/LineChart.jsx";
import CoinStats from "./components/SingleCoin/CoinStats.jsx";
import CoinMarkets from "./components/SingleCoin/CoinMarkets.jsx";
import CoinNews from "./components/SingleCoin/CoinNews";
import CoinAbout from "./components/SingleCoin/CoinAbout";
import { useTheme } from "@emotion/react";
import Loading from "./components/Loading";

function SingleCrypto() {
  const { id } = useParams();
  const theme = useTheme();

  const { isLoading, isError, data } = useGetSingleCoinQuery({ id });

  const lg = useMediaQuery("(min-width:1150px)");
  const md = useMediaQuery("(min-width:800px)");

  if (isError) return <div>Error</div>;
  if (!isError) {
    const coin = data?.data.coin;
    return (
      <Box
        p={lg ? 4 : 1}
        display={md && "grid"}
        gridTemplateRows="100vh"
        overflowY="scroll"
        gridTemplateColumns={lg ? "1fr 2.3fr 1fr" : "1fr 2fr"}
      >
        {!isLoading ? (
          <CoinStats coin={coin} />
        ) : (
          <Loading isCoinStats={true} />
        )}
        {!isLoading ? (
          <>
            <Box
              borderRight={lg && "1px solid grey"}
              style={{ overflowY: "scroll" }}
            >
              <LineChart id={id} period="24h" />
              <CoinMarkets coin={coin} />
              <CoinAbout coin={coin} theme={theme} />
              {!lg && <CoinNews lg={lg} coin={coin} />}
            </Box>
            {lg && (
              <Box borderRight="1px solid grey" style={{ overflowY: "scroll" }}>
                <CoinNews coin={coin} />
              </Box>
            )}
          </>
        ) : (
          ""
        )}
      </Box>
    );
  }
}

export default SingleCrypto;
