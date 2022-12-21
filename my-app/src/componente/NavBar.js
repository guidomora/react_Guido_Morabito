import React from 'react';
import CarWidget from './CartWidget';
import '../estilos/NavBar.css';
import { Link } from 'react-router-dom';


function NavBar (props) {

    return <div className='sombra'>
        <nav className='nav-container'>
            <Link to="/">
                <img src={require(`../multimedia2/${props.imagen}.png`)} className='imagen-home' alt='producto'/> 
            </Link>
            <ul className="flex">
                <li className="lista-nav">
                    <button type="button" className="btn btn-primary lista-boton botones-chicos">
                        <Link to="/" className="botones-ruta">Inicio</Link>
                    </button>
                </li>
                <li className="lista-nav">
                     <button type="button" className="btn btn-primary lista-boton botones">
                     <Link to="/tipo/Caja" className="botones-ruta">Cajas con flores</Link>
                    </button>
                </li>
                <li className="lista-nav">
                    <button type="button" className="btn btn-primary lista-boton botones">
                    <Link to="/tipo/Condolencias" className="botones-ruta">Condolencias</Link>      
                    </button>
                </li>
                <li className="lista-nav">
                    <button type="button" className="btn btn-primary lista-boton botones">
                    <Link to="/tipo/Arreglo floral" className="botones-ruta">Arreglos florales</Link>   
                    </button>
                </li>
                <li className="lista-nav">
                    <button type="button" className="btn btn-primary lista-boton botones">
                    <Link to="/tipo/Ramo" className="botones-ruta">Ramos de flores</Link>    
                    </button>
                </li>
                <li className="lista-nav">
                    <button type="button" className="btn btn-primary lista-boton botones-chicos">
                    <Link to="/Contacto" className="botones-ruta">Contacto</Link>    
                    </button>
                </li>
                <CarWidget/>
            </ul>
        </nav>
    </div>
};

export default NavBar;