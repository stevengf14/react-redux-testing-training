import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Welcome from "./components/Welcome";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" exact element={<Welcome />} />
      </Routes>
    </App>
  </BrowserRouter>
);

// ReactDOM.render(<App />, document.querySelector("#root"));
