import React, { Children } from "react";
import Footer from "../componente/Footer";
import NavBar from "../componente/NavBar";
import CartContext, { useCartContext } from "../componente/CartContext";
import CartItem from '../componente/CartItem';

function Cart() {
  const { clearCart } = useCartContext();

  return (
    <CartContext.Consumer>
      {({carrito: items}) => (
        <div>
          <NavBar imagen="LogoReact" />
          {items.length ?(
            items.map((element)=>(
                <div>
                <CartItem 
                id= {element.id}
                title = {element.title}
                price = {element.price}
                cantidad = {element.cantidad}
                />
              </div>
            ))
          ): (<h3> Compra raton</h3>)}
          
          <button onClick={clearCart}> Vaciar Carrito</button>
        </div>
      )}
    </CartContext.Consumer>
  );
}

export default Cart;
