import { useTheme } from "@emotion/react";
import {
  Avatar,
  Box,
  Button,
  Skeleton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

function Loading({
  isCoin,
  isNew,
  isHome,
  isNewest,
  isCryptoList,
  isCoinStats,
  isCoinMarkets,
}) {
  const theme = useTheme();
  if (isCoin)
    return (
      <div
        style={{
          padding: 20,
          borderBottom: "1px solid",
          borderColor: theme.palette.grey[400],
        }}
      >
        <Box display="flex" paddingX={3} height={70} gap={2}>
          <Skeleton variant="circular" width={"25%"}>
            <Avatar />
          </Skeleton>
          <Box>
            <Skeleton width="70px" variant="text" height={25}>
              <Typography>.</Typography>
            </Skeleton>
            <Skeleton width="50px" variant="text" height={25}>
              <Typography>.</Typography>
            </Skeleton>
          </Box>
          <Box display="flex" gap={2} marginLeft={"auto"} marginRight={2}>
            <Box marginTop="auto">
              <Skeleton width="50px" variant="text" height={25}>
                <Typography>.</Typography>
              </Skeleton>
            </Box>
          </Box>
        </Box>
      </div>
    );
  if (isNew)
    return (
      <Box>
        <Box
          display={isHome && "flex"}
          justifyContent="space-between"
          py={3}
          gap={2}
        >
          {!isHome ? (
            <>
              <Box display="flex" justifyContent="space-between" gap={1}>
                <Skeleton
                  sx={{ bgcolor: "grey.900" }}
                  variant="rectangular"
                  width={50}
                  height={58}
                />
                <Box>
                  <Skeleton variant="text" width={140} />
                  <Skeleton variant="text" width={100} />
                </Box>
              </Box>
              <div style={{ position: "relative", flex: 1, marginTop: 10 }}>
                <Skeleton />
              </div>
            </>
          ) : (
            <>
              <Skeleton
                sx={{ bgcolor: "grey.500" }}
                variant="rectangular"
                width={100}
                height={78}
              />
              <div style={{ position: "relative", flex: 1 }}>
                <Skeleton flex="1" width={"80%"} variant="text">
                  <Typography>.</Typography>
                </Skeleton>
                <Skeleton flex="1" variant="text" width={"100%"}>
                  <Typography>.</Typography>
                </Skeleton>
                <Skeleton flex="1" variant="text" width={"90%"}>
                  <Typography>.</Typography>
                </Skeleton>
              </div>
            </>
          )}
        </Box>
      </Box>
    );
  if (isNewest) {
    return (
      <Box
        p={1}
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
        <Skeleton
          sx={{ bgcolor: "grey.500" }}
          variant="rectangular"
          width={"35%"}
          height={78}
        />
        <Box flex={1}>
          <Skeleton width="80%">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton width="60%">
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>
    );
  }
  if (isCryptoList) {
    return (
      <TableRow>
        <TableCell align="right">-</TableCell>
        <TableCell
          align="left"
          component="th"
          scope="row"
          style={{ display: "flex" }}
        >
          <div style={{ height: 30, marginRight: 10 }}>
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>
          </div>
          <Skeleton width="50%" style={{ float: "right" }}>
            <Typography>.</Typography>
          </Skeleton>
        </TableCell>
        <TableCell align="right" style={{ fontWeight: "normal", fontSize: 16 }}>
          <Skeleton width="50%" style={{ float: "right" }}>
            <Typography>.</Typography>
          </Skeleton>
        </TableCell>
        <TableCell>
          <Skeleton width="50%" style={{ float: "right" }}>
            <Typography>.</Typography>
          </Skeleton>
        </TableCell>
        <TableCell align="right">
          <Skeleton width="50%" style={{ float: "right" }}>
            <Typography>.</Typography>
          </Skeleton>
        </TableCell>
        <TableCell align="right">
          <Skeleton width="50%" style={{ float: "right" }}>
            <Typography>.</Typography>
          </Skeleton>
        </TableCell>
      </TableRow>
    );
  }
  if (isCoinStats)
    return (
      <Box pr={3} borderRight="1px solid grey" style={{ overflowY: "scroll" }}>
        <Box display="flex" alignItems="center">
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
          <Typography ml={2} variant="h6">
            <Skeleton width={100} />
          </Typography>
        </Box>
        <Typography fontWeight="bolder" mt={2} variant="h3">
          <Skeleton />
        </Typography>
        <Typography mt={1} mb={3} fontSize={20}>
          <Skeleton />
        </Typography>
        <Button
          variant="contained"
          size="small"
          color="grey"
          style={{ width: "60%" }}
        >
          <Typography ml={1} fontSize={12}>
            <Skeleton width={100} />
          </Typography>
        </Button>
        {["marketCap", "24hVolume", "fullyDilutedMarketCap"].map((item) => (
          <Box display="flex" justifyContent="space-between" mt={3}>
            <Typography fontSize={13}>
              <Skeleton width={100} />
            </Typography>
            <Typography fontSize={14}>
              <Skeleton width={100} />
            </Typography>
          </Box>
        ))}

        <Box mt={4}>
          <Typography fontSize={14}>
            <Skeleton />
          </Typography>
          <Box display="flex" gap={1} mt={1}>
            <Skeleton width={200} />
          </Box>
        </Box>
        <Box mt={4} display="flex" justifyContent="space-between" gap={1}>
          <Box>
            <Typography color={theme.palette.grey[400]} fontSize={13}>
              <Skeleton width={100} />
            </Typography>

            <Typography color={theme.palette.grey[400]} fontSize={13}>
              <Skeleton width={80} />
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={13} fontWeight="bolder">
              <Skeleton width={100} />
            </Typography>
            <Typography fontSize={13} textAlign="right">
              <Skeleton width={80} />
            </Typography>
          </Box>
        </Box>
        <Box mt={4}>
          <Typography fontSize={14} mb={1}>
            <Skeleton width={200} />
          </Typography>
          <Skeleton />
        </Box>
        <Box mt={4}>
          <Typography fontSize={14} mb={1}>
            <Skeleton width={40} />
          </Typography>
          <Box display="flex" gap={2}>
            {[1, 2, 3, 4].map((tag) => (
              <Skeleton width={50} />
            ))}
          </Box>
        </Box>
      </Box>
    );

  if (isCoinMarkets)
    return (
      <TableRow>
        <TableCell align="right">
          <Skeleton />{" "}
        </TableCell>
        <TableCell
          align="left"
          component="th"
          scope="row"
          style={{ display: "flex" }}
        >
          <Box style={{ display: "flex" }}>
            <div style={{ height: 30, marginRight: 10 }}>
              <Skeleton variant="circular" width={30} height={30} />
            </div>
            <div>
              <Skeleton width={40} marginLeft />
            </div>
          </Box>
        </TableCell>
        <TableCell align="right" style={{ fontWeight: "normal", fontSize: 16 }}>
          <Skeleton />
        </TableCell>

        <TableCell align="right">
          <Skeleton />
        </TableCell>
        <TableCell align="right">
          <Skeleton />
        </TableCell>
      </TableRow>
    );
}

export default Loading;
