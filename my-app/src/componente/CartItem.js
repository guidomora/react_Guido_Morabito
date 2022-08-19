import React from "react";
import { useCartContext } from "./CartContext";
import '../estilos/CartItem.css'
import '../Firebase/FireBase';
import Toastify from 'toastify-js'

const CartItem = ({ id, titulo, precio, cantidad, imagen }) => {
  const { removeItem } = useCartContext();

  const borrar = () => {
    removeItem(id);
    Toastify({
      text: "Eliminado del carrito",
      duration: 1000,
      newWindow: true,
      close: false,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #ff3300, #ff3300)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
  };

  return (
    <div className='carrito-contenedor' key={id}>
      <img src={imagen} className='carrito-img' alt={titulo}/>
      <h3 className='carrito-titulo'>{titulo}</h3>
      <p className='carrito-precio'>$ {precio}</p>
      <p className='carrito-cantidad'>cantidad: {cantidad}</p>
      <button onClick={borrar} className=' btn btn-primary'>Eliminar</button>
    </div>
  );
};

export default CartItem;