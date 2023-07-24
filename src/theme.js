import { grey, indigo, blueGrey } from "@mui/material/colors";

function normalColors(color) {
  const array = Object.entries(color).slice(0, 10);
  return Object.fromEntries(array);
}

function reverseColors(color) {
  const newValues = Object.values(color).slice(0, 10).reverse();
  const array = Object.keys(color)
    .slice(0, 10)
    .map((key, i) => [key, newValues[i]]);
  return Object.fromEntries(array);
}

export const light = {
  palette: {
    mode: "light",
    grey: normalColors(grey),
    indigo: normalColors(indigo),
    blueGrey: normalColors(blueGrey),
  },
};
export const dark = {
  palette: {
    mode: "dark",
    grey: reverseColors(grey),
    indigo: reverseColors(indigo),
    blueGrey: reverseColors(blueGrey),
  },
};
