import React from 'react';
import { SEGUNDAPRUEBA } from './segundocomponente';
import './inicioApp.css';
import { HEADERAPP } from './headerApp.js';
import about from './images/mujer.avif';
import { Footer } from './footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import comida1 from './images/comida1.png';
import comida2 from './images/comida2.png';
import comida3 from './images/comida3.png';
import comida4 from './images/comida4.png';
import comida5 from './images/comida5.png';
import { Container, Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import { Search, Phone, Grid } from 'react-bootstrap-icons';
import gym from './images/girl3.png';
import gym2 from './images/xd1.jpg';
import logo from './images/girl4.png';


export const INICIOAPP = () => {
    return (
        <div>
            <HEADERAPP />
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
            <div className="container p-5 mt-5 bg-darkdark">
            <div className="welcome-box p-4 mb-4">
                    <h1 className='text-white'>Bienvenido a Elite Fitness</h1>
                </div>
                <div className="search-box mb-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Busca tu mejor rutina"
                        onClick={(e) => {
                            e.target.style.backgroundColor = "black";
                            e.target.style.color = "white";
                            e.target.style.border = "2px solid #FF4500";
                        }}
                    />
                </div>
                <div className="ongoing-projects mb-4">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="project-card p-3">
                                <p className="date">Registrar</p>
                                <h5>Cardio</h5>
                                <p className="category">Tu progreso</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '50%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="project-card p-3">
                                <p className="date">Registrar</p>
                                <h5>Yoga</h5>
                                <p className="category">Tu progreso</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="project-card p-3">
                                <p className="date">Registrar</p>
                                <h5>Alimentación</h5>
                                <p className="category">Tu progreso</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '40%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="project-card p-3">
                                <p className="date">Registrar</p>
                                <h5>Pilates</h5>
                                <p className="category">Tu progreso</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
            
        </div>
    );
};
