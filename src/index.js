import React from "react";
import ReactDOM from "react-dom";
import { MoviesProvider } from "./components/MoviesProvider";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./api/configureApiSevice";
import "./index.css";
import "./resets.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoviesProvider>
        <App />
      </MoviesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
