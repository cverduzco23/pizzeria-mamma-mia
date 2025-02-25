import { useState, useEffect } from "react";

function Pizza() {
  const [pizza, setPizza] = useState(null);

  async function fetchPizza() {
    const response = await fetch("http://localhost:5000/api/pizzas/p001");
    const data = await response.json();
    setPizza(data);
  }

  useEffect(function () {
    fetchPizza();
  }, []);

  if (!pizza) {
    return <p>Cargando pizza...</p>;
  }

  const pizzaList = pizza.ingredients.map(function (ingredient, index) {
    return <li key={index}>{ingredient}</li>;
  });

  return (
    <div className="pizza-details">
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <ul>{pizzaList}</ul>
      <p className="price">Precio: ${pizza.price.toLocaleString()}</p>
      <button className="btn-add-cart">Añadir al carrito 🛒</button>
    </div>
  );
}

export default Pizza;
