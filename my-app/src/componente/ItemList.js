import React from "react";
import Item from "./Item";
import '../estilos/ItemList.css';
import ItemDetailContainer from "./ItemDetailContainer";


function ItemList ({Items}) {
    return (
        <div>
            <div className='ItemList'>
                {Items.map(({id, titulo, descripcion, tipo, precio, imagen, stock}) => (
                <Item
                id={id}  
                titulo={titulo}
                descripcion={descripcion}
                tipo={tipo}
                precio={precio}
                stock={'Stock: '+stock} 
                imagen={imagen}
                key={id}/>
            ))}
            </div>
            <div> 
                < ItemDetailContainer/>
            </div>
        </div>
        
    )

};

export default ItemList;