import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../pizza.css";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar la pizza");
        }
        return response.json();
      })
      .then((data) => {
        setPizza(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando pizza...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!pizza) return <p>Pizza no encontrada</p>;

  return (
    <div className="pizza-details">
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p className="price">Precio: ${pizza.price.toLocaleString()}</p>
      <Link to="/" className="btn-back">
        Volver al menú
      </Link>
    </div>
  );
};

export default Pizza;
