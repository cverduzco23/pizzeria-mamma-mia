import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/cart.css";
import { Link , useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Cart() {
  const { cart, total, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const { token, logOut } = useContext(UserContext);
  const navigate = useNavigate();

  function navigateToLogin() {
    navigate("/login");
  }

  let contentCart;

  if (cart.length === 0) {
    contentCart = (
      <div>
        <p>El carrito está vacío</p>
        <Link to="/">
          <button className="btn-back">
            <span>⬅</span>Regresar al menú
          </button>
        </Link>
      </div>
    );
  } else {
    contentCart = (
      <div className="cart-items">
        {cart.map(function (pizza) {
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
        })}
        <h3 className="cart-total">Total: ${total}</h3>
        {token ? <button className="btn-pay">Pagar</button> : null}
        {token ? null : <button className="btn-login" onClick={navigateToLogin}>Inicia sesión para continuar</button>}
      </div>
    );
  }

  return (
    <div className="cart-all-container">
      <div className="cart-container">
        <h2>Carrito de Compras</h2>
        {contentCart}
      </div>
    </div>
  );
}

export default Cart;
