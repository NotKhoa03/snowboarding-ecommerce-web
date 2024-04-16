


import { PRODUCTS_URL, UPLOAD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ keyword, pageNumber}) => ({
                url: PRODUCTS_URL,
                params: { pageNumber, keyword}
            }),
            providesTags: ['Products'], //This is the tag that will be used to invalidate the cache, otherwise we would have to refresh the page to see the new data
            keepUnusedDataFor: 5
        }),

        getProductDetails: builder.query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor: 5
        }),

        createProduct: builder.mutation({
            query: (product) => ({
                url: PRODUCTS_URL,
                method: 'POST',
                // body: { ...product }
            }),
            invalidatesTags: ['Product'],
        }),
        
        updateProduct: builder.mutation({
            //Don't use {} to wrap data that will destructure and look for data. 
            query: (data) => ({
                url: `${PRODUCTS_URL}/${data.productId}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Products'],
        }),

        updateProductStock: builder.mutation({
            query: (data) => ({
                url: `${PRODUCTS_URL}/${data.productId}/stock`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Products'],
        }),

        uploadProductImage: builder.mutation({
            query: (formData) => ({
                url: UPLOAD_URL,
                method: 'POST',
                body: formData
            }),
        }),

        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Products'],
        }),

        createReview: builder.mutation({
            query: (data) => ({
                url: `${PRODUCTS_URL}/${data.productId}/reviews`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Product'],
        }),

        getTopProducts: builder.query({
            query: () => ({
                url: `${PRODUCTS_URL}/top`,
            }),
            keepUnusedDataFor: 5
        }),
    }),
    
})

export const { useGetProductsQuery, useGetProductDetailsQuery, useCreateProductMutation, useUpdateProductMutation, useUpdateProductStockMutation, useUploadProductImageMutation, useDeleteProductMutation, useCreateReviewMutation, useGetTopProductsQuery } = productApiSlice;
