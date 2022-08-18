import React from "react";
import { createContext, useState, useContext } from "react";
import { crearOrdenContext } from "../Firebase/FireBase";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [carritoId, setCarritoId] = useState();

  const clearCart = () => {
    setItems([]);
  };

  const estaEnCarrito = (id) => {
    if (items.find((i) => i.id == id)) {
      return true;
    } else {
      return false;
    }
  };

  const removeItem = (id) => {
    const borrarItem = items.filter((item) => item.id !== id);
    setItems(borrarItem);
  };

  const addItem = ({ id, titulo, precio, cantidad, imagen }) => {
    if (!estaEnCarrito(id)) {
      const agregarCarrito = items.concat({
        id,
        titulo,
        precio,
        cantidad,
        imagen,
      });
      setItems(agregarCarrito);
    } else {
      const index = items.findIndex((x) => x.id === id);
      console.log(carritoId);
      const cart_ = items.slice();
      cart_[index].cantidad = cart_[index].cantidad + cantidad;
      setItems(cart_);
    }
  };

  const contadorCarrito = () => {
    if (items.length === 1) {
      return items[0].cantidad;
    }
    {
      const _items = items.map((item) => item.cantidad).reduce((a, b) => a + b);
      return _items;
    }
  };
  const precioFinal = () => {
    if (items.length === 1) {
      return items[0].precio * items[0].cantidad;
    }
    {
      const cant = items.map((item) => item.cantidad);
      const precios = items.map((item) => item.precio);
      const _items = cant
        .map((i, index) => cant[index] * precios[index])
        .reduce((a, b) => a + b);
      return _items;
    }
  };

  const cartConfirm = (nombre,mail,telefono) => {
    console.log(nombre,mail,telefono)
    let totalAmount=0
   const orden ={  buyer : {
    nombre: nombre,
    telefono: telefono,
    mail: mail,
   },
    
    productosCarrito:items.map(e => ({
      id: e.id,
      titulo: e.titulo,
      precio: e.precio,
      cantidad: e.cantidad
    })),
    
    total: items.map(e=>(e.cantidad*e.precio)).reduce((a,b) => a+b),
    date: new Date()
    
    }    


    const idCarrito = crearOrdenContext(orden);
    setCarritoId(idCarrito);
    console.log(idCarrito);
    return idCarrito;
  };



  return (
    <CartContext.Provider
      value={{
        carrito: items,
        addItem,
        removeItem,
        clearCart,
        estaEnCarrito,
        contadorCarrito,
        precioFinal,
        cartConfirm,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const CartProvider = useContext(CartContext);
  return CartProvider;
};

export default CartContext;
