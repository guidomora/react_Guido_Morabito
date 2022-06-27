import React from 'react';

const NavBar = () => {
    return <div>
        <nav>
            <ul className="flex">
                <li className="lista-nav">
                    <button type="button" className="btn btn-primary lista-boton">
                        <a href="#" className="botones-ruta"> Inicio  </a>
                    </button>
                </li>
                <li className="lista-nav">
                     <button type="button" className="btn btn-primary lista-boton">
                        <a href="#" className="botones-ruta"> Cajas con flores </a>
                    </button>
                </li>
                <li className="lista-nav">
                    <button type="button" className="btn btn-primary lista-boton">
                        <a href="#" className="botones-ruta"> Condolencias </a>   
                    </button>
                </li>
                <li className="lista-nav">
                    <button type="button" className="btn btn-primary lista-boton">
                        <a href="#" className="botones-ruta"> Arreglos florales </a>   
                    </button>
                </li>
                <li className="lista-nav">
                    <button type="button" className="btn btn-primary lista-boton">
                        <a href="#" className="botones-ruta"> Ramos de flores </a>    
                    </button>
                </li>
            </ul>
        </nav>
    </div>
};

export default NavBar;