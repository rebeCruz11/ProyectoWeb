import React, { useState } from 'react';
import './tarjeta.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import map from './images/map.png';
import { Link } from 'react-router-dom';

export const TARJETA = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [name, setName] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');

    // Función para validar la tarjeta
    const validateCard = () => {
        // Concatenar los valores de los cuatro campos de número de tarjeta
        const cardNumber = input1 + input2 + input3 + input4;

        // Verificar que el número de tarjeta tenga exactamente 16 dígitos
        if (cardNumber.length !== 16) {
            alert('El número de tarjeta debe tener exactamente 16 dígitos.');
            return;
        }

        // Verificar que el CVV tenga exactamente 3 dígitos
        if (cvv.length !== 3) {
            alert('El CVV debe tener exactamente 3 dígitos.');
            return;
        }

        // Validar que el nombre no esté vacío y contenga solo letras y espacios
        const nameRegex = /^[A-Za-z\s]+$/;
        if (name.trim() === '') {
            alert('El nombre no puede estar vacío.');
            return;
        }
        if (!nameRegex.test(name)) {
            alert('El nombre solo puede contener letras y espacios.');
            return;
        }

        // Validar la fecha de expiración en formato MM/AA
        const expDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/AA formato
        if (!expDateRegex.test(expirationDate)) {
            alert('La fecha de expiración debe estar en formato MM/AA.');
            return;
        }

        // Verificar que la fecha de expiración no esté vencida
        const [month, year] = expirationDate.split('/');
        const currentYear = new Date().getFullYear() % 100; // Tomar los últimos dos dígitos del año actual
        const currentMonth = new Date().getMonth() + 1; // Mes actual (de 0 a 11)

        if (parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
            alert('La tarjeta está vencida.');
            return;
        }

        // Si pasa todas las validaciones
        alert('Tarjeta válida.');
    };

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

                        <div className="tarjeta-row tarjeta-card-no">
                            <input
                                className="tarjeta-imput text-white"
                                type="text"
                                maxLength="4"
                                placeholder="5244"
                                value={input1}
                                onChange={(e) => setInput1(e.target.value)}
                            />
                            <input
                                className="tarjeta-imput text-white"
                                type="text"
                                maxLength="4"
                                placeholder="2150"
                                value={input2}
                                onChange={(e) => setInput2(e.target.value)}
                            />
                            <input
                                className="tarjeta-imput text-white"
                                type="text"
                                maxLength="4"
                                placeholder="8252"
                                value={input3}
                                onChange={(e) => setInput3(e.target.value)}
                            />
                            <input
                                className="tarjeta-imput text-white"
                                type="text"
                                maxLength="4"
                                placeholder="6420"
                                value={input4}
                                onChange={(e) => setInput4(e.target.value)}
                            />
                        </div>

                        <div className="tarjeta-row tarjeta-name">
                            <input
                                className="tarjeta-imput text-white"
                                type="text"
                                placeholder="MARGARITA CRUZ"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                className="tarjeta-imput text-white"
                                type="text"
                                placeholder="10 / 25"
                                value={expirationDate}
                                onChange={(e) => setExpirationDate(e.target.value)}
                            />
                            <input
                                className="tarjeta-imput cvv text-white"
                                type="text"
                                maxLength="3"
                                id="cvv"
                                placeholder="CVV"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                            />
                        </div>

                        <div className="tarjeta-row tarjeta-card-holder">
                            <p>BANCO CUSCATLAN</p>
                            <p>TARJETA CREDITO</p>
                        </div>
                    </div>
                </div>
                <div>
                <Link to="/registro"><button type="button" onClick={validateCard} className="margin"> 
                        BIENVENIDO ELITE FITNESS
                    </button> </Link>
                </div>
            </div>
        </div>
    );
};
