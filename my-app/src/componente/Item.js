import React from "react";
import { Link } from "react-router-dom";
import '../estilos/Item.css'
import ItemCount from './ItemCount';




function Item ({id, titulo, descripcion, precio, imagen, stock}) {
  
    return (
        <div className='item'>
            <h2 className='item-titulo' id={id}>{titulo}</h2>
            <img className='item-imagen' src={imagen} alt= {titulo}/>
            <p className='item-descripcion'>{descripcion}</p>
            <p className='item-precio'>$ {precio}</p>
            <p className='item-stock'> {stock} </p>
            <button type='button' className='btn btn-primary item-boton'>
                <Link to={"productos/" + id}> Detalle del producto </Link>
            </button>
            <ItemCount/>
        </div>
    )
};

export default Item;