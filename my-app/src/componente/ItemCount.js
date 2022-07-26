import React, {useState, useContext} from "react";
import '../estilos/ItemCount.css';
import { CartContext } from "./CartContext"; 

function Contador ({stock, onAdd}) {
    const [valor, setValor] = useState(0);
    const [mostrarCarrito, setMostrarCarrito] = useState(false)
    const showListCart = (evento) => {
    setMostrarCarrito(true)
}
    const CartContextValue = useContext(CartContext)

    function Restar () {
        setValor( preValor => (preValor > 0 ? valor - 1 : valor)); 
    };

    function Sumar () {
        setValor( preValor => preValor + 1);
    };

    return (
        <div className='container-count'>
            <div className='ver-clics'>
                <div className='contenedor' onClick={Restar}>
                    <p className='resta'> - </p>
                </div>
                <h1 className='cantidad'> {valor} </h1>
                <div className='contenedor' onClick={Sumar}>
                    <p className='suma'> + </p>
                </div>
            </div>
            <div>  
            </div>
            {showListCart && ( 
        <button className='boton-compra1 btn btn-primary boton-agregado' onClick={ () => {
            if (valor <= stock){
                onAdd(valor);
            } else{
                alert("No contamos con esa cantidad de productos")
            }
        }}>Agregar al carrito</button>)}
        </div>
    )
}; 



export default Contador;