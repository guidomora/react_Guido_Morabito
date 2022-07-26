import React, { Children } from "react";
import Footer from "../componente/Footer";
import NavBar from "../componente/NavBar";


function Cart({children}) {
    return (
        <div>
           <NavBar 
             imagen ='LogoReact' />
            {/* <Footer /> */}
            <div>
                {children}
                <button>
                    botones
                </button>
            </div>
        </div>
    )
};

export default Cart;