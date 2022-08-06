import React from "react";
import { createContext, useState, useContext } from "react";
import '../Firebase/FireBase';

 const CartContext = createContext({});

export const CartProvider = ({children}) => {

    const [items, setItems] = useState([]);

    const clearCart = () => {
        setItems([]);
    };
    
    const estaEnCarrito = (id) => {
        if (items.find(i => i.id == id)){
            return true 
        } else {
            return false
        }
    };


    const removeItem = (id) =>{
        const borrarItem = items.filter(item => item.id !== id)
        setItems(borrarItem)
    };

    const addItem = ({id, titulo, precio, cantidad, imagen}) => {
        if (! estaEnCarrito(id)) {
            const agregarCarrito = items.concat({id, titulo, precio, cantidad, imagen})
            setItems(agregarCarrito)
        } else {
            const index = items.findIndex(x => x.id === id)
            const cart_ = items.slice()
            cart_[index].cantidad = cart_[index].cantidad + cantidad
            setItems(cart_)
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
          const _items = cant.map((i,index) => cant[index] * precios[index]).reduce((a,b)=>a+b);      
          return _items;
        }
    };    

    return (<CartContext.Provider value={{
        carrito: items,
        addItem,
        removeItem,
        clearCart,
        estaEnCarrito,
        contadorCarrito,
        precioFinal,
    }}>
        {children}
    </CartContext.Provider>
    )
};

export const useCartContext = () =>{
    const CartProvider = useContext(CartContext)
    return CartProvider
};

export default CartContext;