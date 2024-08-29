import React from 'react';
import { SEGUNDAPRUEBA } from './segundocomponente';
import './inicio.css';
import { HEADER } from './header.js';
import logo from './images/girl4.png';
import box from './images/box.jpeg';
import work from './images/woek.jpeg';
import pilates from './images/Yoga.jpeg';
import gym from './images/girl3.png';
import gym2 from './images/xd1.jpg';
import girl from './images/girlGym.jpg';
import comida1 from './images/comida1.png';
import comida2 from './images/comida2.png';
import comida3 from './images/comida3.png';
import comida4 from './images/comida4.png';
import comida5 from './images/comida5.png';
import about from './images/mujer.avif';
import { Footer } from './footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';







export const PAGINA = () => {
    return (
        <div>
            <HEADER />
            //Aqui va el carusel
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={logo} alt="Fitness Image" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>El mejor equipo, ¡Que esperas!</h5>
                            <p>Nuestro equipo esta comprometido contigo.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={gym} alt="Fitness Imagee" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Tenemos las mejores rutinas para tu cuerpo soñado</h5>
                            <p>Con nosotros puedes ser tu mejor versión.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={gym2} alt="Fitness Imageee" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Las mejores intalaciones para ti</h5>
                            <p>Tenemos una locación perfecta para que disfrutes tu entrenamiento.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev bg-transparent" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next bg-transparent" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
            <section class="p-5 bg-darkdark text-white ">
                <div class="container bor">
                    <div class="d-flex justify-content-between align-items-center">
                        <div className="col-md-6 bg-dark">
                        <img className="d-block w-100" src={about} alt="Fitness" />
                        </div>
                        <div class="m-2 p-3 ml-5">
                            <h1 class="text-orange">¿Quiénes somos?</h1>
                            <p>En ELITE FITNESS creemos que el fitness es más que solo un entrenamiento; es un estilo de vida. Nuestro gimnasio está diseñado para ayudarte a alcanzar tus metas, ya sea que estés buscando ganar fuerza, perder peso o simplemente mantenerte en forma.</p>
                            <p><strong>Compromiso con la Excelencia</strong></p>
                            <p>Nos esforzamos por ofrecer un espacio inclusivo y alentador para todos nuestros miembros. Desde principiantes hasta atletas experimentados, nuestro objetivo es proporcionar las herramientas y el apoyo necesarios para que puedas superar tus límites y descubrir tu verdadero potencial.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id= "rutinas" className="container-fluid">
                <div className="row no-gutters">
                    <div className="col-md-6 d-flex align-items-center justify-content-center bg-orange">
                        <div className="text-center text-white">
                            <h2>Conoce nuestras rutinas</h2>
                            <button className="btn btn-outline-light">Inscríbete</button>
                        </div>
                    </div>
                    <div className="col-md-6 bg-darkdark">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/cd3TEWj8Ztg?si=Rnr2obb0nYw1iPa2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </div>
                </div>
            </section>
            <section class="ingredients-section text-center py-5 bg-darkdark">
            <div class="container service-section">
                <h2 class="section-title">Nuestros principales servicios</h2>
                <div class="row">
                    <div class="col-md-6 col-lg-4">
                        <div class="service-box">
                        <img class src={box} alt="Yoga" />

                            <h4>YOGA BOXING</h4>
                            <p>Parte de nosotros es ayudarte y las clases de yoga son extraordinarias.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="service-box">
                        <img class src={work} alt="Yoga" />
                        <h4>GROUP WORKOUTS</h4>
                            <p>En nuestros grupos puedes conseguir tus metas y nuevos amigos .</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="service-box">
                        <img class src={pilates} alt="Yoga" />
                        <h4>PILATES</h4>
                            <p>La mejor manera de empezar tu entrenamiento es con pilates.</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section class="ingredients-section text-center py-5 bg-darkdark">
                <div class="containerr">
                    <h3 class="mb-4">¡Las mejores recetas!</h3>
                    <p class="lead mb-5 text-white">
                        
                    Disfrutar un menú semanal saludable es clave para verte y sentirte bien.
                    Si haces deporte y quieres llevar una vida sana un menú fitness semanal es el 
                    complemento perfecto a tu entrenamiento o tu día a día. Te proponemos un menú 
                    semanal saludable con consejos prácticos, platos sabrosos y 
                    fáciles de preparar  y siguiendo este planning comprobarás que alimentarte bien 
                    es algo fácil y que disfrutas.
                    </p>
                    <div class="row justify-content-center">
                        <div class="col-2">
                            <img class="img-fluid" src={comida1} alt="Herb" />
                        </div>                 
                        <div class="col-2">
                            <img class="img-fluid" src={comida3} alt="Herb" />
                        </div>                    
                        <div class="col-2">
                            <img class="img-fluid" src={comida4} alt="Herb" />
                        </div>                    
                        <div class="col-2">
                            <img class="img-fluid" src={comida5} alt="Herb" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-orange text-light p-5">
                <div class="container">
                    <div class="d-flex justify-content-center">
                        <h2 class="p-3">Contamos con cientos de testimonios de nuestros clientes</h2>
                        <div className="input-group w-50">
                            <NavLink to="/testimonio" className="btn btn-outline-light w-50 h-50 mt-3">
                                Ver
                            </NavLink>
                            </div>
                        
                    </div>
                </div>
            </section>
            <section class="ingredients-section text-center py-5 bg-darkdark text-white">
                <div class="container pricing-table ">
                    <div class="row text-center">
                        <h3 class="mb-5">Nuestros planes</h3>
                    </div>
                    <div class="row bg-darkdark">
                        <div class="col-lg-3 col-md-6 mb-4 ">
                            <div class="card pricing-card ">
                                <div class="card-header bg-dark text-white">
                                    BASICO
                                </div>
                                <div class="card-body bg-difuminado text-white">
                                    <h5 class="card-title">Económico</h5>
                                    <p class="price">$9.99<span><br/>/mes</span></p>
                                    <div class="p-5">
                                    <a href="#" class="btn btn-outline-light">Seleccionar</a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="card pricing-card">
                                <div class="card-header bg-dark text-white">
                                    PREMIUM
                                </div>
                                <div class="card-body bg-difuminado text-white">
                                    <h5 class="card-title">Intermedio</h5>
                                    <p class="price">$19.99<span><br/>/mes</span></p>
                                    <div class="p-5">
                                    <a href="#" class="btn btn-outline-light">Seleccionar</a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="card pricing-card">
                                <div class="card-header bg-dark text-white">
                                    PRO
                                </div>
                                <div class="card-body bg-difuminado text-white">
                                    <h5 class="card-title">Especial</h5>
                                    <p class="price">$29.99<span><br/>/mes</span></p>
                                    <div class="p-5">
                                    <a href="#" class="btn btn-outline-light">Seleccionar</a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="card pricing-card">
                                <div class="card-header bg-dark text-white">
                                    ULTRA
                                </div>
                                <div class="card-body bg-difuminado text-white">
                                    <h5 class="card-title">Todo incluido</h5>
                                    <p class="price">$39.99<span><br/>/mes</span></p>
                                    <div class="p-5">
                                    <a href="#" class="btn btn-outline-light">Seleccionar</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="ingredients-section text-center py-5 bg-darkdark">
                <div class="containerr">
                    <h3 class="mb-4">¡Contáctanos!</h3>
                    <p class="lead mb-5 text-white">
                        
                    ELITE FITNESS esta siempre para ti, para cualquier consulta llama al 
                    1234-1243 y te ofrecemos el mejor servicio de gimnasio, somos una empresa comprometida con tu salud, 
                    para mas información nuestro correo es : Elite.fitness@gmail.com estamos a la orden siempre.
                    </p>
                </div>
            </section>
            <div>
            <Footer/>            
            </div>
        </div>
    );
};
