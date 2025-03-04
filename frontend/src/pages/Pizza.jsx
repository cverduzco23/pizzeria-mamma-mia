import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/pizza.css";

function Pizza() {
  const { pizzas } = useContext(PizzaContext);
  const { addToCart } = useContext(CartContext);

  const pizza = pizzas.find(function (pizza) {
    return pizza.id === "p001";
  });

  return (
    <div className="pizza-container">
      <div className="pizza-details">
        <h2>{pizza.name}</h2>
        <img src={pizza.img} alt={pizza.name} />
        <p>{pizza.desc}</p>
        <ul>
          {pizza.ingredients.map(function (ingredient, index) {
            return <li key={index}>{ingredient}</li>;
          })}
        </ul>
        <p className="price">Precio: ${pizza.price.toLocaleString()}</p>
        <button
          className="btn-add-cart"
          onClick={function () {
            addToCart(pizza);
          }}
        >
          Añadir al carrito 🛒
        </button>
        <br />
        <Link to="/">
          <button className="btn-back"><span>⬅</span>Regresar al menú</button>
        </Link>
      </div>
    </div>
  );
}

export default Pizza;
