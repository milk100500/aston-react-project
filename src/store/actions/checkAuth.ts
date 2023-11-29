import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { setUser } from "../auth/authSlice";

export const checkAuth = createAsyncThunk(
    "auth/checkAuth",
    (_, { dispatch }) => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                return dispatch(setUser({ id: user.uid, email: user.email }));
            }
        });
    },
);