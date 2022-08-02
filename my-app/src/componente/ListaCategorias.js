import React from 'react';
import { Link } from "react-router-dom"; 

const ListCategorias = ({ items }) => {
    return (
        <div>{items.length ? (
            items.map((item) =>  (
               <div >
                   <Link to={"../productos/categoria/" + item.titulo}>{item.titulo}</Link>
               </div>
            )

            )
        ) : (
            <h3>No Hay Resultados</h3>
        )}
        </div>
    );
};
export default ListCategorias;