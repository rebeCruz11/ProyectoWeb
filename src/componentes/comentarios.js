import React from 'react';
import { SEGUNDAPRUEBA } from './segundocomponente';
import './comentarios.css';
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

export const COMENTARIOS = () => {
    return (
        <div>
            <HEADERAPP />
            <section class="container p-5">
            <div class="p-5">
                <div class="text-center mb-3 p-5">
                    <h6 class="text-primary text-uppercase" style="letter-spacing: 5px;">Comentarios</h6>
                    <h1>Opiniones de nuestros clientes</h1>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card mb-3" id="comments-container">
                            <div class="card mb-3">
                            <div class="card-header">
                                <strong>Marta Zuniga</strong>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Excelente experiencia de vuelo con la aerolínea XYZ. El servicio a bordo fue excepcional y el personal muy amable.</p>
                            </div>
                            <div class="card-footer text-muted">
                                <small>Publicado el 31 de Mayo, 2024</small>
                            </div>
                            </div>
                            <div class="card mb-3">
                            <div class="card-header">
                                <strong>Jorge Zavaleta</strong>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Me encantó el vuelo. Los asientos eran cómodos y el entretenimiento a bordo fue genial. Definitivamente volveré a volar con ellos.</p>
                            </div>
                            <div class="card-footer text-muted">
                                <small>Publicado el 30 de Mayo, 2024</small>
                            </div>
                            </div>
                            <div class="card mb-3">
                            <div class="card-header">
                                <strong>Susan Caceres</strong>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Me encantó el vuelo. Los asientos eran cómodos y el entretenimiento a bordo fue genial y la comida me encanto. Definitivamente volveré a volar con ellos.</p>
                            </div>
                            <div class="card-footer text-muted">
                                <small>Publicado el 30 de Mayo, 2024</small>
                            </div>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="card-body">
                            <h5 class="card-title">Agregar Comentario</h5>
                            <form id="comment-form">
                                <div class="mb-3">
                                <label for="nombre" class="form-label">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ingrese su nombre"
                                    id="nombre"
                                    onClick={(e) => {
                                        e.target.style.backgroundColor = "black";
                                        e.target.style.color = "white";
                                    }}
                                />
                                </div>
                                <div class="mb-3">
                                <label for="comentario" class="form-label">Comentario</label>
                                <textarea class="form-control" id="comentario" rows="4" placeholder="Escriba su comentario"></textarea>
                                </div>
                                <button id="boton-enviar" type="submit" class="btn btn-primary">Enviar Comentario</button>
                            </form>
                            </div>
                        </div>                      
                    </div>
                    </div>
                </div>
            </section>            
        </div>
    );
};
