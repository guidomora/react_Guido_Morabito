import React, { useState, useEffect } from "react";
import "../estilos/ItemListContainer.css";
import ItemList from "./ItemList";
//import productos from "../productos/productos.json";
import { useParams } from "react-router-dom";
import {getProductos} from '../hooks/FireBase';

function ItemListContainer() {
  const [carga, setCarga] = useState(true);
  const [productos, setProductos] = useState([]);
  console.log("categoriaId:", categoriaId);

  const {categoriaId} = useParams()

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

  useEffect (() => {
    getProductos(categoriaId)
    .then((snapshot) => {
      setProductos(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    })
    .catch((err) => {
      console.log(err);
      alert("An error occurred while fetching products");
    });
}, [categoriaId]);
    //     const promesa = new Promise((resolve, reject) => {
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
      {carga ? (
        <div className="spinner">
          <h2 className="carga"> Cargando</h2>
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : (
        <>
          <ItemList Items={""} />
        </>
      )}
    </div>
  );
}

export default ItemListContainer;
