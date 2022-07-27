import React from "react";
import { useCartContext } from "./CartContext";
import '../estilos/CartItem.css'

const CartItem = ({ id, title, price, cantidad, image }) => {
  const { removeItem } = useCartContext();

  const borrar = () => {
    removeItem(id);
  };

  return (
    <div className='carrito-contenedor'>
      <img src={image} className='carrito-img' alt={title}/>
      <h3 className='carrito-titulo'>{title}</h3>
      <p className='carrito-precio'>$ {price}</p>
      <p className='carrito-cantidad'>cantidad: {cantidad}</p>
      <button onClick={borrar} className=' btn btn-primary'>Eliminar</button>
    </div>
  );
};

export default CartItem;