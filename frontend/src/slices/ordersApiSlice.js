import { apiSlice } from './apiSlice';
import { ORDER_URL } from '../constants';

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
            })
        }),

        payOrder: builder.mutation({
            query: (orderId, paymentResult) => ({
                url: `${ORDER_URL}/${orderId}/pay`,
                method: 'PUT',
                body: paymentResult
            })
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

export const { useCreateOrderMutation, useGetOrderDetailsQuery, usePayOrderMutation, useListMyOrdersQuery, useListOrdersQuery, useDeliverOrderMutation } = ordersApiSlice;