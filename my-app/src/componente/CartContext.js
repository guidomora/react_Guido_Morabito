import { createContext, useState } from "react";
import Item from "./Item";

export const CartContext = createContext();

export const CartProvider = ({children, defaultValue}) => {
    
    const [carrito, setCarrito] = useState([]);

    const estaEnCarrito = (productoId) => {
        const existe = carrito.find(element => element.id === productoId)
        return existe
    };

    const sumaItems = carrito.map(products => products.cantidad).reduce((anterior, actual) => anterior + actual, 0)
    const sumaPrecio = carrito.map(products => products.price * products.cantidad).reduce((anterior, actual) => anterior + actual, 0)

    const addProducto = (product) => {
        const existe = estaEnCarrito(product.id)
        if (!existe) {
            setCarrito([...carrito, product])
        } else {
            const index = carrito.findIndex(x => x.id === product.id)
            const carrito1 = carrito.slice()
            carrito1[index].quantity = carrito1[index].quantity+ product.quantity
            setCarrito(carrito1)
            alert("El producto ya está agregado en el Cart. Se suman las cantidades")
        };
    }

    const borrarProducto = (id) => {
        const items1 = carrito.filter(element => element.id !== id);
        setCarrito(items1);
    };

    const borrarTodo = () => {
        setCarrito([])
    };

    const data = {
        carrito,
        addProducto,
        estaEnCarrito,
        sumaItems,
        sumaPrecio,
        borrarProducto,
        borrarTodo
    };

    return <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
};