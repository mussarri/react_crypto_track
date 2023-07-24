import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Coin({ url, name, price, change, theme, index }) {
  return (
    <Box style={{ padding: 20 }}>
      <Link to={"/coin/" + name}>
        <Box
          style={{
            display: "flex",
            position: "relative",
            gap: 10,
            alignItems: "center",
            height: 80,
            maxHeight: 80,
            padding: 10,
            borderRadius: 10,
            background: theme.palette.grey[100],
          }}
        >
          <img
            width={"20%"}
            style={{ objectFit: "contain", objectPosition: "center" }}
            src={url}
            alt=""
          />
          <Box>
            <Typography fontSize={15}> {index + 1 + ". " + name}</Typography>
            <Typography fontSize={18}> {price} $</Typography>
          </Box>
          <Box sx={{ position: "absolute", right: 20, bottom: 15 }}>
            <Typography color={change.slice(0, 1) === "-" ? "red" : "green"}>
              {change}%
            </Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}

export default Coin;
