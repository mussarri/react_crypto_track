import { Box, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetNewsQuery } from "../../redux/api";
import { useTheme } from "@emotion/react";
import Loading from "./Loading";

function News({ category, count = 5, title = false, isHome = false }) {
  const theme = useTheme();
  // eslint-disable-next-line no-unused-vars
  const [pageSize, setPageSize] = useState(3);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const { data, isloading, isError } = useGetNewsQuery({ category, count: count });

  const lineWrap = {
    display: "-webkit-box",
    "-webkit-line-clamp": isHome ? "2" : "3",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    lineHeight: 1.2,
  };
  if (!isError) {
    const filterData = data?.value.filter((item) => item.image);
    const mapData = isHome
      ? filterData?.slice((page - 1) * pageSize, page * pageSize)
      : filterData;

    return (
      <Box pr={3}>
        <Typography pt={2} mb={1} variant="h5">
          {title && title} News
        </Typography>
        {isloading &&
          Array(isHome ? pageSize : count)
            .fill(0)
            .map(() => <Loading isNew={true} isHome={isHome} />)}
        {data &&
          mapData.map((news) => (
            <Box>
              <Box
                display={isHome && "flex"}
                justifyContent="space-between"
                py={3}
                gap={2}
              >
                {!isHome ? (
                  <>
                    <Box display="flex" justifyContent="space-between" gap={2}>
                      <img
                        width={"auto"}
                        height={70}
                        src={news.image?.thumbnail.contentUrl}
                        alt=""
                      />
                      <Link to={news.url}>
                        <Typography
                          variant="h6"
                          fontSize={16}
                          color={theme.palette.grey[700]}
                          style={lineWrap}
                        >
                          {news.name}
                        </Typography>
                      </Link>
                    </Box>
                    <div style={{ position: "relative", flex: 1 }}>
                      <Typography
                        mt={1}
                        fontSize={13}
                        color={theme.palette.grey[500]}
                        style={lineWrap}
                      >
                        {news.description}
                      </Typography>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      width={"auto"}
                      height={70}
                      src={news.image.thumbnail.contentUrl}
                      alt=""
                    />
                    <div style={{ position: "relative", flex: 1 }}>
                      <Link to={news.url}>
                        <Typography
                          variant="h6"
                          fontSize={16}
                          color={theme.palette.grey[700]}
                          style={lineWrap}
                        >
                          {news.name}
                        </Typography>
                      </Link>
                      <Typography
                        mt={1}
                        fontSize={13}
                        color={theme.palette.grey[500]}
                        style={lineWrap}
                      >
                        {news.description}
                      </Typography>
                    </div>
                  </>
                )}
              </Box>
            </Box>
          ))}

        {isHome && (
          <Pagination
            style={{ float: "right" }}
            count={Math.ceil(count / pageSize)}
            size="small"
            onChange={handleChange}
          />
        )}
      </Box>
    );
  }
}

export default News;
