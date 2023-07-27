import {
  Box,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { dolar } from "../HomeComponents/GlobalStats";
import { useGetCoinExchangesQuery } from "../../../redux/api";
import Loading from "../Loading";

function CoinMarkets({ coin }) {
  const { isLoading, isError, data } = useGetCoinExchangesQuery({
    id: coin.uuid,
  });
  // eslint-disable-next-line
  const [pageSize] = useState(10);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  if (isError) return <div>Error</div>;
  if (!isError) {
    return (
      <>
        <Typography px={3} pt={3} fontSize={22}>
          {coin.name} Markets
        </Typography>
        <TableContainer
          component={Paper}
          sx={{
            height: "fit-content",
            width: "98%",
            margin: "30px auto",
            padding: "10px 20px",
          }}
        >
          <Table
            sx={{ width: "100%", minWidth: 650 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="right">#</TableCell>
                <TableCell align="left">Exchange</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Btc Price</TableCell>
                <TableCell align="right">24H Volume</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isLoading
                ? data?.data.exchanges
                    .slice((page - 1) * pageSize, page * pageSize)
                    .map((row, index) => (
                      <TableRow key={index}>
                        <TableCell align="right">
                          {(page - 1) * pageSize + index + 1}
                        </TableCell>
                        <TableCell
                          align="left"
                          component="th"
                          scope="row"
                          style={{ display: "flex" }}
                        >
                          <Box style={{ display: "flex" }}>
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
                            <div>{row.name}</div>
                          </Box>
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ fontWeight: "normal", fontSize: 16 }}
                        >
                          {row.price.slice(0, 8) + " $"}
                        </TableCell>

                        <TableCell align="right">
                          {row.btcPrice.slice(0, 8)}
                        </TableCell>
                        <TableCell align="right">
                          {dolar(row["24hVolume"]) + " $"}
                        </TableCell>
                      </TableRow>
                    ))
                : Array(10)
                    .fill(0)
                    .map((_, index) => <Loading isCoinMarkets={true} />)}
            </TableBody>
          </Table>
          <Pagination
            style={{ float: "right", paddingTop: 15 }}
            count={5}
            size="small"
            onChange={handleChange}
          />
        </TableContainer>
      </>
    );
  }
}

export default CoinMarkets;
