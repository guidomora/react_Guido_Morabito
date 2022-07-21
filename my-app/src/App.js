import React from "react";
import './App.css';
import ItemListContainer from "./componente/ItemListContainer";
import NavBar from './componente/NavBar';



function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
