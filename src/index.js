import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={configureStore()}>
        <App />
      </Provider>
    </Router>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
