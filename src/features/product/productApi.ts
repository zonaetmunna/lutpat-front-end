import { Category, IProduct } from "../../types";
import { ICategory } from "../../view/pages/main/home/Home";
import apiSlice from "../api/apiSlice";

// types
interface ApiResponseData {
    data: IProduct[];
    message: string;
    error: boolean;
}

interface ApiResponseSingle {
    data: IProduct;
    message: string;
    error: boolean;
}

interface GetProductsQueryParams {
    category?: Category;
    page?: number;
    limit?: number;
}

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<ApiResponseData, GetProductsQueryParams>({
            query: (params) => {
                console.log(params)
                const { category, ...restParams } = params || {};
                const query = category ? { category: category } : {};
                console.log(query)

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
    useRemoveProductMutation,
} = productApi;