import React from "react";
import { HashRouter } from "react-router-dom";
import ReactDom from "react-dom/client";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import App from "./App";
import { setTheme } from "@core/theme";
import store from "./store/index";
import "./mock";

setTheme("theme01");

const persistor = persistStore(store);

const root = ReactDom.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>
);
