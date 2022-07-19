import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {API} from "@/lib";
import {SneakerModel} from "@/models";

export const getFavService = createApi({
    reducerPath: 'getFav',
    tagTypes: ['GET_FAV'],
    baseQuery: fetchBaseQuery({baseUrl: API.url}),
    endpoints: (build) => ({
        fetchAllFav: build.query<SneakerModel[], null>({
            query: () => ({
                url: '/fav',
            }),
            providesTags: result => ['GET_FAV']
        }),
        setFav: build.mutation<SneakerModel, SneakerModel>({
            query: (item: SneakerModel) => ({
                url: `/fav`,
                method: 'POST',
                body: item
            }),
            invalidatesTags: ['GET_FAV']
        }),
        deleteItemFromFav: build.mutation<SneakerModel, SneakerModel>({
            query: (item) => ({
                url: `/fav/${item.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['GET_FAV']
        })
    })
})