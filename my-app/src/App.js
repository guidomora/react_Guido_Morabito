import React from "react";
import './App.css';
import ItemListContainer from "./componente/ItemListContainer";
import NavBar from './componente/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer
      greeting = {"Aca van a ir los productos"}/>
    </div>
  );
}

export default App;
