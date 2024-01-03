import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        {" "}
        {/* Wrapping the root level component with the Browser Router Component from react-router-dom */}
        <Provider store={store}>
            {" "}
            {/* Wrapping the root level component with the Redux Store using Provider Component from react-redu*/}
            <App />
        </Provider>
    </BrowserRouter>
);
