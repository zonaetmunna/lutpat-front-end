import { GetProductsQueryParams, ResponseData, StoreResponse } from "../../types";
import apiSlice from "../api/apiSlice";

const storeApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getStore: builder.query<ResponseData, GetProductsQueryParams>({
            query: (params) => {
                console.log(params);
                const { category, search, page, limit, ...restParams } = params || {};
                const query: GetProductsQueryParams = {};

                if (category) {
                    query.category = category;
                }

                if (search) {
                    query.search = search;
                }

                if (page && limit) {
                    query.page = page;
                    query.limit = limit;
                }

                console.log(query);

                return {
                    url: "/store",
                    params: {
                        ...query,
                        ...restParams,
                    },
                };
            },
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