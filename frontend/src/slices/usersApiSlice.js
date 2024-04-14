// Desc: This file contains the logic for the usersApiSlice, which is used to make API calls to the backend for user authentication and user data
import { USER_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/login`,
                method: 'POST',
                body: data
            })
        }),

        register: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}`,
                method: 'POST',
                body: data
            })
        }),

        logout: builder.mutation({
            query: () => ({
                url: `${USER_URL}/logout`,
                method: 'POST'
            })
        }),
        
        profile : builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/profile`,
                method: 'PUT',
                body: data
            })
        }),

        getUsers: builder.query({
            query: () => ({
                url: USER_URL,
            }),
            providesTags: ['Users'], //This is the tag that will be used to invalidate the cache, otherwise we would have to refresh the page to see the new data
            keepUnusedDataFor: 5
        }),

        deleteUser: builder.mutation({
            query: (userId) => ({
                url: `${USER_URL}/${userId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Users']
        }),

        getUserDetails: builder.query({
            query: (userId) => ({
                url: `${USER_URL}/${userId}`,
            }),
            keepUnusedDataFor: 5
        }),

        updateUser: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/${data.userId}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Users']
        }),


    }),
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useProfileMutation, useGetUsersQuery, useDeleteUserMutation, useGetUserDetailsQuery, useUpdateUserMutation } = usersApiSlice;
        