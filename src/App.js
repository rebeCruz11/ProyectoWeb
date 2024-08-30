import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PAGINAINICIO } from './componentes/primercomponente';
import { SEGUNDAPRUEBA } from './componentes/segundocomponente';
import { PAGINA } from './componentes/inicio';
import { HEADER } from './componentes/header';
import { LOGIN } from './componentes/login';
import { Footer } from './componentes/footer';
import { PERFIL } from './componentes/perfil';
import Rutinas from './componentes/rutinas';
import Testimonio from './componentes/testimonio';
import { INICIOAPP } from './componentes/inicioApp';
import { TARJETA } from './componentes/tarjeta';
import Comments from './componentes/comentarios';




function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route exact path="/" element={<PAGINA />} />
            <Route path="/users" element={<PERFIL />} />
            <Route path="/cart" element={<SEGUNDAPRUEBA />} />
            <Route path="/login" element={<LOGIN />} />
            <Route path="/inicio" element={<PAGINAINICIO />} />
            <Route path="/rutinas" element={<Rutinas />} />
            <Route path="/testimonio" element={<Testimonio />} />
            <Route path="/inicioApp" element={<INICIOAPP />} />
            <Route path="/pagar" element={<TARJETA />} />
            <Route path="/comentarios" element={<Comments />} />


            {/* Agrega más rutas según sea necesario */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
