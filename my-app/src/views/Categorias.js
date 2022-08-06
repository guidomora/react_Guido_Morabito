import React, { useState, useEffect } from "react";
import ItemList from "../componente/ItemList";
import { useParams } from "react-router-dom";
import { getProductos, getItemsFiltrados } from "../Firebase/FireBase";

const Categorias = () => {
  let { nombreCategoria } = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (nombreCategoria === undefined
      ? getProductos()
      : getItemsFiltrados(nombreCategoria)
    ).then((snapshot) => {
      setProducts(
        snapshot.docs.map((document) => ({
          ...document.data(),
        }))
      );
      setTimeout(setLoading, 2000, false);
    });
  }, [nombreCategoria]);

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <h2 className="carga"> Cargando</h2>
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : (
        <ItemList Items={products} />
      )}
    </div>
  );
};

export default Categorias;
