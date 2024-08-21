import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PAGINAINICIO } from './componentes/primercomponente';
import { SEGUNDAPRUEBA } from './componentes/segundocomponente';
import { PAGINA } from './componentes/inicio';
import {HEADER} from './componentes/header';
import { LOGIN } from './componentes/login';
import { Footer } from './componentes/footer';




function App() {
  return (
    <Router>
    <div>
      <main>
        <Routes>
          <Route exact path="/" element={<PAGINA />} />
          <Route path="/users" element={<PAGINAINICIO />} />
          <Route path="/cart" element={<SEGUNDAPRUEBA/>} />
          {/* Agrega más rutas según sea necesario */}
          <Route path="/login" element={<LOGIN/>} />
        </Routes>
      </main>
    </div>
  </Router>
  );
}

export default App;



