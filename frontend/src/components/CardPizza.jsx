function CardPizza(props) {

  const ingredientsList = props.ingredients.map(function (ingredient, index) {
    return <li key={index}>{ingredient}</li>;
  })

  return (
    <div className="card">
      <img src={props.img} alt={props.name} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <p className="card-desc">{props.desc}</p>
        <ul className="card-ingredients">
          {ingredientsList}
        </ul>
        <p className="price">Precio: ${props.price.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default CardPizza;

