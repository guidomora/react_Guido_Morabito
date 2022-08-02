import React, { useEffect, useState } from "react";
import RamosDeFlores from "../componente/RamosDeFlores";
import NavBar from "../componente/NavBar";
import productos from "../productos/productos.json";
import "../estilos/ItemList.css";
import Footer from "../componente/Footer";

function CajasConFloresViews() {
  const [resultados, setResultados] = useState([]);
  const [carga, setCarga] = useState(true);
  const filtrado = productos.filter((productos) => productos.tipo === "Ramo");

  useEffect(() => {
    {
      fetch("../productos/productos.json")
        .then(function (response) {
          return response.json;
        })
        .then(function (cajas) {
          setResultados(setTimeout(setCarga, 2000, false));
        });
    }
  }, []);

  return (
    <div>
      <div className="ItemList">
        {carga ? (
          <div className="spinner">
            <h2 className="carga"> Cargando</h2>
            <div className="spinner-border" role="status">
              <span className="visually-hidden"></span>
            </div>
          </div>
        ) : (
          filtrado.map(({ id, titulo, descripcion, precio, imagen, stock }) => (
            <RamosDeFlores
              key={id}
              titulo={titulo}
              descripcion={descripcion}
              imagen={imagen}
              precio={precio}
              stock={stock}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default CajasConFloresViews;
