import React from "react";
import '../estilos/Item.css'
import ItemCount from './ItemCount';



function Item ({id, titulo, descripcion, precio, imagen, stock}) {
  
    return (
        <div className='item'>
            <h2 className='item-titulo'>{titulo}</h2>
            <p>{descripcion}</p>
            <p className='item-precio'>{precio}</p>
            <p> {stock} </p>
            <img src={imagen} alt= {titulo}/>
            <ItemCount/>
        </div>
    )
};

export default Item;