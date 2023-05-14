import { ResponseCategories, ResponseCategory } from "../../types";
import apiSlice from "../api/apiSlice";

const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query<ResponseCategories, void>({
            query: () => ({
                url: "/category",
            }),
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

export const { useGetCategoryQuery, useGetSingleCategoryQuery, useAddCategoryMutation, useDeleteCategoryMutation, useUpdateCategoryMutation } = categoryApi;