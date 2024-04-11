import { apiSlice } from './apiSlice';
import { ORDER_URL, PAYPAL_URL } from '../constants';

export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (order) => ({
                url: ORDER_URL,
                method: 'POST',
                body: {...order}
            })
        }),

        getOrderDetails: builder.query({
            query: (orderId) => ({
                url: `${ORDER_URL}/${orderId}`
            }),
            keepUnusedDataFor: 5
        }),

        payOrder: builder.mutation({
            query: ({orderId, details}) => ({
                url: `${ORDER_URL}/${orderId}/pay`,
                method: 'PUT',
                body: {...details}
            })
        }),

        getPayPalClientID: builder.query({
            query: () => ({
                url: PAYPAL_URL
            }),
            keepUnusedDataFor: 5
        }),

        listMyOrders: builder.query({
            query: () => ({
                url: `${ORDER_URL}/myorders`
            })
        }),

        listOrders: builder.query({
            query: () => ({
                url: ORDER_URL
            })
        }),

        deliverOrder: builder.mutation({
            query: (orderId) => ({
                url: `${ORDER_URL}/${orderId}/deliver`,
                method: 'PUT'
            })
        })
    })
})

export const { useCreateOrderMutation, useGetOrderDetailsQuery, usePayOrderMutation, useGetPayPalClientIDQuery, useListMyOrdersQuery, useListOrdersQuery, useDeliverOrderMutation } = ordersApiSlice;