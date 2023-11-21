import { configureStore } from "@reduxjs/toolkit";

import userReduser from "./auth/authSlice";

export const store = configureStore({
    reducer: {
        auth: userReduser,
    },
});
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
