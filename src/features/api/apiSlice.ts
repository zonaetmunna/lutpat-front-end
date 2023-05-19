import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_BASE_URL,
    }),
    tagTypes: ["product", "auth", "store", "category", "order"],
    endpoints: (builder) => ({}),
});

export default apiSlice;