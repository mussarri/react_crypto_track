import { Box } from "@mui/material";
import React from "react";
import NewestCoin from "./NewestCoin";
import { useGetGlobalStatsQuery } from "../../redux/api";

function NewestAndBest() {
  const { isLoading, isError, data } = useGetGlobalStatsQuery();
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  if (data)
    return (
      <Box>
        <NewestCoin coins={data.data.bestCoins} title={"Best Coins"} />
        <NewestCoin coins={data.data.newestCoins} title={"Newest Coins"} />
      </Box>
    );
}

export default NewestAndBest;
