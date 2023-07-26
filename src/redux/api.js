import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// coins
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
    getSingleCoin: builder.query({
      query: ({ id }) => ({
        url: `coin/${id}`,
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h",
        },
      }),
    }),
    getCoinPriceHistory: builder.query({
      query: ({ id, period }) => ({
        url: `coin/${id}/history`,
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: period,
        },
      }),
    }),
    getCoinExchanges: builder.query({
      query: ({ id }) => ({
        url: `coin/${id}/exchanges`,
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          limit: "50",
          offset: "0",
          orderBy: "24hVolume",
          orderDirection: "desc",
        },
      }),
    }),
  }),
});

// news
export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com/news",
    prepareHeaders: (headers) => {
      headers.set("X-BingApis-SDK", "true");
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_API_KEY);
      headers.set("X-RapidAPI-Host", "bing-news-search1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ category, count }) => ({
        url: `/search?q=${category}&freshness=Day&count=${count}`,
        method: "GET",
        params: {
          textFormat: "Raw",
          safeSearch: "Off",
        },
      }),
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useGetGlobalStatsQuery,
  useGetSingleCoinQuery,
  useGetCoinPriceHistoryQuery,
  useGetCoinExchangesQuery,
} = coinApi;

export const { useGetNewsQuery } = newsApi;
