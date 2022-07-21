import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {API} from "@/lib";
import {SneakerModel} from "@/models";

export const getOrdersService = createApi({
    reducerPath: 'getOrders',
    tagTypes: ['GET_ORDERS'],
    baseQuery: fetchBaseQuery({baseUrl: API.url}),
    endpoints: (build) => ({
        fetchOrders: build.query<{[k: string]: SneakerModel[]}[], null>({
            query: () => ({
                url: '/orders',
            }),
            providesTags: result => ['GET_ORDERS']
        }),
        makeOrder: build.mutation<SneakerModel[], SneakerModel[]>({
            query: (items) => ({
                url: `/orders`,
                method: 'POST',
                body: [items]
            }),
            invalidatesTags: ['GET_ORDERS']
        }),
        removeOrder: build.mutation<number, number>({
            query: (index) => ({
                url: `/orders/${index}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['GET_ORDERS']
        })
    })
})
