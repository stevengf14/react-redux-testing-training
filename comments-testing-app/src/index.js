import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import Root from "./Root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Root>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Root>
);
