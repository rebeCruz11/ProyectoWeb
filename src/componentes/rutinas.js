import React, { useState, useEffect } from "react"; 
import './rutinas.css';
import boxing from '../componentes/imgs/boxing.jpg';
import espalda from '../componentes/imgs/espalda.jpg';
import saltar from '../componentes/imgs/saltarCuerda.jpg';
import runner from '../componentes/imgs/runner.jpg';
import pilates from '../componentes/imgs/pilates.jpg';
import gluteos from '../componentes/imgs/rutinaGluteos.jpg';
import pesas from '../componentes/imgs/pesas.jpg';

import banner from '../componentes/imgs/banner.png';
import coach1 from '../componentes/imgs/coach1-removebg-preview.png';
import coach2 from '../componentes/imgs/coach2-removebg-preview.png';
import corazon from '../componentes/imgs/me-gusta.png';
import cerebro from '../componentes/imgs/mind_brain_thinking_icon_194567.png';
import huesos from '../componentes/imgs/bones_icon-icons.com_58929.png';
import hombreCorriendo from '../componentes/imgs/hombreCorrriendo.png';

import lineaVital from '../componentes/imgs/life-line-reading_icon-icons.com_70454.png';
import { HEADER } from './header.js';
import { Footer } from './footer.js';
import mancuernas from '../componentes/imgs/mancuernas.png';

import { Card, Button, Container } from 'react-bootstrap';
import { HEADERAPP } from './headerApp.js';

const Rutinas = () => {
  const [rutinas, setRutinas] = useState([]); // Estado para las rutinas
  const [misRutinas, setMisRutinas] = useState([]);

  // Obtener rutinas desde la API
  useEffect(() => {
    fetch('http://localhost:3001/api/rutinas')
      .then(response => response.json())
      .then(data => setRutinas(data))
      .catch(error => console.error('Error fetching rutinas:', error));
  }, []);

  // Extrae userName y email de localStorage
  const userName = encodeURIComponent(localStorage.getItem('userName'));
  const email = encodeURIComponent(localStorage.getItem('email'));

  // Cargar rutinas guardadas del usuario
  useEffect(() => {
    fetch(`http://localhost:3001/api/mis-rutinas?userName=${userName}&email=${email}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar mis rutinas guardadas');
        }
        return response.json();
      })
      .then(data => setMisRutinas(data))
      .catch(error => console.error('Error al cargar mis rutinas guardadas:', error));
  }, [userName, email]);

  // Función para guardar la receta seleccionada
const guardarRutinaa = (nombre) => {
  const nombreRutina = encodeURIComponent(nombre); 
  fetch(`http://localhost:3001/api/guardar-rutinas?userName=${userName}&nombreRutina=${nombreRutina}`)
      .then(response => {
          if (!response.ok) {
              throw new Error('Error al guardar la rutina');
          }
          return response.json();
      })
      .then(() => {
          // Recargar mis recetas después de guardar una nueva
          fetch(`http://localhost:3001/api/mis-rutinas?userName=${userName}&email=${email}`)
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Error al cargar mis rutinas guardadas');
                  }
                  return response.json();
              })
              .then(data => setMisRutinas(data))
              .catch(error => console.error('Error al cargar mis rutinas guardadas después de guardar:', error));
      })
      .catch(error => console.error('Error al guardar la rutinas:', error));
};


  const guardarRutina = (nombre) => {
    const nombreRutina = encodeURIComponent(nombre); 
    
    fetch('http://localhost:3001/api/guardar-rutinas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName: userName, nombreRutina: nombreRutina }), // Enviando un objeto JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al guardar la rutina');
        }
        return response.json();
    })
    .then(data => {
        console.log('Respuesta del servidor:', data); // Agrega esto para ver la respuesta
        // Recargar mis rutinas después de guardar una nueva
        fetch(`http://localhost:3001/api/mis-rutinas?userName=${userName}&email=${email}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar mis rutinas guardadas');
                }
                return response.json();
            })
            .then(data => setMisRutinas(data))
            .catch(error => console.error('Error al cargar mis rutinas guardadas después de guardar:', error));
    })
    .catch(error => console.error('Error al guardar la rutina:', error));
};


  // Función para eliminar una rutina guardada
  // Función para eliminar una rutina guardada
const eliminarRutina = (id) => {
  fetch(`http://localhost:3001/api/deleteDishR?id=${id}`, { method: 'DELETE' })
      .then(response => {
          if (!response.ok) {
              throw new Error('Error al eliminar la rutina');
          }
          return response.json();
      })
      .then(() => {
          setMisRutinas(prevRutinas => prevRutinas.filter(rutina => rutina.id !== id)); // Remover del state
      })
      .catch(error => console.error('Error al eliminar la rutina:', error));
};

  return (
    <div className="body-rutinas">
      <HEADERAPP />
      <div className="banner-container-rutinas">
        <img src={banner} alt="Banner" />
        <div className="banner-overlay-rutinas">
          <h1 className="banner-title-rutinas">Consigue el físico de tus sueños <br /> con nuestras rutinas</h1>
        </div>
      </div>
      <div>
        <p className="banner-subtitle-rutinas">
          Las mejores rutinas con los mejores entrenadores, <br /> con tus progresos diarios, 
          semanales y mensuales <br /> forma parte de los miles de personas beneficiadas con <br /> nuestros métodos, 
          ¡no te arrepentirás!
        </p>
      </div>
      <h2 className="text-center mt-5">Nuestras Rutinas</h2>
      {/* Mostrar todas las rutinas */}
      <div className="container rutinas">
        <div className="row">
          {rutinas.length > 0 ? (
            rutinas.map((rutina) => (
              <div key={rutina.id} className="col-6 col-md-3 mb-3">
                <Card className="card-custom-rutinas">
                  <Card.Img className="card-img-rutinas" variant="top" src={mancuernas} alt="Rutina" />
                  <Card.Body>
                    <Card.Title className="ajustartitle text-center text-black">{rutina.nombre}</Card.Title>
                    <Card.Text className="fs-6 fw-normal">
                      Descripción: {rutina.descripcion}<br />
                      Dificultad: {rutina.dificultad}<br />
                      Duración: {rutina.duracion} semanas<br />
                      Objetivo: {rutina.objetivo}
                    </Card.Text>
                    <Button variant="dark" href="#" onClick={() => guardarRutinaa(rutina.nombre)} className="btn-custom-rutinas">Agregar</Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <p>Cargando rutinas...</p>
          )}
        </div>
      </div>
            {/* Sección adicional con imágenes y otros elementos */}
            <div className="coach1-rutinas">
        <p className="textoC1-rutinas">
          Cada cuerpo es único, y cada persona tiene objetivos diferentes. 
          <br />Por eso, nuestros entrenadores crean planes de entrenamiento totalmente <br /> 
          personalizados para ti.¡Disfruta de un entrenamiento efectivo y
          motivador, adaptado a tus necesidades y preferencias!
        </p>
        <img src={coach1} alt="Coach1" />
      </div>
          <h2 className="text-center mt-5">Mis Rutinas Guardadas</h2>
     {/* Mostrar mis rutinas guardadas */}
     <div className="container rutinas">
      <div className="row">
        {misRutinas.length > 0 ? (
          misRutinas.map((rutina) => (
            <div key={rutina.usuario_rutina_id} className="col-12 col-sm-6 col-md-4 mb-4">
              <Card className="card-ancho-personalizado card-custom-rutinas shadow-sm">
                <Card.Img className="card-img-rutinas" variant="top" src={mancuernas} alt="Rutina Guardada" />
                <Card.Body style={{ padding: '20px', width:'95%', marginLeft:'2%'}}>
                  <Card.Title className="ajustartitle text-center text-black" style={{ fontSize: '1rem' }}>
                    {rutina.nombre}
                  </Card.Title>
                  <Card.Text className="fs-6" style={{ fontSize: '0.9rem' }}>
                    Descripción: {rutina.descripcion}<br />
                    Dificultad: {rutina.nivel_dificultad}<br />
                    Duración: {rutina.duracion} semanas<br />
                    Objetivo: {rutina.objetivo}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-center">No has guardado ninguna rutina.</p>
        )}
      </div>
    </div>


      <div className="contenedor3-rutinas">
        <img className="mancuernas" src={hombreCorriendo} alt="Mancuernas" />
        <div className="letraIcono-rutinas">
          <div className="title-rutinas"> 
            <h2> Beneficios de la actividad física </h2>
          </div>
          <div className="letraIcono2-rutinas"></div>
          <div className="contenedor22-rutinas">
            <div className="contenedor2-rutinas">
              <img className="iconos-rutinas" src={corazon} alt="Corazón" />
            </div>
            <p>Mejora tu salud cardiaca</p>
          </div>

          <div className="contenedor22-rutinas">
            <div className="contenedor2-rutinas">
              <img className="iconos-rutinas" src={cerebro} alt="Cerebro" />
            </div>
            <p>Calma tu mente y libera dopamina</p>
          </div>

          <div className="contenedor22-rutinas">
            <div className="contenedor2-rutinas">
              <img className="iconos-rutinas" src={huesos} alt="Huesos" />
            </div>
            <p>Fortalece tus huesos</p>
          </div>

          <div className="contenedor22-rutinas">
            <div className="contenedor2-rutinas">
              <img className="iconos-rutinas" src={lineaVital} alt="Línea Vital" />
            </div>
            <p>Oxigena la sangre</p>
          </div>
        </div>

        <img className="img-fluid" style={{ objectFit: 'cover', height: '200px', width: '200px', marginTop:'15%', marginLeft:'15%' }} src={mancuernas} alt="Mancuernas" />
      </div>

      <Footer />
    </div>
  );
}

export default Rutinas;
