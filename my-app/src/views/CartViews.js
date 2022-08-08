import React from "react";
import CartContext, { useCartContext } from "../componente/CartContext";
import CartItem from "../componente/CartItem";
import "../estilos/CartItem.css";
import "../Firebase/FireBase";
import {Link} from 'react-router-dom';

function Cart() {
  const { clearCart, precioFinal } = useCartContext();

  
  return (
    <CartContext.Consumer>
      {({ carrito: items }) => (
        <div>
          <div className="contenedor-gral">
            {items.length ? (
              items.map(
                (element) => (
                  <div>
                    <CartItem
                      id={element.id}
                      titulo={element.titulo}
                      precio={element.precio}
                      cantidad={element.cantidad}
                      imagen={element.imagen}
                    />
                  </div>
                ),
                console.log(items))
            ) : (
              <h3> Carrito vacio</h3>
            )}
          </div>
          <div>
            <p className="carrito-pTotal">{items.length ? "$" + precioFinal() : ""}</p>
          </div>
          <div className="vaciar-carrito">
            <button onClick={clearCart} className="btn btn-primary vaciar-checkOut">
              Vaciar Carrito
            </button>
            {items.length ? ( <button className="btn ">
              <Link to='/CheckOut'className="btn btn-primary vaciar-checkOut"> Ir al checkout</Link>
            </button>): (<p></p>)}
           
          </div>
        </div>
      )}
    </CartContext.Consumer>
  );
}

export default Cart;
