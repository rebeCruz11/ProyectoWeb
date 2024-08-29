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

export const INICIOAPP = () => {
    return (
        <div>
            <HEADERAPP />
            <div className="container p-5 mt-5 bg-darkdark">
            <div className="welcome-box p-4 mb-4">
                    <h1 className='text-white'>Bienvenido a Elite Fitness</h1>
                </div>
                <div className="search-box mb-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
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
                                <p className="date">Vamos</p>
                                <h5>Cardio</h5>
                                <p className="category">Tu progreso</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '50%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="project-card p-3">
                                <p className="date">Vamos</p>
                                <h5>Yoga</h5>
                                <p className="category">Tu progreso</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="project-card p-3">
                                <p className="date">Vamos</p>
                                <h5>Alimentación</h5>
                                <p className="category">Tu progreso</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '40%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="project-card p-3">
                                <p className="date">Vamos</p>
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
