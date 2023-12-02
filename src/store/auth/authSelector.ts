import { RootState } from "..";

export const userId = (state: RootState) => state.auth.id;
export const userData = (state: RootState) => state.auth;