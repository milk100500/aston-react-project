/* eslint-disable no-console */
import { Action, createListenerMiddleware } from "@reduxjs/toolkit";

import { removeUser } from "../../store/auth/authSlice";

export interface ActionWithPayloadInterface extends Action {
  type: string;
  payload?: {
    email: string | null;
  };
}

const loginMiddleware = createListenerMiddleware();

loginMiddleware.startListening({
    type: removeUser.type,
    effect: () => {
        console.warn("You are logged out, your search history and favorites are saved");
    },
});

export default loginMiddleware;