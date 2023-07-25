import { Box } from "@mui/material";
import React from "react";
import News from "./News";
import NewestAndBest from "./NewestAndBest";

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
      <News />
      <NewestAndBest />
    </Box>
  );
}

export default NewsAndBestCoins;
