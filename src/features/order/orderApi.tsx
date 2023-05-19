import { IOrderSingle, IOrderTotalData } from "../../types";
import apiSlice from "../api/apiSlice";

const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postPayment: builder.mutation({
      query: (data) => ({
        url: "/create-payment-intent",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),

    getOrders: builder.query<IOrderTotalData, void>({
      query: () => ({
        url: "/order",
      }),

      providesTags: ["order"],
    }),
    getOrderUser: builder.query<IOrderTotalData, string>({
      query: (userId) => ({
        url: `/order/user/${userId}`,
      }),
      providesTags: ["order"],
    }),

    getOrder: builder.query<IOrderSingle, string>({
      query: (id) => ({
        url: `/order/${id}`,
      }),
      providesTags: ["order"],
    }),
    postOrder: builder.mutation({
      query: (data) => ({
        url: "/order",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),
    updateOrder: builder.mutation({
      query: (order) => ({
        url: `/order/${order._id}`,
        method: "PUT",
        body: order,
      }),
      invalidatesTags: ["order"],
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/order/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  usePostPaymentMutation,
  useGetOrderQuery,
  useGetOrdersQuery,
  useGetOrderUserQuery,
  usePostOrderMutation,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} = orderApi;
