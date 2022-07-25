import { createContext } from "react";

export const CartContext = createContext();
const carrito = []; 

export const CartProvider = ({children, defaultValue, addItem}) => {
    return (
        <CartContext.Provider value={"hola"}>
            {children}
            
        </CartContext.Provider>
    )
}