import { configureStore } from "@reduxjs/toolkit";

import { musicApi } from "../api/musicApi";
import { historyApi } from "../api/historyApi";
import { favoritesApi } from "../api/favoritesApi";

import userReduser from "./auth/authSlice";
import searchSlice from "./search/searchSlice";
import logoutMiddleware from "./middleware/logoutMiddleware";

export const store = configureStore({
    reducer: {
        auth: userReduser,
        search: searchSlice,
        [musicApi.reducerPath]: musicApi.reducer,
        [historyApi.reducerPath]: historyApi.reducer,
        [favoritesApi.reducerPath]: favoritesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(musicApi.middleware)
            .concat(historyApi.middleware)
            .concat(favoritesApi.middleware)
            .concat(logoutMiddleware.middleware)
});
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
