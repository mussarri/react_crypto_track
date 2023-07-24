import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const coinApi = createApi({
  reducerPath: "coinApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_API_KEY);
      headers.set("X-RapidAPI-Host", "coinranking1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: ({ limit, orderBy }) => ({
        url: "coins",
        method: "GET",
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h",
          "tiers[0]": "1",
          orderBy: orderBy,
          orderDirection: "desc",
          limit: limit,
          offset: "0",
        },
      }),
    }),
    getGlobalStats: builder.query({
      query: () => ({
        url: "stats",
        method: "GET",
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
        },
      }),
    }),
  }),
});

export const { useGetCoinsQuery, useGetGlobalStatsQuery } = coinApi;
