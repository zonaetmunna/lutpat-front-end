import { ResponseData, StoreResponse } from "../../types";
import apiSlice from "../api/apiSlice";

const storeApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getStore: builder.query<ResponseData, void>({
            query: () => ({
                url: "/store",
            }),
            providesTags: ["store"],
        }),
        getSingleStore: builder.query<StoreResponse, string>({
            query: (id) => ({
                url: `/store/${id}`,
            }),
            providesTags: ["store"],
        }),
        addStore: builder.mutation({
            query: (data) => ({
                url: "/store",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["store"],
        }),
        deleteStore: builder.mutation({
            query: (id) => ({
                url: `/store/${id}`,
                method: "DELETE",
                body: id,
            }),
            invalidatesTags: ["store"],
        }),
        updateStore: builder.mutation({
            query: (store) => ({
                url: `/store/${store._id}`,
                method: "PUT",
                body: store,
            }),
            invalidatesTags: ["store"],
        }),
    }),
})

export const { useGetStoreQuery, useGetSingleStoreQuery, useAddStoreMutation, useDeleteStoreMutation, useUpdateStoreMutation } = storeApi;