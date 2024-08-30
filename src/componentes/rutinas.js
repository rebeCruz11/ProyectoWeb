import React from "react";
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

      <div className="container rutinas">
        <div className="row">
          <div className="col-6 col-md-3 mb-3">
            <Card className="card-custom-rutinas">
              <Card.Img className="card-img-rutinas" variant="top" src={boxing} alt="Boxing" />
              <Card.Body>
                <Card.Title className="ajustartitle text-center">Entrenamiento Boxing</Card.Title>
                <Card.Text className="fs-6 fw-normal">Rutina para practicar boxing y ser el mejor.</Card.Text>
                <Button variant="dark" href="#" className="btn-custom-rutinas">Vamos!</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <Card className="card-custom-rutinas">
              <Card.Img className="card-img-rutinas" variant="top" src={espalda} alt="Espalda" />
              <Card.Body>
                <Card.Title className="ajustartitle text-center">Una espalda envidiable</Card.Title>
                <Card.Text className="fs-6 fw-normal">Rutina para fortalecer la espalda y mejorar la postura.</Card.Text>
                <Button variant="dark" href="#" className="btn-custom-rutinas">Vamos!</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <Card className="card-custom-rutinas">
              <Card.Img className="card-img-rutinas" variant="top" src={runner} alt="Runner" />
              <Card.Body>
                <Card.Title className="ajustartitle text-center">Entrena tu resistencia</Card.Title>
                <Card.Text className="fs-6 fw-normal ">Rutina de entrenamiento para corredores.</Card.Text>
                <Button variant="dark" href="#" className="btn-custom-rutinas">Vamos!</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <Card className="card-custom-rutinas">
              <Card.Img className="card-img-rutinas" variant="top" src={gluteos} alt="Gluteos" />
              <Card.Body>
                <Card.Title className="ajustartitle text-center">Entrena tus gluteos</Card.Title>
                <Card.Text className="fs-6 fw-normal ">Rutina de entrenamiento para hacer crecer tus gluteos.</Card.Text>
                <Button variant="dark" href="#" className="btn-custom-rutinas">Vamos!</Button>
              </Card.Body>
            </Card>
          </div>

          {/* Repetición de más tarjetas */}
        </div>
      </div>
      <div className="coach1-rutinas">
          <p className="textoC1-rutinas">
            Cada cuerpo es único, y cada persona tiene objetivos diferentes. 
            <br />Por eso, nuestros entrenadores crean planes de entrenamiento totalmente <br /> 
            personalizados para ti.¡Disfruta de un entrenamiento efectivo y
            motivador, adaptado a tus necesidades y preferencias!
          </p>
          <img src={coach1} alt="Coach1" />
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
            <p>Fortalece tu huesos</p>
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

      {/* --------------------------------------------------------------------------------------------*/}

      <div className="container mt-5">
        <h2 className="text-uppercase text-center mb-4" style={{ color: '#fffdf8' }}>
          Tus rutinas del <span style={{ color: '#95938f' }}>Gym</span>
        </h2>
        <div className="row justify-content-center">

          {/* Primera Fila */}
          <div className="col-lg-5 col-md-6 mb-4 d-flex justify-content-center">
            <div className="card" style={{ backgroundColor: '#f95b14', border: 'none', width: '400px', height: '550px' }}>
              <img src={gluteos} className="card-img-top" alt="Cardio Classes" />
              <div className="card-body text-center">
                <h5 className="card-title" style={{ color: '#656461' }}>Cardio Classes</h5>
                <p className="card-text">Continua con tu ejercicio del dia </p>
                <p><strong>12.00 AM - 2.00 PM</strong></p>
                <a href="#" className="btn btn-dark">Continuar</a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-6 mb-4 d-flex justify-content-center">
            <div className="card" style={{ backgroundColor: '#f95b14', border: 'none', width: '400px', height: '550px' }}>
              <img src={espalda} className="card-img-top" alt="Espalda Classes" />
              <div className="card-body text-center">
                <h5 className="card-title" style={{ color: '#656461' }}>Espalda Classes</h5>
                <p className="card-text">Continua con tu ejercicio del dia </p>
                <p><strong>2.00 AM - 3.00 PM</strong></p>
                <a href="#" className="btn btn-dark">Continuar</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Rutinas;