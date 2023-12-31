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
  useMediaQuery,
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
  const lg = useMediaQuery("(min-width:1300px)");
  const grid = useMediaQuery("(min-width:800px)");
  const md = useMediaQuery("(min-width:500px)");
  const sm = useMediaQuery("(min-width:410px)");

  if (isError) return <div>Error</div>;
  if (!isError) {
    return (
      <>
        <Typography mt={5} px={grid && 2} fontSize={22}>
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
            sx={{ width: "100%", minWidth: lg && 650 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="right">#</TableCell>
                <TableCell align={sm ? "left" : "right"}>Exchange</TableCell>
                {sm && <TableCell align="right">Price</TableCell>}
                {md && <TableCell align="right">Btc Price</TableCell>}
                {lg && <TableCell align="right">24H Volume</TableCell>}
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
                          align={sm ? "left" : "right"}
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

                        {sm && (
                          <TableCell
                            align="right"
                            style={{ fontWeight: "normal", fontSize: 16 }}
                          >
                            {row.price.slice(0, 8) + " $"}
                          </TableCell>
                        )}

                        {md && (
                          <TableCell align="right">
                            {row.btcPrice.slice(0, 8)}
                          </TableCell>
                        )}

                        {lg && (
                          <TableCell alglign="right">
                            {dolar(row["24hVolume"]) + " $"}
                          </TableCell>
                        )}
                      </TableRow>
                    ))
                : Array(10)
                    .fill(0)
                    .map((_, index) => <Loading isCoinMarkets={true} />)}
            </TableBody>
          </Table>
          <Pagination
            style={{ float: "right", paddingTop: 15 }}
            count={Math.ceil(data?.data.exchanges.length % 5)}
            size="small"
            onChange={handleChange}
          />
        </TableContainer>
      </>
    );
  }
}

export default CoinMarkets;
