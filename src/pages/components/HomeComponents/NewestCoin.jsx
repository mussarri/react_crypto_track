import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function NewestCoin({ coins, title }) {
  const theme = useTheme();
  return (
    <Box>
      <Typography mt={3} mb={3} variant="h5">
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
          <Link to={"/coin/" + coin.uuid}>
            <Box
              p={0}
              style={{
                background: theme.palette.grey[50],
                border: "1px solid",
                borderColor: theme.palette.grey[200],
                display: "flex",
                alignItems: "center",
                gap: 4,
                justifyContent: "space-around",
                minHeight: 100,
                maxHeight: 100,
                borderRadius: 5,
              }}
            >
              <img src={coin.iconUrl} alt="" width={"30%"} />
              <Box>
                <Typography>{coin.name.slice(0, 15)}</Typography>
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
