import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="pizza-list">
        <CardPizza
          name="Pizza Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="/pizza-napolitana.jpeg"
        />
        <CardPizza
          name="Pizza Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="/pizza-española.png"
        />
        <CardPizza
          name="Pizza Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img="/pizza-pepperoni.png"
        />
      </div>
    </div>
  );
};

export default Home;
