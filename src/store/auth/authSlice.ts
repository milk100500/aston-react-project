import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
    id: string;
    email: string;
    token: string;
    error: string;
}

const initialState: UserState = {
    id: "",
    email: "",
    token: "",
    error: ""
};

const userSlise = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.error = "";
        },
        removeUser(state) {
            state.id = "";
            state.email = "";
            state.token = "";
            state.error = "";
        },
        setError(state, action) {
            state.id = "";
            state.email = "";
            state.token = "";
            state.error = action.payload;
        }
    },
});

export const { setUser, removeUser, setError } = userSlise.actions;

export default userSlise.reducer;