import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children, defaultValue}) => {
    return (
        <CartContext.Provider value={"hola"}>
            {children}
        </CartContext.Provider>
    )
}