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
        <div className="testimonio-body">
            <HEADER />
            <div className="testimonio-banner-container">
                <img src={fondo} alt="Banner" />
                <div className="testimonio-banner-overlay">
                    <h1 className="testimonio-banner-title">Únete a la gran cantidad de personas beneficiadas 
                        con nuestros hábitos saludables de vida! <br /></h1>
                        <img src={salud} alt="Salud" />
                </div>
            </div>
            <div className="testimonio-contenedor-inferior">

                <div className="testimonio-titles text-center"><h1>Construimos vidas felices</h1></div> 

                <div className="testimonio-contenedor-cards">
                    <div className="testimonio-contenedor2">
                        <img src={chica1} alt="Carmen Ramos" />
                        <p className="testimonio-card-title">Carmen Ramos</p>
                        <p className="testimonio-card-subtitle">Desde que comencé con sus rutinas mi vida cambió totalmente, ¡ahora me gusta mucho más mi estilo de vida!</p>
                    </div>

                    <div className="testimonio-contenedor2">
                        <img src={chica2} alt="Fatima Dada" />
                        <p className="testimonio-card-title">Fatima Dada</p>
                        <p className="testimonio-card-subtitle">Desde que comencé con sus rutinas mi vida cambió totalmente, ¡ahora me gusta mucho más mi estilo de vida!</p>
                    </div>

                    <div className="testimonio-contenedor2">
                        <img src={chica3} alt="Karla Marjorie" />
                        <p className="testimonio-card-title">Karla Marjorie</p>
                        <p className="testimonio-card-subtitle">Desde que comencé con sus rutinas mi vida cambió totalmente, ¡ahora me gusta mucho más mi estilo de vida!</p>
                    </div>

                    <div className="testimonio-contenedor2">
                        <img src={chica4} alt="Patricio Leon" />
                        <p className="testimonio-card-title">Patricio Leon</p>
                        <p className="testimonio-card-subtitle">Desde que comencé con sus rutinas mi vida cambió totalmente, ¡ahora me gusta mucho más mi estilo de vida!</p>
                    </div>
                </div>

                <div className="testimonio-contenedor-cards">
                    <div className="testimonio-contenedor2">
                        <img src={chica5} alt="Carlos Adrian" />
                        <p className="testimonio-card-title">Carlos Adrian</p>
                        <p className="testimonio-card-subtitle">Desde que comencé con sus rutinas mi vida cambió totalmente, ¡ahora me gusta mucho más mi estilo de vida!</p>
                    </div>

                    <div className="testimonio-contenedor2">
                        <img src={chica6} alt="Javi Hernan" />
                        <p className="testimonio-card-title">Javi Hernan</p>
                        <p className="testimonio-card-subtitle">Desde que comencé con sus rutinas mi vida cambió totalmente, ¡ahora me gusta mucho más mi estilo de vida!</p>
                    </div>

                    <div className="testimonio-contenedor2">
                        <img src={chica7} alt="Gustavo H Linares" />
                        <p className="testimonio-card-title">Gustavo H Linares</p>
                        <p className="testimonio-card-subtitle">Desde que comencé con sus rutinas mi vida cambió totalmente, ¡ahora me gusta mucho más mi estilo de vida!</p>
                    </div>

                    <div className="testimonio-contenedor2">
                        <img src={chica8} alt="Marie Gonzales" />
                        <p className="testimonio-card-title">Marie Gonzales</p>
                        <p className="testimonio-card-subtitle">Desde que comencé con sus rutinas mi vida cambió totalmente, ¡ahora me gusta mucho más mi estilo de vida!</p>
                    </div>
                </div>
            </div>

            <div className="testimonio-contenedor3">
                <img src={doctores} alt="Doctores" />
                <div className="testimonio-text-nutris">
                    <h1>¡Conoce a nuestro equipo de nutricionistas!</h1>
                    <p>Profesional de la salud que tiene una formación especial en dietética y nutrición...</p>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default Testimonio;
