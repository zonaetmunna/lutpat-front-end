import { GetProductsQueryParams, ResponseCategories, ResponseCategory } from "../../types";
import apiSlice from "../api/apiSlice";

const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<ResponseCategories, GetProductsQueryParams>({
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
                    url: "/category",
                    params: {
                        ...query,
                        ...restParams,
                    },
                };
            },
            providesTags: ["category"],
        }),
        getSingleCategory: builder.query<ResponseCategory, string>({
            query: (id) => ({
                url: `/category/${id}`,
            }),
            providesTags: ["category"],
        }),
        addCategory: builder.mutation({
            query: (data) => ({
                url: "/category",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["category"],
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/category/${id}`,
                method: "DELETE",
                body: id,
            }),
            invalidatesTags: ["category"],
        }),
        updateCategory: builder.mutation({
            query: (category) => ({
                url: `/category/${category._id}`,
                method: "PUT",
                body: category,
            }),
            invalidatesTags: ["category"],
        }),
    }),
})

export const { useGetCategoriesQuery, useGetSingleCategoryQuery, useAddCategoryMutation, useDeleteCategoryMutation, useUpdateCategoryMutation } = categoryApi;