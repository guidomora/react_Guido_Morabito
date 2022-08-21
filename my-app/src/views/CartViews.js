import React from "react";
import CartContext, { useCartContext } from "../componente/CartContext";
import CartItem from "../componente/CartItem";
import "../estilos/CartItem.css";
import "../Firebase/FireBase";
import { Link } from "react-router-dom";

function Cart() {
  const { clearCart, precioFinal, confirmarOrden } = useCartContext();

  const generarCodigo = () => {
    const form = document.getElementById("datosUsuario");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const mail = document.getElementById("mail").value;
      const telefono = document.getElementById("telefono").value;
      const idUnico= confirmarOrden(nombre, telefono, mail);
    });
  };

  return (
    <CartContext.Consumer>
      {({ carrito: items }) => (
        <div>
          <div className="contenedor-gral" id="datosUsuario">
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
            <p className="carrito-pTotal">
              Total: {items.length ? "$" + precioFinal() : ""}
            </p>
          </div>
          <div className="vaciar-carrito">
            <button
              onClick={clearCart}
              className="btn btn-primary vaciar-checkOut"
            >
              Vaciar Carrito
            </button>
          </div>
          <div className="container" id="dataform">
            <div className="contenedor-orden">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Nombre y apellido
                </span>
                <input
                  type="text" id="nombre"
                  className="form-control"
                  placeholder=" Nombre y apellido"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div className="input-group mb-3">
                <input
                  type="email" id="mail"
                  className="form-control"
                  placeholder="Mail"
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
                  type="phone"
                  className="form-control"
                  id="telefono"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
          </div>
          <div className="btn-checkout">
            {items.length ? (
              <button type="submit" className="btn" onClick={generarCodigo}>
                <Link
                  to="/CheckOut"
                  className="btn btn-primary vaciar-checkOut"
                >
                  {" "}
                  Ir al checkout
                </Link>
              </button>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      )}
    </CartContext.Consumer>
  );
}

export default Cart;