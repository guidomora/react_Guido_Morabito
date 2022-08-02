import React from "react";
import { useCartContext } from "./CartContext";
import '../estilos/CartItem.css'
import '../hooks/FireBase';

const CartItem = ({ id, titulo, precio, cantidad, imagen }) => {
  const { removeItem } = useCartContext();

  const borrar = () => {
    removeItem(id);
  };

  return (
    <div className='carrito-contenedor'>
      <img src={imagen} className='carrito-img' alt={titulo}/>
      <h3 className='carrito-titulo'>{titulo}</h3>
      <p className='carrito-precio'>$ {precio}</p>
      <p className='carrito-cantidad'>cantidad: {cantidad}</p>
      <button onClick={borrar} className=' btn btn-primary'>Eliminar</button>
    </div>
  );
};

export default CartItem;