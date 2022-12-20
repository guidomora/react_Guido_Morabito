import React from "react";
import { Link } from "react-router-dom";
import '../estilos/Item.css'


function Item ({id, titulo, precio, imagen}) {
  

    return (
        <div className='item'>
            <h2 className='item-titulo' id={id}>{titulo}</h2>
            <img className='item-imagen' src={imagen} alt= {titulo}/>
            <p className='item-precio'>$ {precio}</p>
            <span>
                <Link to={"/items/" + id} className='btn btn-primary item-boton'> Detalle del producto </Link>
            </span>
        </div>
    )
};

export default Item;