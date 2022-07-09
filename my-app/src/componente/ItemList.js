import React from "react";
import Item from "./Item";
import '../estilos/ItemList.css';


function ItemList ({Items}) {
    return (
        <div className='ItemList'>
                {Items.map(({id, titulo, descripcion, precio, imagen, stock}) => (
                <Item
                id={id}  
                titulo={titulo}
                descripcion={descripcion}
                precio={precio}
                stock={'stock: '+stock} 
                imagen={imagen}
                key={id}/>
            ))}
        </div>
    )

};

export default ItemList;