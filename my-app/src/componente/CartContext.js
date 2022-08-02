import React from "react";
import { createContext, useState, useContext } from "react";
import '../hooks/FireBase';

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

    return (<CartContext.Provider value={{
        carrito: items,
        addItem,
        removeItem,
        clearCart,
        estaEnCarrito
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