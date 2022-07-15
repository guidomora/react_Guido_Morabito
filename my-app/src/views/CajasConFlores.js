import React, { useEffect, useState } from "react";
import NavBar from "../componente/NavBar";
import Cajas from "../componente/Cajas";
import productos from '../productos/productos.json'


function CajasConFlores() {
    const [resultados, setResultados] = useState([]);
    const [carga, setCarga] = useState(true);

    useEffect(() => {
        {fetch('../productos/productos.json')
        .then(function(response){
            return response.json
        })
        .then(function(productos){
            setResultados(setTimeout(setCarga, 2000, false))
        })}
    }, [])


    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className='contenedor'> {carga ? (<h2> cargando detalle de productos... </h2>)
                :( 
                    productos.filter((productos => productos.tipo === "Caja")(
                        <Cajas/>
                    ))
                )}
            </div>
        </div>    
    )  
};

export default CajasConFlores;