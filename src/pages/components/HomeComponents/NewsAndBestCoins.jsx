import { Box } from "@mui/material";
import React from "react";
import News from "../News";
import NewestAndBest from "./NewestAndBest.jsx";

function NewsAndBestCoins() {
  return (
    <Box
      padding={2}
      sx={{
        display: "grid",
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
