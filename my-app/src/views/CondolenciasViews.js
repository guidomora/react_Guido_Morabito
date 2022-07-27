import React, { useEffect, useState } from "react";
import Condolencias from "../componente/Condolencias";
import NavBar from "../componente/NavBar";
import productos from "../productos/productos.json";
import "../estilos/ItemList.css";

function CondolenciasViews() {
  const [resultados, setResultados] = useState([]);
  const [carga, setCarga] = useState(true);
  const filtrado = productos.filter(
    (productos) => productos.tipo === "Condolencias"
  );

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
      <div>
        <NavBar imagen="LogoReact" />
      </div>
      <div className="ItemList">
        {carga ? (
          <h2 className="carga"> Cargando productos... </h2>
        ) : (
          filtrado.map(({ id, titulo, descripcion, precio, imagen, stock }) => (
            <Condolencias
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

export default CondolenciasViews;
