import React, {useState, useEffect} from "react";
import Item from "./Item";
import '../estilos/ItemList.css';



function ItemList ({Items}) {
    return (
        <div className='ItemList'>
            {Items.map(({id, titulo, descripcion, precio, imagen}) => (
                <Item
                id={id}  
                titulo={titulo}
                descripcion={descripcion}
                precio={precio} 
                imagen={imagen}
                key={id}/>
            ))}
            
        </div>
      
    )

};

export default ItemList;