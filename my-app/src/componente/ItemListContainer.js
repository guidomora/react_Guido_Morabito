import React, { useState, useEffect } from "react";
import "../estilos/ItemListContainer.css";
import ItemList from "./ItemList";
import productos from "../productos/productos.json";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [carga, setCarga] = useState(true);

  const {categoryId} = useParams()

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      resolve(productos);
      console.log(productos)
    });
    promesa
      .then(function resuelto() {
        setTimeout(setCarga, 2000, false);
      })
      .catch(function rechazado() {
        console.log("no carga");
      });
  }, []);

  return (
    <div>
      {carga ? (
        <div className="spinner">
          <h2 className="carga"> Cargando</h2>
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : (
        <>
          <ItemList Items={productos} />
        </>
      )}
    </div>
  );
}

export default ItemListContainer;
