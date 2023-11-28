import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://655f823c879575426b457626.mockapi.io/api/v1/";

export type Album = {
  id: string;
  author: string;
  songs: string[];
  title: string;
  year: number;
  cover: string;
};

interface QueryParams {
    search?: string | null;
    page?: number;
    limit?: number;
  }

export const musicApi = createApi({
    reducerPath: "musicApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (build) => ({
        getAlbums: build.query<Album[], void>({
            query: () => ({
                url: "albums",
            }),
        }),
        getAlbumsBySearch: build.query<Album[], QueryParams>({
            query: ({ search }) => {
                return {
                    url: "albums",
                    params: { search },
                };
            },
        }),
        getAlbumById: build.query<Album, string>({
            query: (id) => ({
                url: `albums/${id}`,
            }),
        }),
        getSearchSuggest: build.query<Album[], QueryParams>({
            query: ({ search = "", limit = 5, page = 1 }) => {
                return {
                    url: "albums",
                    params: { search, limit, page },
                };
            },
        }),
    }),
});

export const {
    useGetAlbumsQuery,
    useGetAlbumByIdQuery,
    useGetSearchSuggestQuery,
    useGetAlbumsBySearchQuery,
} = musicApi;