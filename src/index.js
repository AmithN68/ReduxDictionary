import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.scss";
import { Provider } from "react-redux";
import { store } from "./store/Store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
