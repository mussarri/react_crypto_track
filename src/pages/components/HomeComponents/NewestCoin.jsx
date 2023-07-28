import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";

function NewestCoin({ coins, title, isLoading }) {
  const sm = useMediaQuery("(max-width:500px)");

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
        {coins &&
          coins?.map((coin) => (
            <Link to={"/coin/" + coin.uuid}>
              <Box
                p={0}
                style={{
                  background: theme.palette.grey[50],
                  border: "1px solid",
                  borderColor: theme.palette.grey[200],
                  display: "flex",
                  flexDirection: sm ? "column" : "row",
                  alignItems: "center",
                  gap: 4,
                  justifyContent: "space-around",
                  minHeight: sm ? 170 : 100,
                  maxHeight: sm ? 170 : 100,
                  borderRadius: 5,
                }}
              >
                <img src={coin.iconUrl} alt="" width={sm ? "50%" : "30%"} />
                <Box>
                  <Typography>{coin.name.slice(0, 15)}</Typography>
                  <Typography
                    textAlign={"right"}
                    color={theme.palette.grey[500]}
                  >
                    {coin.symbol}
                  </Typography>
                </Box>
              </Box>
            </Link>
          ))}
        {isLoading &&
          Array(3)
            .fill(0)
            .map(() => <Loading isNewest={true} />)}
      </Box>
    </Box>
  );
}

export default NewestCoin;
