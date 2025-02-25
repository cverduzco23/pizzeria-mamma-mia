import { useState, useEffect } from "react";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import "../styles/home.css";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  async function fetchPizzas() {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error al obtener las pizzas:", error);
    }
  }

  useEffect(function () {
    fetchPizzas();
  }, []);

  const listaDePizzas = pizzas.map(function (pizza) {
    return <CardPizza key={pizza.id} {...pizza} />
  })

  return (
    <div className="home-container">
      <Header />
      <div className="pizza-list">
        {listaDePizzas}
      </div>
    </div>
  );
}

export default Home;


