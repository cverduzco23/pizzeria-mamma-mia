import { useState, useEffect } from "react";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  async function fetchPizzas() {
    const response = await fetch("http://localhost:5000/api/pizzas");
    const data = await response.json();
    setPizzas(data);
  }

  useEffect(() => {
    fetchPizzas();
  }, []);

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
}

export default Home;

