import React from "react";
import productos from '../productos/productos.json';

function Cajas ({id, titulo, descripcion, precio, imagen, stock}) {
    return (
        <div>
            <h2 className='item-titulo'>{titulo}</h2>
            <img className='item-imagen' src={imagen} alt= {titulo}/>
            <p className='item-descripcion'>{descripcion}</p>
            <p className='item-precio'>$ {precio}</p>
            <p className='item-stock'> {stock} </p>
            <button type='button' className='btn btn-primary item-boton'>
                Detalle del producto
            </button>
        </div>
    )

};

export default Cajas;