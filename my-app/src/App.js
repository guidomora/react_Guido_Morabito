import React from "react";
import "./App.css";
import ItemListContainer from "./componente/ItemListContainer";
import NavBar from "./componente/NavBar";
import Footer from "./componente/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar imagen="LogoReact" />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
