import { useState, useEffect } from "react";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar las pizzas");
        }
        return response.json();
      })
      .then((data) => {
        setPizzas(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando pizzas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home-container">
      <Header />
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
};

export default Home;

