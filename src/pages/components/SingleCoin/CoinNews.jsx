import { Box } from "@mui/material";
import React from "react";
import News from "../News";

function CoinNews({ coin, lg }) {
  return (
    <Box p={3} pt={0}>
      <News category={coin.name} count={9} title={coin.name} isHome={false} lg={lg} />
    </Box>
  );
}

export default CoinNews;
