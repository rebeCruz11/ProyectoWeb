import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.PNG';
import './headerApp.css';
import { NavLink } from 'react-router-dom';


export const HEADERAPP = () => {
    return(
        <header className="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-black fixed-top">
                <div class="container">
                    
                    <a href="./" class="navbar-brand">
                    <img class="logo" src={logo} alt="logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbar-start" aria-controls="navbar-start" aria-expanded="false"
                            area-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse " id="navbar-start">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li class="navbar-item">
                                <a class="btn btn-custom-header" href="/"> Inicio </a>
                            </li>
                            <li class="navbar-item">
                                <a class="btn btn-custom-header" href="/users"> Mis rutinas </a>
                            </li>
                            <li class="navbar-item">
                                <a class="btn btn-custom-header" href="/cart"> Mis planes </a>
                            </li>
                            <li class="navbar-item">
                                <a class="btn btn-custom-header" href="/cart"> Mis servicios </a>
                            </li>
                            <li class="navbar-item">
                                <a class="btn btn-custom-header" href="/cart"> Mi perfil </a>
                            </li>
                            <li class="navbar-item">
                                <a class="btn btn-custom-orange" href="/login"> Cerrar sesión </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
