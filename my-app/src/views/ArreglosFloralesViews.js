import React, { useEffect, useState } from "react";
import ArreglosFlorales from "../componente/ArreglosFlorales";
import NavBar from "../componente/NavBar";
import productos from '../productos/productos.json'
import '../estilos/ItemList.css';


function ArreglosFloralesViews() {
    const [resultados, setResultados] = useState([]);
    const [carga, setCarga] = useState(true);
    const filtrado = productos.filter(productos => productos.tipo === "Arreglo floral")

    useEffect(() => {
        {fetch('../productos/productos.json')
        .then(function(response){
            return response.json
        })
        .then(function(cajas){
            setResultados(setTimeout(setCarga, 2000, false))
        })}
    }, [])


    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className='ItemList'>
            {carga ? (
            <h2 className='carga'> Cargando productos... </h2>
            ) : ( filtrado.map(({id, titulo, descripcion, precio, imagen, stock})=>(
                <ArreglosFlorales
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
        </div>
    )  
};

export default ArreglosFloralesViews;