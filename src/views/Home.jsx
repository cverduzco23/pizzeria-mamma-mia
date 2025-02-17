import { pizzas } from "../pizzas";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";

const Home = () => {
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
