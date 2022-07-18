import React from "react";
import {useParams} from 'react-router-dom';




function Detail () {
    let params = useParams();
    console.log(params);
    return (
        <div>
            hola
        </div>
    )
};

export default Detail;