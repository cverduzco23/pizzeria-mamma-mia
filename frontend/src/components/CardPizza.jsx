import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/cardpizza.css";
import { Link } from "react-router-dom";

function CardPizza(props) {
  const { addToCart } = useContext(CartContext);

  const ingredientsList = props.ingredients.map(function (ingredient, index) {
    return <li key={index}>{ingredient}</li>;
  });

  return (
    <div className="card">
      <img src={props.img} alt={props.name} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <ul className="card-ingredients">{ingredientsList}</ul>
        <Link to="/pizza">
          <button className="btn-details">Más información</button>
        </Link>
        <p className="price">Precio: ${props.price.toLocaleString()}</p>
        <button className="btn-add" onClick={function () { addToCart(props); }}>
          Añadir al carrito 🛒
        </button>
      </div>
    </div>
  );
}

export default CardPizza;

