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
                                <p className="date">May 30, 2023</p>
                                <h5>Mobile App</h5>
                                <p className="category">UI Design</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '50%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="project-card p-3">
                                <p className="date">May 30, 2023</p>
                                <h5>Dashboard</h5>
                                <p className="category">UX Research</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="project-card p-3">
                                <p className="date">May 30, 2023</p>
                                <h5>Banner</h5>
                                <p className="category">Marketing</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '40%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                            <div className="project-card p-3">
                                <p className="date">May 30, 2023</p>
                                <h5>UI/UX</h5>
                                <p className="category">Research</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="cards">
                    <a href="#" className="card">
                        <div className="card-background" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1610375233612-d6a66ac3af99?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1047&q=80)" }}></div>
                        <div className="card-content">
                            <p>Travel</p>
                            <h3>Japón</h3>
                        </div>
                    </a>
                    <a href="#" className="card">
                        <div className="card-background" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1593971657261-184f7a3a72de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)" }}></div>
                        <div className="card-content">
                            <p>Travel</p>
                            <h3>USA</h3>
                        </div>
                    </a>
                    <a href="#" className="card">
                        <div className="card-background" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1532465614-6cc8d45f647f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)" }}></div>
                        <div className="card-content">
                            <p>Travel</p>
                            <h3>France</h3>
                        </div>
                    </a>
                    <a href="#" className="card">
                        <div className="card-background" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)" }}></div>
                        <div className="card-content">
                            <p>Travel</p>
                            <h3>Canada</h3>
                        </div>
                    </a>
                </div>
            </div>

            
        </div>
    );
};
