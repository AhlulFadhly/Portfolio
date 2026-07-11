import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";

import "./styles/fonts.css";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/utilities.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);