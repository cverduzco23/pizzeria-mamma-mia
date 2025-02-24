import { useState } from "react";
import { pizzaCart } from "../pizzas";
import "../App.css";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .filter((pizza) => pizza.id !== id || pizza.count > 1)
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
    );
  };

  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0);

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className="cart-items">
          {cart.map((pizza) => (
            <div key={pizza.id} className="cart-item">
              <img src={pizza.img} alt={pizza.name} className="cart-img" />
              <div className="cart-details">
                <h4>{pizza.name}</h4>
                <p>Precio: ${pizza.price.toLocaleString()}</p>
                <p>Cantidad: {pizza.count}</p>
                <div className="cart-buttons">
                  <button onClick={() => increaseQuantity(pizza.id)}>➕</button>
                  <button onClick={() => decreaseQuantity(pizza.id)}>➖</button>
                </div>
              </div>
            </div>
          ))}
          <h3 className="cart-total">Total: ${total.toLocaleString()}</h3>
          <button className="btn-pay">Pagar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
