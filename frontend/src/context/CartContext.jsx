import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function increaseQuantity(id) {
    setCart(function (prevCart) {
      return prevCart.map(function (pizza) {
        if (pizza.id === id) {
          return { ...pizza, count: pizza.count + 1 };
        }
        return pizza;
      });
    });
  }

  function decreaseQuantity(id) {
    setCart(function (prevCart) {
      return prevCart
        .map(function (pizza) {
          if (pizza.id === id) {
            return { ...pizza, count: Math.max(pizza.count - 1, 0) };
          }
          return pizza;
        })
        .filter(function (pizza) {
          return pizza.count > 0;
        });
    });
  }

  function addToCart(pizza) {
    setCart(function (prevCart) {
      var exists = prevCart.find(function (item) {
        return item.id === pizza.id;
      });

      if (exists) {
        return prevCart.map(function (item) {
          if (item.id === pizza.id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
      }

      return [...prevCart, { ...pizza, count: 1 }];
    });
  }

  const total = cart
    .reduce(function (sum, pizza) {
      return sum + pizza.price * pizza.count;
    }, 0)
    .toLocaleString();

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
