import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../estilos/ItemDetail.css";
import ItemCount from "../componente/ItemCount";
import { useCartContext } from "../componente/CartContext";
import { getDetail } from "../Firebase/FireBase";
import Toastify from 'toastify-js'


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
    Toastify({
      text: `Agregaste ${c} unidades`,
      duration: 1000,
      newWindow: true,
      close: false,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
    addItem({
      id: params.id,
      titulo: resultados.titulo,
      precio: resultados.precio,
      imagen: resultados.imagen,
      cantidad: c,
    });
    setUnidadProducto(true);
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
