import React  from "react";
import '../estilos/Item.css';
import ItemCount from '../componente/ItemCount';
import { Link } from "react-router-dom";


function Condolencias ({id, titulo, precio, imagen, stock}) {


    return (
        <div className='item'>
            <h2 className='item-titulo'>{titulo}</h2>
            <img className='item-imagen' src={imagen} alt= {titulo}/>
            <p className='item-precio'>$ {precio}</p>
            <p className='item-stock'> {stock} </p>
            <span>
                <Link to={"productos/" + id} className='btn btn-primary item-boton'> Detalle del producto </Link>
            </span>
            <ItemCount />
        </div>
    )

};

export default Condolencias;