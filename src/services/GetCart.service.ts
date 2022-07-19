import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {API} from "@/lib";
import {SneakerModel} from "@/models";

export const getCartService = createApi({
    reducerPath: 'getCart',
    tagTypes: ['GET_CART'],
    baseQuery: fetchBaseQuery({baseUrl: API.url}),
    endpoints: (build) => ({
        fetchCart: build.query<SneakerModel[], null>({
            query: () => ({
                url: '/cart',
            }),
            providesTags: result => ['GET_CART']
        }),
        setItemToCart: build.mutation<SneakerModel, SneakerModel>({
            query: (item) => ({
                url: `/cart`,
                method: 'POST',
                body: item
            }),
            invalidatesTags: ['GET_CART']
        }),
        deleteItemFromCart: build.mutation<SneakerModel, SneakerModel>({
            query: (item) => ({
                url: `/cart/${item.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['GET_CART']
        })
    })
})
