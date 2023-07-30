import React, { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Input,
  Typography,
  useMediaQuery,
} from "@mui/material";
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

  const md = useMediaQuery("(min-width:800px)");
  const sm = useMediaQuery("(min-width:500px)");
  const xs = useMediaQuery("(min-width:420px)");

  return (
    <Box
      pr={md && 3}
      borderRight={md && "1px solid grey"}
      style={{ overflowY: "scroll" }}
    >
      <Box
        display={md ? "" : "flex"}
        justifyContent="space-between"
        alignItems="flex-start"
        mt={md ? 0 : 2}
      >
        <Box display="flex" alignItems="center">
          <img width={30} src={coin.iconUrl} alt="" />
          <Typography ml={2} variant={md ? "h6" : sm ? "h4" : "h5"}>
            {coin.name + " (" + coin.symbol + ")"}
          </Typography>
        </Box>
        <Box>
          <Typography
            fontWeight="bolder"
            mt={md && 2}
            variant={sm ? "h3" : xs ? "h4" : "h5"}
          >
            {formatter.format(coin.price?.slice(0, 8))}
          </Typography>
          <Typography
            mt={1}
            mb={3}
            fontSize={20}
            textAlign={md ? "left" : "right"}
            color={coin.change?.slice(0, 1) === "-" ? "red" : "green"}
          >
            {coin.change && coin.change}%
          </Typography>
        </Box>
      </Box>
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
          <Typography fontSize={md ? 13 : 15} color={theme.palette.grey[500]}>
            {insertSpaces(item)}
          </Typography>
          <Typography fontSize={md ? 14 : 16}>{dolar(coin[item])} $</Typography>
        </Box>
      ))}
      {Object.entries(coin.supply)
        .slice(2)
        .map((supply) => (
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Typography fontSize={md ? 13 : 15} color={theme.palette.grey[500]}>
              Supply {insertSpaces(supply[0])}
            </Typography>
            <Typography fontSize={md ? 14 : 16}>
              {dolar(supply[1])} $
            </Typography>
          </Box>
        ))}
      <Box mt={4}>
        <Typography color={theme.palette.grey[600]} fontSize={md ? 14 : 16}>
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
          <Typography color={theme.palette.grey[400]} fontSize={md ? 13 : 15}>
            All-time high
          </Typography>

          <Typography color={theme.palette.grey[400]} fontSize={md ? 14 : 16}>
            {new Date(coin.allTimeHigh?.timestamp * 1000).toLocaleDateString(
              "en-GB"
            )}
          </Typography>
        </Box>
        <Box>
          <Typography fontSize={md ? 13 : 15} fontWeight="bolder">
            {formatter.format(coin.allTimeHigh.price?.slice(0, 8))}
          </Typography>
          <Typography
            color={
              coin.allTimeHigh.price - coin.price > 0
                ? "red"
                : theme.palette.grey[400]
            }
            fontSize={md ? 14 : 16}
            textAlign="right"
          >
            -{calculatePriceDown(coin.allTimeHigh.price, coin.price)}%
          </Typography>
        </Box>
      </Box>
      <Box mt={4}>
        <Typography fontSize={md ? 14 : 16} mb={1}>
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
        <Typography fontSize={md ? 14 : 16} mb={1}>
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
