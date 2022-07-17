import React, { useEffect, useState } from "react";
import Cajas from "../componente/Cajas";
import NavBar from "../componente/NavBar";
//import CajasJ from "../productos/CajasJ.json";
import productos from '../productos/productos.json'


function CajasConFlores() {
    const [resultados, setResultados] = useState([]);
    const [carga, setCarga] = useState(true);

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
            ) : ( (productos.filter(productos => productos.tipo == 'Caja')(
                <Cajas />
            ))
        )}
            </div>
        </div>
    )  
};

export default CajasConFlores;