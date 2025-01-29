import PropTypes from 'prop-types';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card">
      <img src={img} alt={name} className="card-img"/>
      <div className="card-body">
        <h3>{name}</h3>
        <p className="ingredients">
          <strong>Ingredientes:</strong> {ingredients.join(", ")}
        </p>
        <p className="price">Precio: ${price.toLocaleString()}</p>
        <div className="card-buttons">
          <button className="btn btn-view">Ver Más 👀</button>
          <button className="btn btn-add">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
};

export default CardPizza;



