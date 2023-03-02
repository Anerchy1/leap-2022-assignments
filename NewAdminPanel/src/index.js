import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastProvider, DialogProvider } from "./contexts";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DialogProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </DialogProvider>
  </BrowserRouter>
);
reportWebVitals();
