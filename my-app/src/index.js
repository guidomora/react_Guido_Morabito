import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CajasConFloresViews from "./views/CajasConFloresViews";
import CondolenciasViews from "./views/CondolenciasViews";
import ArreglosFloralesViews from "./views/ArreglosFloralesViews";
import RamosDeFloresViews from "./views/RamosDeFloresViews";
import CartViews from "./views/CartViews";
import Detail from "./views/Detail";
import { CartProvider } from "./componente/CartContext";
import "./hooks/FireBase.js";
import Home from "./componente/ItemListContainer";
import Categorias from "./views/Categorias";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />}/>
            <Route path="/items/:id" element={<Detail />} />
            <Route path="/CajasConFlores/" element={<CajasConFloresViews />} />
            <Route path="/Condolencias/" element={<CondolenciasViews />} />
            <Route
              path="/ArreglosFlorales/3"
              element={<ArreglosFloralesViews />}
            />
            <Route path="/RamosDeFlores/" element={<RamosDeFloresViews />} />
            <Route path="/Cart/" element={<CartViews />} />
            <Route path="/tipo/:categoriaId" element={<Categorias />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
