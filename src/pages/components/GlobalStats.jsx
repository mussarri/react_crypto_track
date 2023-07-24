import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import React from "react";
import { useGetGlobalStatsQuery } from "../../redux/api";

export function dolar(number) {
  const intToString = (num) => {
    num = num.toString().replace(/[^0-9.]/g, "");
    if (num < 1000) {
      return num;
    }
    let si = [
      { v: 1e3, s: "K" },
      { v: 1e6, s: "M" },
      { v: 1e9, s: "B" },
      { v: 1e12, s: "T" },
      { v: 1e15, s: "P" },
      { v: 1e18, s: "E" },
    ];
    let index;
    for (index = si.length - 1; index > 0; index--) {
      if (num >= si[index].v) {
        break;
      }
    }
    return (
      (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
      si[index].s
    );
  };
  const value = new Intl.NumberFormat("en-US").format(number);
  return intToString(value);
}

function insertSpaces(string) {
  const newString = string
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([^0-9])([0-9])/g, "$1 $2")
    .replace(/^./, string[0].toUpperCase())
    .trim();
  return newString;
}

function GlobalStats() {
  const theme = useTheme();
  const { data, isLoading, isError } = useGetGlobalStatsQuery();

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  if (data)
    return (
      <Box
        display={"flex"}
        gap={3}
        p={3}
        borderBottom={"1px solid"}
        borderColor={theme.palette.grey[400]}
      >
        {Object.entries(data?.data)
          .slice(1, 7)
          .map((item, index) => (
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Typography fontSize={14} color={theme.palette.grey[500]}>
                {insertSpaces(item[0])}:
              </Typography>
              <Typography fontSize={13} color={theme.palette.grey[600]}>
                {index === 3 || index === 4
                  ? dolar(item[1]) + " $"
                  : index === 5
                  ? item[1].toFixed(3) + " %"
                  : item[1]}
              </Typography>
            </Box>
          ))}
      </Box>
    );
  else
    return (
      <Box
        display={"flex"}
        gap={3}
        p={3}
        borderBottom={"1px solid"}
        borderColor={theme.palette.grey[400]}
      >
        Error
      </Box>
    );
}

export default GlobalStats;
