import React, {useEffect, useState, useContext} from "react";
import {useParams} from 'react-router-dom';
import { Link } from "react-router-dom";
import '../estilos/ItemDetail.css'
import NavBar from "../componente/NavBar";
import ItemCount from '../componente/ItemCount';
import { CartContext } from "../componente/CartContext";




function Detail ({products}) {
    let params = useParams();
    const [resultados, setResultados] = useState()
    const [err, setErr] = useState("")
    const [unidadProducto, setUnidadProdcuto] = useState(true)
    const [estado, setEstado] = useState(false);
    const {addProducto} = useContext(CartContext)

    function onAddEvent(c) {
        setEstado(true)
        addProducto({...products, cantidad: c}); 
    } 
    
 
    

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + params.id)
            .then((res) => res.json())
            .then((resultados) => setResultados(resultados))
            .catch(() => setErr(err));
    }, [params.id]);

    return (
        <div>
            <div>
            <NavBar 
            imagen ='LogoReact' />
            </div>
             {resultados && (
            <div>
                <h2 className='item-titulo1'>{resultados.titulo}</h2>
                <div className='detail-container1'>
                    <img className='item-imagen1' src={resultados.image} alt= {resultados.title}/>
                    <div className='item-aside1'>
                        <p className='item-descripcion1'>{resultados.description}</p>
                        <p className='item-precio1'>$ {resultados.price}</p>
                        <p className='item-stock1'> {"Stock= 20"} </p>
                        {unidadProducto ? (
                                <ItemCount 
                                stock={20}
                                onAdd = {(cantidad) => {
                                alert(`Agregaste ${cantidad} unidades`);
                                setUnidadProdcuto(false)
                                }}
                                />    
                        ) : (<Link to='/Cart/5' className='boton-compra1 btn btn-primary item-boton1'> Ir al Carrito </Link>)}           
                    </div>
                </div>
            </div>    
        )}
        </div>
       
    )

};

export default Detail;