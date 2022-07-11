import React, {useState, useEffect} from "react";
import ItemDetail from './ItemDetail';


// const GetItem = () => {
//     const [carga2, setCarga2] = useState(true);

//     useEffect (() => {
//         const promesa = new Promise((resolve, reject) => {
//             resolve();
//             reject();
//         });
//         promesa
//         .then(function resuelta(){
//             setTimeout(setCarga2, 2000, false)
//         })
//         .catch(function rechazada(){
//             console.log("error en el detalle de los productos")
//         });
//     },[]);
// };

function ItemDetailContainer ({detalles}){
    const [resultados, setResultados] = useState([])

    useEffect(() =>{
        {fetch('../productos/detalle.json')
            .then((response) => response.json())
            .then((json) => console.log(json))
        }
    }, [])

//     return (
//     <div> {GetItem ? (<h2> cargando detalle de productos... </h2>)
//             :( 
//                 detalles.map(({id, descripcion, imagen})=>(
//                     <ItemDetail
//                     key={id}
//                     descripcion={descripcion}
//                     imagen={imagen} 
//                     />
//                 ))
//             )}
//     </div>
//     )                                
 };

export default ItemDetailContainer;

