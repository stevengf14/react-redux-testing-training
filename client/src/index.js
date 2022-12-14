import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import Feature from "./components/Feature";
import Signout from "./components/auth/Signout";

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") },
  },
  applyMiddleware(reduxThunk)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/feature" exact element={<Feature />} />
          <Route path="/signout" exact element={<Signout />} />
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>
);

// ReactDOM.render(<App />, document.querySelector("#root"));
