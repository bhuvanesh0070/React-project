import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all.min";
import "..//node_modules/jquery/dist/jquery";
import "./index.css";
import { MediaContextProvider } from "./Context/MediaContext";
import CartContextProvider from "./Context/CartContext";
import AuthContextProvider from "./Context/AuthContext";
import FavariteContextProvider from "./Context/FavariteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <FavariteContextProvider>
      <CartContextProvider>
        <MediaContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </MediaContextProvider>
      </CartContextProvider>
    </FavariteContextProvider>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
