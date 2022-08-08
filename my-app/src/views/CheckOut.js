import React from "react";
import "../estilos/CheckOut.css";

function CheckOut() {

    

  return (
    <div className="container">
      <div className="contenedor-orden">
        <p>id de compra</p>
        <p> Producto</p>
        <p> Precio final</p>
      </div>
      <div className="contenedor-orden">
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
  );
}

export default CheckOut;
