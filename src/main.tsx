import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDom from "react-dom/client";
import App from "./App";
import { setTheme } from "@core/theme";

setTheme("theme01");

const root = ReactDom.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
