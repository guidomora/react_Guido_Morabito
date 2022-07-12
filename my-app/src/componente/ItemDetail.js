import React from "react";

function ItemDetail ({id, descripcion, imagen}) {
    return(
        <div key={id}>
            <p> hola{descripcion}</p>
            <img src={imagen}/>
        </div>
    )
};

export default ItemDetail; 