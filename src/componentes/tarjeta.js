import React from 'react';
import './tarjeta.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import map from './images/map.png';
import { Link } from 'react-router-dom';



export const TARJETA = () => {
    return (
        <div className="tarjeta-container">
            <div className="tarjeta-card">
                <div className="tarjeta-card-inner">
                    <div className="tarjeta-front">
                        <img src={map} className="tarjeta-map-img" alt="Map Image" />
                        <div className="tarjeta-row">
                            <img src="https://i.ibb.co/G9pDnYJ/chip.png" width="60px" alt="Chip Image" />
                            <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="60px" alt="Visa Logo" />
                        </div>
                        <div class="tarjeta-row tarjeta-card-no">
                            <input class="tarjeta-imput text-white" type="text" placeholder="5244" />
                            <input class="tarjeta-imput text-white" type="text" placeholder="2150" />
                            <input class="tarjeta-imput text-white" type="text" placeholder="8252" />
                            <input class="tarjeta-imput text-white" type="text" placeholder="6420" />
                        </div>
                        <div class="tarjeta-row tarjeta-name">
                            <input class="tarjeta-imput text-white" type="text" placeholder="MARGARITA CRUZ" />
                            <input class="tarjeta-imput text-white" type="text" placeholder=" 10 / 25" />
                            <input class="tarjeta-imput cvv text-white" type="text" placeholder=" cvv " />
                        </div>
                        <div class="tarjeta-row tarjeta-card-holder">
                            <p>BANCO CUSCATLAN</p>
                            <p>TARJETA CREDITO</p>
                        </div>
                    </div>
                </div>
                <div>
                <Link to="/inicioApp" className='ajustarB2'>BIENVENIDO ELITE FITNESS</Link>
                </div>
            </div>
        </div>
    );
}
