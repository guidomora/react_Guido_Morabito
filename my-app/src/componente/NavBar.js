import React from "react";
import "../estilos/NavBar.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="sombra">
      <nav className="nav-container">
        <Link to="/">
          <img
            src={require(`../multimedia2/${props.imagen}.png`)}
            className="imagen-home"
            alt="producto"
          />
        </Link>
        <ul className="flex">
          <li className="lista-nav">
            <button type="button" className="btn lista-boton botones-chicos">
              <Link to="/" className="botones-ruta">
                Inicio
              </Link>
            </button>
          </li>
          <li className="lista-nav">
            <button type="button" className="btn lista-boton botones">
              <Link to="/tipo/Caja" className="botones-ruta">
                Cajas
              </Link>
            </button>
          </li>
          <li className="lista-nav">
            <button type="button" className="btn lista-boton botones">
              <Link to="/tipo/Condolencias" className="botones-ruta">
                Condolencias
              </Link>
            </button>
          </li>
          <li className="lista-nav">
            <button type="button" className="btn lista-boton botones">
              <Link to="/tipo/Arreglo floral" className="botones-ruta">
                Arreglos florales
              </Link>
            </button>
          </li>
          <li className="lista-nav">
            <button type="button" className="btn lista-boton botones">
              <Link to="/tipo/Ramo" className="botones-ruta">
                Ramos
              </Link>
            </button>
          </li>
          <li className="lista-nav">
            <button type="button" className="btn lista-boton botones-chicos">
              <Link to="/Contacto" className="botones-ruta">
                Contacto
              </Link>
            </button>
          </li>
          <li className="lista-nav telefono-nav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              className="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
            <p className="margin-telefono">4301-1744</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
