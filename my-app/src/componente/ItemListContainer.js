import React, {useState, useEffect} from "react";
import '../estilos/ItemListContainer.css';
import ItemList from "./ItemList";
import productos from '../productos/productos.json'

function ItemListContainer ({greeting}) {
    const [carga, setCarga] = useState(true);

    useEffect(()=>{
       const promesa = new Promise((resolve, reject) => {
            resolve();
            reject();
            });
            promesa
            .then(function resuelto(){
                setTimeout(setCarga, 2000, false)
            })
            .catch(function rechazado(){
                console.log("no carga")
            });
    }, []);
    


    return <div>
        {carga ? (
            <h2 className='carga'> Cargando productos... </h2>
            ) : ( <>
                <ItemList Items={productos} />
            </>
        )}
    </div>
};

export default ItemListContainer;



