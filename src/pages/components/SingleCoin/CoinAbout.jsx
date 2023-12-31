import { Typography } from "@mui/material";
import React from "react";

function CoinAbout({ coin , theme}) {
  return (
    <div>
      <Typography px={3} pt={3} fontSize={22}>
        {coin.name} About
      </Typography>
      <Typography p={3} pt={0} fontSize={13} color={theme.palette.grey[500]}>
        {coin.description || "There is no information."}
      </Typography>
    </div>
  );
}

export default CoinAbout;
