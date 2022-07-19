import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import '../estilos/Item.css'
import NavBar from "../componente/NavBar";




function Detail () {
    let params = useParams();
    const [resultados, setResultados] = useState()
    const [err, setErr] = useState("")
    useEffect(() =>{
        {fetch("../productos/detalle.json" + params.id)
        .then((res) => res.json())
        .then((json) => {
            setResultados(json)
        })
        .catch((err) => {
            setErr("Hubo un error")
        })
        }
    }, [params.id])

    return (
        <div>
            <div>
                <NavBar />
            </div>
             {resultados && (
                <div>
                <h2 className='item-titulo'>{resultados.titulo}</h2>
                <img className='item-imagen' src={resultados.imagen} alt= {resultados.titulo}/>
                <p className='item-descripcion'>{resultados.descripcion}</p>
                <p className='item-precio'>$ {resultados.precio}</p>
                <p className='item-stock'> {resultados.stock} </p>
            </div>
        )}
        </div>
       
    )

};

export default Detail;