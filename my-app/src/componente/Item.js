import React from "react";
import '../estilos/Item.css'
import ItemCount from './ItemCount';



function Item ({id, titulo, descripcion, precio, imagen, stock, enlace}) {
  
    return (
        <div className='item'>
            <h2 className='item-titulo'>{titulo}</h2>
            <p>{descripcion}</p>
            <p className='item-precio'>{precio}</p>
            <p> {stock} </p>
            <img className='item-imagen' src={imagen} alt= {titulo}/>
            <button type='button' className='btn btn-primary item-boton'>
                <a href={enlace} className="botones-ruta"> Detalle del producto </a>    
            </button>
            <ItemCount/>
        </div>
    )
};

export default Item;