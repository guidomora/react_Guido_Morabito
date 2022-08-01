import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../estilos/ItemDetail.css";
import NavBar from "../componente/NavBar";
import ItemCount from "../componente/ItemCount";
import { useCartContext } from "../componente/CartContext";
import Footer from '../componente/Footer';

function Detail() {
  let params = useParams();
  const [resultados, setResultados] = useState();
  const [err, setErr] = useState("");
  const [unidadProducto, setUnidadProducto] = useState(true);
  const { addItem } = useCartContext();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + params.id)
      .then((res) => res.json())
      .then((resultados) => setResultados(resultados))
      .catch(() => setErr(err));
  }, [params.id]);

  const onAdd = (c) => {
    alert(`Agregaste ${c} unidades`);
    addItem({
      id: resultados.id,
      title: resultados.title,
      price: resultados.price,
      image: resultados.image,
      cantidad: c,
    });
    setUnidadProducto(false);
  };

  return (
    <div>
      <div>
        <NavBar imagen="LogoReact" />
      </div>
      {resultados && (
        <div>
          <h2 className="item-titulo1">{resultados.titulo}</h2>
          <div className="detail-container1">
            <img
              className="item-imagen1"
              src={resultados.image}
              alt={resultados.title}
            />
            <div className="item-aside1">
              <p className="item-descripcion1">{resultados.description}</p>
              <p className="item-precio1">$ {resultados.price}</p>
              <p className="item-stock1"> {"Stock= 20"} </p>
              {unidadProducto && (
                <ItemCount stock={20} onAdd={onAdd} />
              )}
              <Link
                to="/Cart/5"
                className="boton-compra1 btn btn-primary item-boton1"
              >
                {" "}
                Ir al Carrito{" "}
              </Link>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}


// snp.docs.map((document) => ({
//   id: document.id,
//   ...document.data(),
// }));

// fetch("https://fakestoreapi.com/products/" + params.id)
//       .then((res) => res.json())
//       .then((resultados) => setResultados(resultados))
//       .catch(() => setErr(err));
//   }, [params.id]);

export default Detail;
