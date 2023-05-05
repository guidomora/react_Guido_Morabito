import React from "react";
import "../estilos/Carousel.css";

const NuestrasFlore = () => {
  return (
    <div className="generalContainer">
      <h1 className="titulo">Nuestras Florerias</h1>
      <div className="containerImgs">
        <div>
          <img
            src={require(`../multimedia2/Las Camelias.png`)}
            className="imgs"
          />
        </div>
        <div>
          <img
            src={require(`../multimedia2/buenos aires flores.png`)}
            className="imgs"
          />
        </div>
        <div>
          <img src={require(`../multimedia2/mora..png`)} className="imgs" />
        </div>
      </div>
    </div>
  );
};

export default NuestrasFlore;
