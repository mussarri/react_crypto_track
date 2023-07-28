import { Box } from "@mui/material";
import React from "react";
import NewestCoin from "./NewestCoin";
import { useGetGlobalStatsQuery } from "../../../redux/api";

function NewestAndBest() {
  const { isLoading, isError, data } = useGetGlobalStatsQuery();
  
  if (isError) return <div>Error</div>;
  if (!isError)
    return (
      <Box>
        <NewestCoin
          coins={data?.data.bestCoins}
          title={"Best Coins"}
          isLoading={isLoading}
        />
        <NewestCoin
          coins={data?.data.newestCoins}
          title={"Newest Coins"}
          isLoading={isLoading}
        />
      </Box>
    );
}

export default NewestAndBest;
