import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useGetCoinsQuery } from "../../redux/api";
import { useTheme } from "@emotion/react";
import { dolar } from "./GlobalStats";
import { Link } from "react-router-dom";

function CryptoList({ isHome = false }) {
  const { data, isError, isLoading } = useGetCoinsQuery({
    limit: isHome ? 10 : 50,
    orderBy: "marketCap",
  });
  const theme = useTheme();

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;

  if (data)
    return (
      <Box pt={5}>
        <Typography px={2} mt={0} variant="h5">
          Today's Cryptocurrency Prices
        </Typography>
        <TableContainer
          component={Paper}
          sx={{
            height: "fit-content",
            width: "98%",
            margin: "30px auto",
            padding: "10px 20px 10px 0px",
            background: theme.palette.grey[100],
          }}
        >
          <Table
            sx={{ width: "100%", minWidth: 650 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="right">#</TableCell>
                <TableCell align="left">NAME</TableCell>
                <TableCell align="right">PRICE</TableCell>
                <TableCell align="right">24H CHANGE</TableCell>
                <TableCell align="right">24H VOLUME</TableCell>
                <TableCell align="right">MARKET CAP</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.data.coins.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="right">{index + 1}</TableCell>
                  <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    style={{ display: "flex" }}
                  >
                    <Link
                      to={"/coin/" + row.symbol}
                      style={{ display: "flex" }}
                    >
                      <div style={{ height: 30 }}>
                        <img
                          src={row.iconUrl}
                          style={{
                            width: 30,
                            height: 30,
                            marginRight: "15px",
                            objectFit: "cover",
                          }}
                          alt=""
                        />
                      </div>
                      <div>{row.name + " (" + row.symbol + ")"}</div>
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    {row.price.slice(0, 8) + " $"}
                  </TableCell>
                  <TableCell
                    style={{
                      color: row.change.slice(0, 1) === "-" ? "red" : "green",
                    }}
                    align="right"
                  >
                    {row.change + " %"}
                  </TableCell>
                  <TableCell align="right">
                    {dolar(row["24hVolume"]) + " $"}
                  </TableCell>
                  <TableCell align="right">
                    {dolar(row.marketCap) + " $"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {isHome ? (
            <Link
              to={"/cryptocurrencies"}
              style={{ float: "right", marginTop: 15 }}
            >
              Show More
            </Link>
          ) : (
            ""
          )}
        </TableContainer>
      </Box>
    );
}

export default CryptoList;
