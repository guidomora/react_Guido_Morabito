import React, {useState, useEffect} from "react";



function ItemDetail ({id, descripcion, imagen}) {
    return(
        <div key={id}>
            <p>{descripcion}</p>
            <img src={imagen}/>
        </div>
    )
};

export default ItemDetail; 