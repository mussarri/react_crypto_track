import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function NewestCoin({ coins, title }) {
  const theme = useTheme();
  return (
    <Box>
      <Typography mt={5} mb={2} variant="h5">
        {title}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          columnGap: 1,
        }}
      >
        {coins.map((coin) => (
          <Link to={"/coin/" + coin.symbol}>
            <Box
              p={1}
              style={{
                background: theme.palette.grey[200],
                display: "flex",
                alignItems: "center",
                gap: 4,
                justifyContent: "space-between",
                minHeight: 100,
                borderRadius: 5,
              }}
            >
              <img src={coin.iconUrl} alt="" width={"30%"} />
              <Box>
                <Typography>{coin.name}</Typography>
                <Typography textAlign={"right"} color={theme.palette.grey[500]}>
                  {coin.symbol}
                </Typography>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default NewestCoin;
