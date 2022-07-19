import {API} from "@/lib";
import {SneakerModel} from "@/models";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const getSneakersService = createApi({
    reducerPath: 'getSneakers',
    tagTypes: ['GET_SNEAKERS'],
    baseQuery: fetchBaseQuery({baseUrl: API.url}),
    endpoints: (build) => ({
        fetchAllSneakers: build.query<SneakerModel[], null>({
            query: () => ({
                url: '/items',
            }),
            providesTags: result => ['GET_SNEAKERS']
        }),
        searchSneakers: build.query<SneakerModel[], string>({
            query: (search = '') => ({
                url: '/items',
                params: {
                    search
                }
            })
        }),
    })
})