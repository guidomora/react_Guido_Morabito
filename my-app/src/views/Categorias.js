import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProducts, getAllCategories } from "../hooks/FireBase";

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    getAllCategories()
      .then((snapshot) => {
        setCategorias(
          snapshot.docs.map((docu) => {
            return {
              id: docu.id,
              ...docu.data(),
            };
          })
        );
      })
      .catch(() => setErr("Ocurrio un error"));
  }, []);

  return <div>hola</div>;
};

export default Categorias;
