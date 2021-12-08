import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./resets.css";
import App from "./App";
import "./api/configureApiSevice";
import { MoviesProvider } from "./components/MoviesProvider";

ReactDOM.render(
  <React.StrictMode>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
