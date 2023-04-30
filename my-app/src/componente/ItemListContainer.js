import React, { useState, useEffect } from "react";
import "../estilos/ItemListContainer.css";
import ItemList from "./ItemList";
import { getProductos } from "../Firebase/FireBase";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductos(productos)
      .then((snapshot) => {
        setProductos(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
        setTimeout(setLoading, 1000, false);
      })
      .catch((err) => {
        console.log(err);
        alert("error ");
      });
  }, []);

  return (
    <div>
      <div className="descripcion">
            <h1 className="title">Fundada en 1920.</h1>
            <p className="texto">
              Especialistas en condolencias: Coronas, Palmas y Bouquets. Trabajo
              artesanal y calidad premium.
            </p>
          </div>
      {loading ? (
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
