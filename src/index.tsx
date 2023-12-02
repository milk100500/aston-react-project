import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./firebase";

import App from "./App";
import { store } from "./store";
import { CollapseContextProvider } from "./context/collapseProvider";

import "./index.css";
import "./normalize.scss";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <CollapseContextProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </CollapseContextProvider>
    </React.StrictMode>
);
