import React from "react";
import '../estilos/ItemCount.css';

function Contador () {
    const valor = 0;
    console.log(valor);
    return (
        <div>
            <div className='ver-clics'>
                <button className='boton-menos'>
                    <p className='resta'>
                        -
                    </p>
                </button>
                <h1> clics </h1>
                <button className='boton-mas'>
                    <p className='suma'>
                        +
                    </p>
                </button>
            </div>
        </div>
    )
};

export default Contador;