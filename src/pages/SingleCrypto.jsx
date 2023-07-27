import { useParams } from "react-router-dom";
import { useGetSingleCoinQuery } from "../redux/api";
import { Box } from "@mui/material";

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

  if (isError) return <div>Error</div>;
  if (!isError) {
    const coin = data?.data.coin;
    return (
      <Box
        p={4}
        display="grid"
        gridTemplateRows="100vh"
        overflowY="scroll"
        gridTemplateColumns="1fr 2.3fr 1fr"
      >
        {!isLoading ? (
          <CoinStats coin={coin} />
        ) : (
          <Loading isCoinStats={true} />
        )}
        {!isLoading ? (
          <>
            <Box borderRight="1px solid grey" style={{ overflowY: "scroll" }}>
              <LineChart id={id} period="24h" />
              <CoinMarkets coin={coin} />
              <CoinAbout coin={coin} theme={theme} />
            </Box>
            <Box borderRight="1px solid grey" style={{ overflowY: "scroll" }}>
              <CoinNews coin={coin} />
            </Box>
          </>
        ) : (
          ""
        )}
      </Box>
    );
  }
}

export default SingleCrypto;
