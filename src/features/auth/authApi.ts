import { IAuthTotalData, ISellerData, ISellerQuery, ISellerResponse } from "../../types";
import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<IAuthTotalData, void>({
            query: () => ({
                url: "/auth/users",
                method: "GET",

            }),
            providesTags: ["auth"],
        }),
        createSeller: builder.mutation({
            query: (data) => ({
              url: "/auth/seller",
              method: "POST",
              body: data,
            }),
            invalidatesTags: ["auth"],
          }),
        getAllSeller: builder.query<ISellerResponse, ISellerQuery>({
            query: (params) => {
                console.log(params);
                const { search, page, limit, ...restParams } = params || {};
                const query: ISellerQuery = {};


                if (search) {
                    query.search = search;
                }

                if (page && limit) {
                    query.page = page;
                    query.limit = limit;
                }

                console.log(query);

                return {
                    url: "/auth/sellers",
                    params: {
                        ...query,
                        ...restParams,
                    },
                };
            },
            providesTags: ["auth"],
        }),
        updateSeller: builder.mutation<ISellerResponse, { sellerId: string, data: ISellerData }>({
            query: ({ sellerId, data }) => ({
                url: `/auth/sellers/${sellerId}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["auth"],
        }),

        deleteSeller: builder.mutation<ISellerResponse, string>({
            query: (sellerId) => ({
                url: `/auth/sellers/${sellerId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["auth"],
        }),
    })
})

export const { useGetUsersQuery,useCreateSellerMutation, useGetAllSellerQuery, useDeleteSellerMutation, useUpdateSellerMutation } = authApi;