import React from "react";
import CartContext, { useCartContext } from "../componente/CartContext";
import CartItem from "../componente/CartItem";
import "../estilos/CartItem.css";
import "../hooks/FireBase";

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
                console.log(items)
              )
            ) : (
              <h3> Carrito vacio</h3>
            )}
          </div>
          <div>
            <p>${items.length ? "$" + precioFinal() : ""}</p>
          </div>
          <div className="vaciar-carrito">
            <button onClick={clearCart} className="btn btn-primary ">
              Vaciar Carrito
            </button>
          </div>
          <div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Nombre y apellido
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2">
                Mail
              </span>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon3">
                Telefono
              </span>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>
        </div>
      )}
    </CartContext.Consumer>
  );
}

export default Cart;
