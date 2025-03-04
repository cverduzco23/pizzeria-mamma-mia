import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

export function PizzaProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);

  async function fetchPizzas() {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setPizzas(data);
  }

  useEffect(function () {
    fetchPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas }}>
      {children}
    </PizzaContext.Provider>
  );
}

