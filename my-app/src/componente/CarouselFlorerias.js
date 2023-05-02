import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import FlechaDerecha from "./FlechaDerecha";
import "../estilos/Carousel.css";
import FlechaIzquierda from "./FlechaIzquierda";

const CarouselFlorerias = () => {
  const win = window.innerWidth;
  let cards = 3;

  if (win < 500) {
    cards = 1;
  } else if (win < 900 && win > 501) {
    cards = 3;
  } else if (win < 1100 && win > 901) {
    cards = 4;
  } else if (win < 1300 && win > 1101) {
    cards = 5;
  }

  return (
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
          <h3>floreria las violetas</h3>
        </div>
        <div>
          <h3>floreria las violetas</h3>
        </div>
        <div>
          <h3>floreria las violetas</h3>
        </div>
        <div>
          <h3>floreria las violetas</h3>
        </div>
        <div>
          <h3>floreria las violetas</h3>
        </div>
        <div>
          <h3>floreria las violetas</h3>
        </div>
        <div>
          <h3>floreria las violetas</h3>
        </div>
        <div>
          <h3>floreria las violetas</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselFlorerias;
