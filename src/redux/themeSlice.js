import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: {
    value: "dark",
  },
  reducers: {
    setMode: (state) => {
      state.value = state.value === "dark" ? "light" : "dark";
    },
  },
});

export const { setMode } = themeSlice.actions;
