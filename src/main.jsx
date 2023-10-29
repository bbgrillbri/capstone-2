import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./cart";
import { BrowserRouter } from "react-router-dom";
import {createRoot} from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = createRoot(document.getElementById ('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
     <CartProvider>
      <App />
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)