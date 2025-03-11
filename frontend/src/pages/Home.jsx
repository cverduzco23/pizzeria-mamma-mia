import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import "../styles/home.css";

function Home() {
  const { pizzas } = useContext(PizzaContext);

  return (
    <div className="home-container">
      <Header />

      <div className="pizza-list">
        {pizzas.map(function (pizza) {
          return <CardPizza key={pizza.id} {...pizza} />;
        })}
      </div>
    </div>
  );
}

export default Home;
