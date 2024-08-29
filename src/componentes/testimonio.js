import React from "react";
import { HEADER } from './header.js';
import { Footer } from './footer.js';
import './testimonio.css';
import fondo from '../componentes/imgs/fondoladrillo.jpg';
import salud from '../componentes/imgs/imagen saludable.png';
import chica1 from '../componentes/imgs/chica1.jpg';

import chica2 from '../componentes/imgs/chica2.jpg';
import chica3 from '../componentes/imgs/chica3.jpg';
import chica4 from '../componentes/imgs/hombre2.jpg';
import chica5 from '../componentes/imgs/hombre3.jpg';
import chica6 from '../componentes/imgs/hombre4.jpg';
import chica7 from '../componentes/imgs/hombre10.jpg';
import chica8 from '../componentes/imgs/mujerfeliz.jpg';
import coach from '../componentes/imgs/coach2-removebg-preview.png';
import doctores from '../componentes/imgs/doctores-removebg-preview.png';





const Testimonio = () => {
    return (
        <div className="body">
            <HEADER />
            <div className="banner-container">
                <img src={fondo} alt="Banner" />
                <div className="banner-overlay">
                    <h1 className="banner-title">Unete a la gran cantidad de personas beneficiadas 
                        con nuestros habitos saludables de vida! <br /></h1>
                        <img src={salud} alt="Banner" />
                </div>

            </div>
            <div className="contenedor-inferior">

           <div className="titles"><h1>Construimos vidas felices</h1></div> 

            <div className="contenedor-cards">
                

                <div className="contenedor2">
                <img src={chica1} alt="Banner" />
                <p className="card-title">Carmen Ramos</p>
                <p className="card-subtitle">Desde que comence con sus rutinas mi vida cambio totalmente, ahora me gusta mucho mas mi estilo de vida!</p>
                </div>

                <div className="contenedor2">
                <img src={chica2} alt="Banner" />
                <p className="card-title">Fatima Dada</p>
                <p className="card-subtitle">Desde que comence con sus rutinas mi vida cambio totalmente, ahora me gusta mucho mas mi estilo de vida!</p>
                </div>

                <div className="contenedor2">
                <img src={chica3} alt="Banner" />
                <p className="card-title">Karla Marjorie</p>
                <p className="card-subtitle">Desde que comence con sus rutinas mi vida cambio totalmente, ahora me gusta mucho mas mi estilo de vida!</p>
                </div>

                <div className="contenedor2">
                <img src={chica4} alt="Banner" />
                <p className="card-title">Patricio Leon</p>
                <p className="card-subtitle">Desde que comence con sus rutinas mi vida cambio totalmente, ahora me gusta mucho mas mi estilo de vida!</p>
                </div>

            </div>

            <div className="contenedor-cards">

            <div className="contenedor2">
            <img src={chica5} alt="Banner" />
            <p className="card-title">Carlos Adrian</p>
            <p className="card-subtitle">Desde que comence con sus rutinas mi vida cambio totalmente, ahora me gusta mucho mas mi estilo de vida!</p>
            </div>

            <div className="contenedor2">
            <img src={chica6} alt="Banner" />
            <p className="card-title">Javi Hernan</p>
            <p className="card-subtitle">Desde que comence con sus rutinas mi vida cambio totalmente, ahora me gusta mucho mas mi estilo de vida!</p>
            </div>

            <div className="contenedor2">
            <img src={chica7} alt="Banner" />
            <p className="card-title">Gustavo H Linares</p>
            <p className="card-subtitle">Desde que comence con sus rutinas mi vida cambio totalmente, ahora me gusta mucho mas mi estilo de vida!</p>
            </div>

            <div className="contenedor2">
            <img src={chica8} alt="Banner" />
            <p className="card-title">Marie Gonzales</p>
            <p className="card-subtitle">Desde que comence con sus rutinas mi vida cambio totalmente, ahora me gusta mucho mas mi estilo de vida!</p>
            </div>

            </div>

            </div>
            
            <div className="contenedor3">
              
              <img src={doctores} alt="Banner" />
              <div className="text-nutris">
              <h1>Conoce a nuestro equipo de nutricionistas!</h1>
              <p>Profesional de la salud que tiene una formación especial en dietética y nutrición. Las personas que se 
                dedican a esta profesión brindan orientación sobre nutrición y hábitos de alimentación saludables para ayudar 
                a mejorar la salud y el bienestar. También ayudan a cumplir las necesidades nutricionales durante la recuperación 
                de enfermedades o cirugías, y asesoran a personas con determinadas afecciones, como alergias alimentarias, trastornos
                 de la alimentación, problemas para tragar, diabetes, enfermedades del corazón o el riñón, y cáncer.</p>

              </div>

              
            </div>



            <Footer /> {/* Añadido el componente Footer */}
        </div>
    );
}

export default Testimonio;
