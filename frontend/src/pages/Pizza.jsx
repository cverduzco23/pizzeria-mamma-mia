import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { CartContext } from "../context/CartContext";
import { Link, useParams } from "react-router-dom";
import "../styles/pizza.css";
import { useNavigate } from "react-router-dom";

function Pizza() {
  const { pizzas } = useContext(PizzaContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const navigate = useNavigate();

  if (pizzas.length === 0) {
    return (
      <div className="loadingContainer">
        <p className="loading">Cargando pizzas...</p>
      </div>
    );
  }

  const pizza = pizzas.find(function (pizza) {
    return pizza.id === id;
  });

  if (!pizza) {
    navigate("/*");
  }

  function NavigateToHome () {
    navigate("/");
  }

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
          <button className="btn-back" onClick={NavigateToHome}>
            <span>⬅</span>Regresar al menú
          </button>
      </div>
    </div>
  );
}

export default Pizza;
