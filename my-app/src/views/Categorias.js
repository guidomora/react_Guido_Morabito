import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../componente/Item";


const Categorias = () => {
  const [productos, setProductos] = useState([]);
  const [carga, setCarga] = useState(true);
  const [err, setErr] = useState("");


  useEffect(() => {
    fetch('../productos/categorias.json/' + params.id)
      .then((res) => res.json)
      .then((json) => {
        setData(json);
        setTimeout(() => {
          setlistLoading(false);
        }, 2000);
      })
      .catch(() => setErr("No hay Categorias Cargadas"));
  }, [params.id]);
  if (listLoading) {
    return <span >CARGANDO...</span>;

  }



};

export default Categorias;