import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
    id: string;
    email: string;
    error: string;
}

const initialState: UserState = {
    id: "",
    email: "",
    error: ""
};

const userSlise = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.error = "";
        },
        removeUser(state) {
            state.id = "";
            state.email = "";
            state.error = "";
        },
        setError(state, action) {
            state.id = "";
            state.email = "";
            state.error = action.payload;
        }
    },
});

export const { setUser, removeUser, setError } = userSlise.actions;

export default userSlise.reducer;