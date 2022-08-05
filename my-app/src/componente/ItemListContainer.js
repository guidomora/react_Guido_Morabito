import React, { useState, useEffect } from "react";
import "../estilos/ItemListContainer.css";
import ItemList from "./ItemList";
import { getProductos } from "../hooks/FireBase";

function ItemListContainer() {
  const [carga, setCarga] = useState(true);
  const [productos, setProductos] = useState([]);


  useEffect(() => {
    getProductos(productos)
      .then((snapshot) => {
        setProductos(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((err) => {
        console.log(err);
        alert("error ");
      });
  }, []);

  

  return (
    <div>
        <ItemList Items={productos} />
    </div>
  );
}

export default ItemListContainer;
