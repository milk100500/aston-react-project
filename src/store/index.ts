import { configureStore } from "@reduxjs/toolkit";

import { musicApi } from "../api/musicApi";

import userReduser from "./auth/authSlice";

export const store = configureStore({
    reducer: {
        auth: userReduser,
        [musicApi.reducerPath]: musicApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(musicApi.middleware)
});
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
