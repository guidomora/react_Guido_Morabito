import React, { useContext } from "react";
import { useCartContext } from "./CartContext";

const CartItem = ({ id, title, price, cantidad }) => {
  const { removeItem } = useCartContext();

  const borrar = () => {
    removeItem(id);
  };

  return (
    <div>
      <img src="a" />
      <h3>{title}</h3>
      <p>$ {price}</p>
      <p>cantidad: {cantidad}</p>
      <button onClick={borrar}>Eliminar</button>
    </div>
  );
};

export default CartItem;