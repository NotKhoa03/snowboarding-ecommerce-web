import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../constants';

// Define a service using a base URL and expected endpoints
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

// Export the auto-generated hooks for the API
export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Product', 'Order', 'User'],
    endpoints: (builder) => ({})
});
