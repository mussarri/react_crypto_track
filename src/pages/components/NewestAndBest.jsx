import React from "react";
import NewestCoin from "./NewestCoin";
import { Grid } from "@mui/material";
import { useGetGlobalStatsQuery } from "../../redux/api";

function NewestAndBest() {
  const { isLoading, isError, data } = useGetGlobalStatsQuery();
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  if (data)
    return (
      <Grid container spacing={3} padding={2}>
        <Grid item xs={6}>
          <NewestCoin coins={data.data.bestCoins} title={"Best Coins"} />
        </Grid>
        <Grid item xs={6}>
          <NewestCoin coins={data.data.newestCoins} title={"Newest Coins"} />
        </Grid>
      </Grid>
    );
}

export default NewestAndBest;
