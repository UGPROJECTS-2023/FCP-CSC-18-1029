import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
