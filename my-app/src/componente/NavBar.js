import React from 'react';
import CarWidget from './CartWidget';
import '../estilos/NavBar.css';
import { Link } from 'react-router-dom';

function NavBar (props) {
    return <div className='sombra'>
        <nav className='nav-container'>
            <Link to="/">
                <img src={require(`../multimedia2/${props.imagen}.png`)} className='imagen-home' /> 
            </Link>
            <ul className="flex">
                <li className="lista-nav">
                    <button type="button" className="btn btn-primary lista-boton">
                        <Link to="/" className="botones-ruta">Inicio</Link>
                    </button>
                </li>
                <li className="lista-nav">
                     <button type="button" className="btn btn-primary lista-boton">
                        <Link to="/CajasConFlores/1" className="botones-ruta">Cajas con flores</Link>
                    </button>
                </li>
                <li className="lista-nav">
                    <button type="button" className="btn btn-primary lista-boton">
                        <Link to="/Condolencias/2" className="botones-ruta">Condolencias</Link>      
                    </button>
                </li>
                <li className="lista-nav">
                    <button type="button" className="btn btn-primary lista-boton">
                        <Link to="/ArreglosFlorales/3" className="botones-ruta">Arreglos florales</Link>   
                    </button>
                </li>
                <li className="lista-nav">
                    <button type="button" className="btn btn-primary lista-boton">
                        <Link to="/RamosDeFlores/4" className="botones-ruta">Ramos de flores</Link>    
                    </button>
                </li>
                <CarWidget/>
            </ul>
        </nav>
    </div>
};

export default NavBar;