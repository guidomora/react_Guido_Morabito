import React, { useState, useEffect } from "react";
import "../estilos/ItemListContainer.css";
import ItemList from "./ItemList";
import { getProductos } from "../hooks/FireBase";

function ItemListContainer() {
  const [carga, setCarga] = useState(true);
  const [productos, setProductos] = useState([]);
  //console.log("categoriaId:", categoriaId);
  // console.log(productos)

  // useEffect(() => {
  //   const promesa = new Promise((resolve, reject) => {
  //     resolve(productos);
  //     console.log(productos)
  //   });
  //   promesa
  //     .then(function resuelto() {
  //       setTimeout(setCarga, 2000, false);
  //     })
  //     .catch(function rechazado() {
  //       console.log("no carga");
  //     });
  // }, []);

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

  

  //   const promesa = new Promise((resolve, reject) => {
  //   resolve();
  //   console.log()
  // });
  // promesa
  //   .then(function resuelto() {
  //     setTimeout(setCarga, 2000, false);
  //   })
  //   .catch(function rechazado() {
  //     console.log("no carga");
  //   });

  return (
    <div>
        <ItemList Items={productos} />
    </div>
  );
}

export default ItemListContainer;
