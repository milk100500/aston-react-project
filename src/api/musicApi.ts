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
        getAlbumById: build.query<Album, string>({
            query: (id) => ({
                url: `albums/${id}`,
            }),
        })
    }),
});

export const {
    useGetAlbumsQuery,
    useGetAlbumByIdQuery,
} = musicApi;