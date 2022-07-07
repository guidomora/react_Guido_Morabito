
import Item from "./Item";
import '../estilos/ItemList.css';
import { useEffect, useState } from "react";



function ItemList ({Items}) {
    const [carga, setCarga] = useState(true);

    useEffect(()=>{
        new Promise((resolve, reject) => {
            if (carga) {
            setTimeout(setCarga, 2000, false);
            } else {
            reject("no carga")
            }
        })
       
    }, []);    

    return (
        <div className='ItemList'>
            {carga ? (
                <h2> Cargando productos... </h2>
            ) : ( <>
            
                {Items.map(({id, titulo, descripcion, precio, imagen}) => (
                <Item
                id={id}  
                titulo={titulo}
                descripcion={descripcion}
                precio={precio} 
                imagen={imagen}
                key={id}/>
                
            ))}

            </>)}
        </div>
      
    )

};

export default ItemList;