import React, {useState, useEffect} from "react";
import ItemDetail from './ItemDetail';
import detalle from '../productos/detalle'
import promesa from "../productos/detalle";


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

// function ItemDetailContainer ({detalles}){
//     const [resultados, setResultados] = useState([])

//     useEffect(() =>{
//         {fetch('../productos/detalle.json')
//             .then((response) => response.json())
//             .then((json) => console.log(json))
//         }
//     }, [])

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
//  };

const getItem = new Promise((resolve, reject) => {
    let promResuelta = true;
    setTimeout(() => {
        if (promResuelta) {
        resolve(detalle);
        } else {
        reject(console.log("error al cargar"));
        }
})}, 2000);

function ItemDetailContainer () {
        const [resultados, setResultados] = useState(true)

    useEffect(() =>{
        getItem
        .then((data)=>{
            setResultados(data);
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [])

    return (
    <div> {resultados ? (<h2> cargando detalle de productos... </h2>)
            :( 
                detalle.map(({id, descripcion, imagen})=>(
                    <ItemDetail
                    key={id}
                    descripcion={descripcion}
                    imagen={imagen} 
                    />
                ))
            )}
    </div>
    )   
};


export default ItemDetailContainer;

