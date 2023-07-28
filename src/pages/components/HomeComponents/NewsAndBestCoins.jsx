import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import News from "../News";
import NewestAndBest from "./NewestAndBest.jsx";

function NewsAndBestCoins() {
  const isMobile = useMediaQuery('(max-width:950px)');
  return (
    <Box
      padding={2}
      sx={{
        display: isMobile ? "block" : "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        columnGap: 4,
      }}
    >
      <News category={"Cryptocurrency"} count={9} isHome={true} />
      <NewestAndBest />
    </Box>
  );
}

export default NewsAndBestCoins;
