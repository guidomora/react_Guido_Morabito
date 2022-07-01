import React from "react";
import '../estilos/ItemListContainer.css';
import ItemCount from './ItemCount';

function ItemListContainer ({greeting}) {
    return <div>{greeting}
        <ItemCount/>
    </div>
};

export default ItemListContainer;