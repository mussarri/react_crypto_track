import React, { useState } from "react";
import { Box, Button, Chip, Input, Typography } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useTheme } from "@emotion/react";
import { dolar, insertSpaces } from "../HomeComponents/GlobalStats.jsx";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const calculatePriceDown = function (a, b) {
  const percentage = ((a - b) / a) * 100;
  return percentage.toFixed(2);
};

function CoinStats({ coin }) {
  const theme = useTheme();
  const [input, setInput] = useState(1);
  const handleChange = function (e) {
    setInput(e.target.value);
  };

  return (
    <Box pr={3} borderRight="1px solid grey" style={{ overflowY: "scroll" }}>
      <Box display="flex" alignItems="center">
        <img width={30} src={coin.iconUrl} alt="" />
        <Typography ml={2} variant="h6">
          {coin.name + " (" + coin.symbol + ")"}
        </Typography>
      </Box>
      <Typography fontWeight="bolder" mt={2} variant="h3">
        {formatter.format(coin.price.slice(0, 8))}
      </Typography>
      <Typography
        mt={1}
        mb={3}
        fontSize={20}
        color={coin.change.slice(0, 1) === "-" ? "red" : "green"}
      >
        {coin.change}%
      </Typography>
      <Button
        variant="contained"
        size="small"
        color="grey"
        style={{ width: "60%" }}
      >
        <StarOutlineIcon size="small" />
        <Typography ml={1} fontSize={12}>
          Add Watchlist
        </Typography>
      </Button>
      {["marketCap", "24hVolume", "fullyDilutedMarketCap"].map((item) => (
        <Box display="flex" justifyContent="space-between" mt={3}>
          <Typography fontSize={13} color={theme.palette.grey[500]}>
            {insertSpaces(item)}
          </Typography>
          <Typography fontSize={14}>{dolar(coin[item])} $</Typography>
        </Box>
      ))}
      {Object.entries(coin.supply)
        .slice(2)
        .map((supply) => (
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Typography fontSize={13} color={theme.palette.grey[500]}>
              Supply {insertSpaces(supply[0])}
            </Typography>
            <Typography fontSize={14}>{dolar(supply[1])} $</Typography>
          </Box>
        ))}
      <Box mt={4}>
        <Typography color={theme.palette.grey[600]} fontSize={14}>
          {coin.symbol} to USD Converter
        </Typography>
        <Box display="flex" gap={1} mt={1}>
          <Input
            size="small"
            placeholder={coin.symbol}
            value={input}
            onChange={handleChange}
          />
          <Input
            size="small"
            readOnly
            placeholder="USD"
            value={(input * coin.price).toFixed(2) + "$"}
          />
        </Box>
      </Box>
      <Box mt={4} display="flex" justifyContent="space-between" gap={1}>
        <Box>
          <Typography color={theme.palette.grey[400]} fontSize={13}>
            All-time high
          </Typography>

          <Typography color={theme.palette.grey[400]} fontSize={13}>
            {new Date(coin.allTimeHigh.timestamp * 1000).toLocaleDateString(
              "en-GB"
            )}
          </Typography>
        </Box>
        <Box>
          <Typography fontSize={13} fontWeight="bolder">
            {formatter.format(coin.allTimeHigh.price.slice(0, 8))}
          </Typography>
          <Typography
            color={
              coin.allTimeHigh.price - coin.price > 0
                ? "red"
                : theme.color.palette[400]
            }
            fontSize={13}
            textAlign="right"
          >
            -{calculatePriceDown(coin.allTimeHigh.price, coin.price)}%
          </Typography>
        </Box>
      </Box>
      <Box mt={4}>
        <Typography fontSize={14} mb={1}>
          Links
        </Typography>
        {coin?.links.map((link) => (
          <Chip
            size="small"
            href={link.url}
            label={link.type}
            clickable 
            style={{
              marginRight: 10,
              marginTop: 10,
              color: theme.palette.grey[500],
            }}
          />
        ))}
      </Box>
      <Box mt={4}>
        <Typography fontSize={14} mb={1}>
          Tags
        </Typography>
        {coin?.tags.map((tag) => (
          <Chip
            size="small"
            label={tag}
            style={{ marginRight: 10, color: theme.palette.grey[500] }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default CoinStats;
