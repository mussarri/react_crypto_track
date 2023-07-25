import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useGetNewsQuery } from "../../redux/api";
import { useTheme } from "@emotion/react";

function News() {
  const { data } = useGetNewsQuery({ category: "Cryptocurrency", count: 5 });
  const theme = useTheme();
  const lineWrap = {
    display: "-webkit-box",
    "-webkit-line-clamp": "2",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    lineHeight: 1.2,
  };
  return (
    <Box pr={3}>
      <Typography pt={2} mb={1} variant="h5">
        News
      </Typography>
      {data?.value.slice(0, 3).map((news) => {
        return (
          <Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              py={2}
              gap={2}
            >
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
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default News;
