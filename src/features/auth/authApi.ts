import { IAuthTotalData } from "../../types";
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
    })
})

export const { useGetUsersQuery } = authApi;