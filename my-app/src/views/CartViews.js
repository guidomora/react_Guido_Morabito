import React from "react";
import Footer from "../componente/Footer";
import NavBar from "../componente/NavBar";
import CartContext, { useCartContext } from "../componente/CartContext";
import CartItem from "../componente/CartItem";
import '../estilos/CartItem.css';

function Cart() {
  const { clearCart } = useCartContext();

  return (
    <CartContext.Consumer>
      {({ carrito: items }) => (
        <div>
          <NavBar imagen="LogoReact" />
          {items.length ? (
            items.map((element) => (
              <div className='contenedor-gral'>
                <CartItem
                  id={element.id}
                  title={element.title}
                  price={element.price}
                  cantidad={element.cantidad}
                  image={element.image}
                />
              </div>
            ))
          ) : (
            <h3> Carrito vacio</h3>
          )}
          <button onClick={clearCart} className="btn btn-primary">
            Vaciar Carrito
          </button>
        </div>
      )}
    </CartContext.Consumer>
  );
}

export default Cart;
