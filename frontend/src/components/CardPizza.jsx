import PropTypes from "prop-types";
import "../App.css";

const CardPizza = ({ name, price, ingredients, img, desc }) => {
  return (
    <div className="card">
      <img src={img} alt={name} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-desc">{desc}</p>
        <ul className="card-ingredients">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="price">Precio: ${price.toLocaleString()}</p>
        <button className="btn btn-add">Añadir 🛒</button>
      </div>
    </div>
  );
};

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default CardPizza;
