import React, {useState, useEffect} from "react";
import ItemDetail from './ItemDetail';
import detalle from '../productos/detalle.json'
import '../estilos/ItemDetailContainer.css'


function ItemDetailContainer () {
    const [resultados, setResultados] = useState([])
    const [carga, setCarga] = useState(true)
    useEffect(() =>{
        {fetch('../productos/detalle.json')
        .then(function(response){
            return response.json
        })
        .then(function(detalles){
            setResultados(setTimeout(setCarga, 2000, false))
        })
        }
    }, [])

    return (
    <div className='contenedor'> {carga ? (<h2> cargando detalle de productos... </h2>)
            :( 
                detalle.map(({id, descripcion, imagen})=>(
                    <ItemDetail
                    key={id}
                    descripcion={descripcion}
                    imagen={imagen} 
                    />
                ))
            )}
    </div>
    )   
};


export default ItemDetailContainer;

