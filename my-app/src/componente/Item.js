import React from "react";
import { Link } from "react-router-dom";
import "../estilos/Item.css";

function Item({ id, titulo, precio, imagen }) {
  return (
    <Link to={"/items/" + id} className="superlink">
      <div className="item">
        <h2 className="item-titulo" id={id}>
          {titulo}
        </h2>
        <img className="item-imagen" src={imagen} alt={titulo} />
        <p className="item-precio">$ {precio}</p>
        <span>
          <Link to={"/items/" + id} className="btn item-boton">
            {" "}
            Detalle del producto{" "}
          </Link>
        </span>
      </div>
    </Link>
  );
}

export default Item;
