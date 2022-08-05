import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../estilos/ItemDetail.css";
import ItemCount from "../componente/ItemCount";
import { useCartContext } from "../componente/CartContext";
import { getDetail } from "../hooks/FireBase";

function Detail() {
  let params = useParams();
  const [resultados, setResultados] = useState([]);
  const [unidadProducto, setUnidadProducto] = useState();
  const { addItem } = useCartContext();



  useEffect(() => {
    getDetail(params.id)
      .then((resultado) => {
        setResultados(resultado);
        console.log(resultado);
      })
      .catch((error) => {
        console.log("error");
      });
  }, [params.id]);

  const onAdd = (c) => {
    alert(`Agregaste ${c} unidades`);
    addItem({
      id: params.id,
      titulo: resultados.titulo,
      precio: resultados.precio,
      imagen: resultados.imagen,
      cantidad: c,
    });
    setUnidadProducto(false);
  };

  return (
    <div>
      {resultados && (
        <div>
          <h2 className="item-titulo1">{resultados.titulo}</h2>
          <div className="detail-container1">
            <img
              className="item-imagen1"
              src={resultados.imagen}
              alt={resultados.titulo}
            />
            <div className="item-aside1">
              <p className="item-descripcion1">{resultados.descripcion}</p>
              <p className="item-precio1">$ {resultados.precio}</p>
              <p className="item-stock1"> {"Stock: " + resultados.stock} </p>
              <ItemCount stock={20} onAdd={onAdd}/>
              <Link
                to="/Cart/"
                className="boton-compra1 btn btn-primary item-boton1"
              >
                {" "}
                Ir al Carrito{" "}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
