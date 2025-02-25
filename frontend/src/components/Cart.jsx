import { useState, useEffect } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  async function fetchPizzas() {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      const pizzas = data.map(function (pizza) {
        return { ...pizza, count: 1 };
      });
      setCart(pizzas);
    } catch (error) {
      console.error("Error al obtener las pizzas:", error);
    }
  }

  useEffect(function () {
    fetchPizzas();
  }, []);

  function increaseQuantity(id) {
    setCart(
      cart.map(function (pizza) {
        if (pizza.id === id) {
          return { ...pizza, count: pizza.count + 1 };
        }
        return pizza;
      })
    );
  }

  function decreaseQuantity(id) {
    setCart(
      cart
        .filter(function (pizza) {
          return !(pizza.id === id && pizza.count === 1);
        })
        .map(function (pizza) {
          if (pizza.id === id) {
            return { ...pizza, count: pizza.count - 1 };
          }
          return pizza;
        })
    );
  }

  const total = cart.reduce(function (sum, pizza) {
    return sum + pizza.price * pizza.count;
  }, 0);

  const pizzaList = cart.map(function (pizza) {
    let buttonDeleteDecrease;
    if (pizza.count === 1) {
      buttonDeleteDecrease = (
        <button
          onClick={function () {
            decreaseQuantity(pizza.id);
          }}
        >
          🗑 Eliminar
        </button>
      );
    } else {
      buttonDeleteDecrease = (
        <button
          onClick={function () {
            decreaseQuantity(pizza.id);
          }}
        >
          ➖
        </button>
      );
    }

    return (
      <div key={pizza.id} className="cart-item">
        <img src={pizza.img} alt={pizza.name} className="cart-img" />
        <div className="cart-details">
          <h4>{pizza.name}</h4>
          <p>Precio: ${pizza.price.toLocaleString()}</p>
          <p>Cantidad: {pizza.count}</p>
          <div className="cart-buttons">
            <button
              onClick={function () {
                increaseQuantity(pizza.id);
              }}
            >
              ➕
            </button>
            {buttonDeleteDecrease}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className="cart-items">
          {pizzaList}
          <h3 className="cart-total">Total: ${total.toLocaleString()}</h3>
          <button className="btn-pay">Pagar</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
