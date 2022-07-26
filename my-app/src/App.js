import React from "react";
import './App.css';
import ItemListContainer from "./componente/ItemListContainer";
import NavBar from './componente/NavBar';
import Footer from "./componente/Footer";




function App() {
  return (
    <div>
        <NavBar 
          imagen ='LogoReact' />
        <ItemListContainer />
        <Footer />
    </div>
  );
}

export default App;
