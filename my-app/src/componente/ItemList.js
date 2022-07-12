import React from "react";
import Item from "./Item";
import '../estilos/ItemList.css';
import ItemDetailContainer from "./ItemDetailContainer";


function ItemList ({Items}) {
    return (
        
        <div className='ItemList'>
                {Items.map(({id, titulo, descripcion, precio, imagen, stock, enlace}) => (
                <Item
                id={id}  
                titulo={titulo}
                descripcion={descripcion}
                precio={precio}
                stock={'stock: '+stock} 
                imagen={imagen}
                enlace={enlace}
                key={id}/>
            ))}
            <ItemDetailContainer/>
        </div>
    )

};

export default ItemList;