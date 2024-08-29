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
<<<<<<< HEAD
import PERFIL from './componentes/perfil';
=======
import Rutinas from './componentes/rutinas';
import Testimonio from './componentes/testimonio';

>>>>>>> 184d7fa2f9a95c6fb95af7dfa4c0d173d3c41fbd




function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div>
        <main>
          <Routes>
            <Route exact path="/" element={<PAGINA />} />
            <Route path="/users" element={<PERFIL />} />
            <Route path="/cart" element={<SEGUNDAPRUEBA />} />
            {/* Agrega más rutas según sea necesario */}
            <Route path="/login" element={<LOGIN />} />
          </Routes>
        </main>
      </div>
    </Router>
=======
    <div>
      <main>
        <Routes>
          <Route exact path="/" element={<PAGINA />} />
          <Route path="/users" element={<PAGINAINICIO />} />
          <Route path="/cart" element={<SEGUNDAPRUEBA/>} />
          {/* Agrega más rutas según sea necesario */}
          <Route path="/login" element={<LOGIN/>} />
          <Route path="/rutinas" element={<Rutinas/>} />
          <Route path="/testimonio" element={<Testimonio/>} />
          

          
          
          
          
        </Routes>
      </main>
    </div>
  </Router>
>>>>>>> 184d7fa2f9a95c6fb95af7dfa4c0d173d3c41fbd
  );
}

export default App;
