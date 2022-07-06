import React from "react";
import '../estilos/ItemListContainer.css';
import ItemCount from './ItemCount';
import ItemList from "./ItemList";
import productos from '../productos/productos.json'

function ItemListContainer ({greeting}) {
    return <div>{greeting}
        <ItemCount/>
        <ItemList Items={productos} />
    </div>
};

export default ItemListContainer;