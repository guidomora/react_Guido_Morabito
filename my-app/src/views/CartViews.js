import React from "react";
import CartContext, { useCartContext } from "../componente/CartContext";
import CartItem from "../componente/CartItem";
import "../estilos/CartItem.css";

function Cart() {
  const { clearCart } = useCartContext();

  return (
    <CartContext.Consumer>
      {({ carrito: items }) => (
        <div>
          <div className="contenedor-gral">
            {items.length ? (
              items.map((element) => (
                <div>
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
          </div>
          <div className='vaciar-carrito'>
            <button onClick={clearCart} className="btn btn-primary ">
              Vaciar Carrito
            </button>
          </div>
          {/* <p>Total: $</p> */}
        </div>
      )}
    </CartContext.Consumer>
  );
}

export default Cart;
