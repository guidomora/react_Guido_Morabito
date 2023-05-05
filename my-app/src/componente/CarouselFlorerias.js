import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import FlechaDerecha from "./FlechaDerecha";
import "../estilos/Carousel.css";
import FlechaIzquierda from "./FlechaIzquierda";

const CarouselFlorerias = () => {
  const win = window.innerWidth;
  let cards = 1;

  if (win > 500) {
    cards = 2;
  }

  return (
    <div>
      <div>
        <h1 className="titulo">Nuestras Florerias</h1>
      </div>
      <div className="carousel">
        <Carousel
          show={cards}
          slide={1}
          transition={0.5}
          swiping={true}
          rightArrow={<FlechaDerecha />}
          leftArrow={<FlechaIzquierda />}
        >
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
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselFlorerias;
