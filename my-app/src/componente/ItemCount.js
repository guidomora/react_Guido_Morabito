import React, {useState} from "react";
import '../estilos/ItemCount.css';

function Contador () {
    const [valor, setValor] = useState(1);

    function Restar () {
        setValor( preValor => (preValor > 0 ? valor - 1 : valor)); 
    };

    function Sumar () {
        setValor( preValor => preValor + 1);
    };

    return (
        <div>
            <p> Descripcion de los productos. Stock 20 unidades </p>
            <div className='ver-clics'>
                <div className='contenedor' onClick={Restar}>
                    <p className='resta'> - </p>
                </div>
                <h1 className='cantidad'> {valor} </h1>
                <div className='contenedor' onClick={Sumar}>
                    <p className='suma'> + </p>
                </div>
            </div>
        </div>
        
    )
};

export default Contador;