import { IProduct } from "../../types";
import apiSlice from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => ({
                url: "/products",
            }),
            providesTags: ["product"],
        }),
        getSingleProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
            }),
            providesTags: ["product"],
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: "/products",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["product"],
        }),
        removeProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
                body: id,
            }),
            invalidatesTags: ["product"],
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetSingleProductQuery,
    useAddProductMutation,
    useRemoveProductMutation,
} = productApi;