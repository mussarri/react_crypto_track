import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Box,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useGetCoinPriceHistoryQuery } from "../../../redux/api";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function LineChart({ id }) {
  const [input, setInput] = useState("24h");
  const { data } = useGetCoinPriceHistoryQuery({ id, period: input });
  const md = useMediaQuery("(min-width:800px)");

  if (data) {
    let priceData = [...data.data.history];
    priceData = priceData.length > 20 && priceData.slice(0, 30);

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    };

    const labels = priceData
      .map((item) =>
        new Date(item.timestamp * 1000).toLocaleTimeString("tr-TR", {
          hour12: false,
        })
      )
      .reverse();

    const lineData = {
      labels,
      datasets: [
        {
          label: "Price",
          data: priceData.map((item) => item.price.slice(0, 8)).reverse(),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
    return (
      <Box
        style={{
          padding: md ? 20 : 0,
          paddingTop: md ? 0 : 50,
          width: "100%",
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">Chart</Typography>

          <Select
            id="outlined-basic"
            label="Search"
            variant="outlined"
            size="small"
            style={{ width: 150 }}
            defaultValue={input}
          >
            {["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"].map((item) => (
              <MenuItem onClick={() => setInput(item)} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Typography fontSize={13}>
          {input + " change: " + (data.data.change && data.data.change)}%
        </Typography>
        <Line options={options} data={lineData} />
      </Box>
    );
  }
}

export default LineChart;
