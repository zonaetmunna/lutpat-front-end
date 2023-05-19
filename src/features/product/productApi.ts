import { ApiResponseData, ApiResponseSingle, GetProductsQueryParams } from "../../types";
import apiSlice from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<ApiResponseData, GetProductsQueryParams>({
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
                    url: "/products",
                    params: {
                        ...query,
                        ...restParams,
                    },
                };
            },
            providesTags: ["product"],
        }),

        getProductsByShop: builder.query<ApiResponseData, string>({
            query: (id) => ({
                url: `/products/get-shop-product/${id}`,
            }),
            providesTags: ["product"],
        }),
        getSingleProduct: builder.query<ApiResponseSingle, string>({
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
        updateProduct: builder.mutation({
            query: (product) => ({
                url: `/product/${product._id}`,
                method: "PUT",
                body: product,
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
    useGetProductsByShopQuery,
    useGetSingleProductQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useRemoveProductMutation,
} = productApi;