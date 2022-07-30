import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";


const Categorias = ()=>{
    const { categoryId } = useParams();
    const [resultados, setResultados] = useState([]);
    const [carga, setCarga] = useState(true);
    //const filtrado = productos.filter((productos) => productos.tipo === "Caja");
  
    useEffect(() => {
      {
        fetch("../productos/productos.json" + categoryId.id)
          .then(function (response) {
            return response.json;
          })
          .then(function (cajas) {
            setResultados(setTimeout(setCarga, 2000, false));
          });
      }
    }, [categoryId.id]);
  
    return (
      <div>
        <div>
          <NavBar imagen="LogoReact" />
        </div>
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
              <Cajas
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
        <Footer />
      </div>
    );

};

export default Categorias;