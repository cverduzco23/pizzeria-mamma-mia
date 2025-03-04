import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { PizzaProvider } from "./context/PizzaContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PizzaProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </PizzaProvider>
    </BrowserRouter>
  </StrictMode>
);
