import React from "react";
import CartContext, { useCartContext } from "../componente/CartContext";
import CartItem from "../componente/CartItem";
import "../estilos/CartItem.css";
import "../Firebase/FireBase";
import { Link } from "react-router-dom";
import {useState} from 'react'



function Cart() {
  const { clearCart, precioFinal, crearOrdenContext } = useCartContext();
  const [datosUsuario, seDatosUsuario] = useState({name: '', phone: '', mail: ''});

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
          <div className="container">
            <div className="contenedor-orden">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Nombre y apellido
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Nombre y apellido"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  defaultValue={datosUsuario.nombre}
                />
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mail"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  defaultValue={datosUsuario.mail}
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
                  defaultValue={datosUsuario.telefono}
                />
              </div>
            </div>
          </div>
          {items.length ? (
            <button className="btn" onClick={crearOrdenContext}>
              <Link to="/CheckOut" className="btn btn-primary vaciar-checkOut">
                {" "}
                Ir al checkout
              </Link>
            </button>
          ) : (
            <p></p>
          )}
        </div>
      )}
    </CartContext.Consumer>
  );
}

export default Cart;
