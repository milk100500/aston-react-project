import { configureStore } from "@reduxjs/toolkit";

import { musicApi } from "../api/musicApi";
import { historyApi } from "../api/historyApi";

import userReduser from "./auth/authSlice";
import searchSlice from "./search/searchSlice";

export const store = configureStore({
    reducer: {
        auth: userReduser,
        search: searchSlice,
        [musicApi.reducerPath]: musicApi.reducer,
        [historyApi.reducerPath]: historyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(musicApi.middleware)
            .concat(historyApi.middleware)
});
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
