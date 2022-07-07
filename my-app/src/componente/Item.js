import React from "react";
import '../estilos/Item.css'
import ItemCount from './ItemCount';


function Item ({id, titulo, descripcion, precio, imagen}) {
  
    return (
        <div className='item'>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <p>{precio}</p>
            <img src={imagen} alt= {titulo}/>
            <ItemCount/>
        </div>
    )
};

export default Item;