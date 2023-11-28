import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Album } from "./musicApi";

const BASE_URL = "https://aston-react-project-4fd9c-default-rtdb.firebaseio.com/";

interface QueryParams {
  id: string;
  userId: string;
}

export interface ResponseParams {
  [id: string]: {
    [uniqueId: string]: Album;
  };
}

type FavoriteItem = {
    [uniqueId: string]: Album;
  };
  
type FavoritesById = FavoriteItem[];

export function getAlbumsForFavorite(data: ResponseParams | undefined) : Album[] | never[] {
    if (!data) {
        return [];
    }
    const res: FavoritesById = Object.values(data);
    return res.map((album) => Object.values(album)[0]);
}

export const favoritesApi = createApi({
    reducerPath: "favoritesApi",
    tagTypes: ["Favorites", "FavoritePage"],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (build) => ({
        getFavorites: build.query<Album[], string>({
            query: (userId) => {
                return {
                    url: `favorites/${userId}.json`,
                };
            },
            providesTags: ["FavoritePage"],
            transformResponse: (data: ResponseParams | undefined) => getAlbumsForFavorite(data),
        }),
        getFavoritesById: build.query<ResponseParams, QueryParams>({
            query: ({ id, userId }) => {
                return {
                    url: `favorites/${userId}/${"favoriteNumber" + id}.json`,
                };
            },
            providesTags: (_, __, { id }) => [{ type: "Favorites", id }],
        }),
        addInFavorites: build.mutation({
            query: ({ albumProp, userId }) => {
                return {
                    url: `favorites/${userId}/${"favoriteNumber" + albumProp.id}.json`,
                    method: "POST",
                    body: albumProp,
                };
            },
            invalidatesTags: (_, __, { albumProp }: { albumProp: Album }) => {
                return [{ type: "Favorites", id: albumProp.id }, "FavoritePage"];
            },
        }),
        removeFromFavorites: build.mutation({
            query: ({ id, userId }) => {
                return {
                    url: `favorites/${userId}/${"favoriteNumber" + id}.json`,
                    method: "DELETE",
                };
            },
            invalidatesTags: (_, __, { id }: { id: string }) => {
                return [{ type: "Favorites", id }, "FavoritePage"];
            },
        }),
    }),
});

export const {
    useGetFavoritesQuery,
    useGetFavoritesByIdQuery,
    useAddInFavoritesMutation,
    useRemoveFromFavoritesMutation,
} = favoritesApi;