import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://aston-react-project-4fd9c-default-rtdb.firebaseio.com/";

type HistoryResponse = {
  [uniqueId: string]: { search: "string"; searchUrl: string };
};

export const historyApi = createApi({
    reducerPath: "historyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: ["History"],
    endpoints: (build) => ({
        getHistory: build.query<HistoryResponse, string>({
            query: (uid) => {
                return {
                    url: `history/${uid}.json`,
                    method: "GET",
                };
            },
            providesTags: ["History"],
        }),
        addInHistory: build.mutation({
            query: ({ searchUrl, userId, search }) => {
                return {
                    url: `history/${userId}.json`,
                    method: "POST",
                    body: {searchUrl, search},
                };
            },
            invalidatesTags: ["History"],
        }),
        removeFromHistory: build.mutation({
            query: ({ userId, uniqKey }) => {
                return {
                    url: `history/${userId}/${uniqKey}.json`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["History"],
        }),
    }),
});

export const {
    useAddInHistoryMutation,
    useGetHistoryQuery,
    useRemoveFromHistoryMutation,
} = historyApi;