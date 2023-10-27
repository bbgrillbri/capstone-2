import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./cart";
import { BrowserRouter } from "react-router-dom";
import {createRoot} from 'react-dom/client';

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