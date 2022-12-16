import React from "react";
import "./App.css";
import NavBar from "./componente/NavBar";
import Footer from "./componente/Footer";
import { Outlet } from "react-router-dom";
import WhatsApp from "./componente/WhatsApp";

function App() {
  return (
    <div>
      <NavBar imagen="LogoReact" />
      <main>
        <WhatsApp />
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
