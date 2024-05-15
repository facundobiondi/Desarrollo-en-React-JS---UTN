import React from "react";
import { useContext } from "react";
import { getDerivedCart } from "../utils/getDerivedCart";
import { productsContext } from "../context/ProductsContext";
import Header from "./Header";

function Cart() {
  const { cart, removeFromCart } = useContext(productsContext);
  const derivedCart = getDerivedCart(cart);

  return (
    <>
      <Header />
      <h2>Carrito de compras</h2>
      <p> Haz click en el item que quieras eliminar </p>
      <div>
        {derivedCart.map((item) => (
          <button onClick={() => removeFromCart(item.id)}>
            Item: {item.name} - Cant: {item.quantity} - Total:{item.totalPrice}
          </button>
        ))}
      </div>
    </>
  );
}

export default Cart;
