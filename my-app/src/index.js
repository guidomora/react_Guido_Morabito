import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CajasConFloresViews from './views/CajasConFloresViews';
import CondolenciasViews from './views/CondolenciasViews';
import ArreglosFloralesViews from './views/ArreglosFloralesViews';
import RamosDeFloresViews from './views/RamosDeFloresViews';
import CartViews from './views/CartViews';
import Detail from './views/Detail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="productos/:id" element={<Detail />} />
        <Route path="/CajasConFlores/1" element={<CajasConFloresViews />} />
        <Route path="/Condolencias/2" element={<CondolenciasViews />} />
        <Route path="/ArreglosFlorales/3" element={<ArreglosFloralesViews/>} />
        <Route path="/RamosDeFlores/4" element={<RamosDeFloresViews />} />
        <Route path="/Cart/5" element={<CartViews />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
