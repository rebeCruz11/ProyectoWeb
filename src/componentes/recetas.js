import React, { useState, useEffect } from 'react';
import './recetas.css';
import { HEADERAPP } from './headerApp.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import gym from './images/comida4.png';


export const RECETAS = () => {
    const [recetas, setRecetas] = useState([]);
    const [misRecetas, setMisRecetas] = useState([]);

    useEffect(() => {
        // Cargar todas las recetas
        fetch('http://localhost:3001/api/recetas')
            .then(response => response.json())
            .then(data => setRecetas(data))
            .catch(error => console.error('Error al cargar las recetas:', error));
    }, []);

    // Extrae userName y email de localStorage
    const userName = encodeURIComponent(localStorage.getItem('userName'));
    const email = encodeURIComponent(localStorage.getItem('email'));
    const userId = encodeURIComponent(localStorage.getItem('userId'));

    useEffect(() => {
        // Cargar las recetas guardadas del usuario
        fetch(`http://localhost:3001/api/mis-recetas?userName=${userName}&email=${email}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar mis recetas guardadas');
                }
                return response.json();
            })
            .then(data => setMisRecetas(data))
            .catch(error => console.error('Error al cargar mis recetas guardadas:', error));
    }, [userName, email]);

 // Función para guardar la receta seleccionada
const guardarReceta = (nombre) => {
    const nombreReceta = encodeURIComponent(nombre); 
    fetch(`http://localhost:3001/api/guardar-recetas?userName=${userName}&nombreReceta=${nombreReceta}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al guardar la receta');
            }
            return response.json();
        })
        .then(() => {
            // Recargar mis recetas después de guardar una nueva
            fetch(`http://localhost:3001/api/mis-recetas?userName=${userName}&email=${email}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al cargar mis recetas guardadas');
                    }
                    return response.json();
                })
                .then(data => setMisRecetas(data))
                .catch(error => console.error('Error al cargar mis recetas guardadas después de guardar:', error));
        })
        .catch(error => console.error('Error al guardar la receta:', error));
};

    // Función para eliminar una receta guardada
    const eliminarReceta = (id) => {
        fetch(`http://localhost:3001/api/deleteDish?id=${id}`, { method: 'DELETE' })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al eliminar la receta');
                }
                return response.json();
            })
            .then(() => {
                setMisRecetas(prevRecetas => prevRecetas.filter(receta => receta.id !== id)); // Remover del state
            })
            .catch(error => console.error('Error al eliminar la receta:', error));
    };

    return (
        <div>
            <HEADERAPP />
            <div className="container mt-5">
            <section class="p-5 bg-darkdark text-white ">
                <h1 style={{fontSize: '2rem', textAlign: 'center', padding: '25px'}}>Binevenido a Recetas</h1>
                    <div class="container bor">
                        <div class="d-flex justify-content-between align-items-center">
                            <div className="col-md-6 bg-dark">
                            <img className="d-block w-100" src={gym} alt="Fitness" />
                            </div>
                            <div class="m-2 p-3 ml-5">
                                <h1 class="text-orange">Seleciona la receta que mas se adapte a ti</h1>
                                <p>En ELITE FITNESS, ofrecemos una variedad de recetas diseñados para adaptarse a tus necesidades y objetivos específicos. Ya sea que busques comer saludable, bajar de peso o mas.</p>
                                <p>Nosotros contamos con un banco de miles de recetas que se adaptan a ti, y contamos con el recurso de guardar receta que consiste en que seleccione las que mas se adapten a tus objetivos.</p>
                                <p>¡No esperes más! Elige tu receta hoy y comienza tu transformación con ELITE FITNESS.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <h1 className="text-center mb-4">Nuestras Recetas</h1>
                <div className="recetas-container">
                    {recetas.map((receta, index) => (
                        <div key={index} className="card-receta">
                            <div className="card-header-receta" style={{ display: 'none' }}>{receta.id}</div>
                            <div className="card-header-receta">{receta.nombre}</div>
                            <div className="card-ingrediente">
                                <strong>Ingredientes:</strong> {receta.ingredientes}
                            </div>
                            <div className="card-preparacion">
                                <strong>Preparación:</strong> {receta.preparacion}
                            </div>
                            <div className="card-calorias">
                                <strong>Calorías:</strong> <span>{receta.calorias}</span>
                            </div>
                            <div className="card-tipo">
                                <strong>Tipo:</strong> <span>{receta.tipo}</span>
                            </div>
                            <div className="text-center mt-3">
                                <button className="btn-receta" onClick={() => guardarReceta(receta.nombre)}>Guardar Receta</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sección de recetas guardadas */}
                <h2 className="text-center mt-5">Mis Recetas Guardadas</h2>
                <div className="recetas-container">
                    {misRecetas.length > 0 ? (
                        misRecetas.map((receta, index) => (
                            <div key={index} className="card-receta">
                                <div className="card-header-receta" style={{ display: 'none' }}>{receta.id}</div>
                                <div className="card-header-receta">{receta.nombre}</div>
                                <div className="card-ingrediente">
                                    <strong>Ingredientes:</strong> {receta.ingredientes}
                                </div>
                                <div className="card-preparacion">
                                    <strong>Preparación:</strong> {receta.preparacion}
                                </div>
                                <div className="card-calorias">
                                    <strong>Calorías:</strong> <span>{receta.calorias}</span>
                                </div>
                                <div className="card-tipo">
                                    <strong>Tipo:</strong> <span>{receta.tipo}</span>
                                </div>
                                <div className="text-center mt-3">
                                    <button className="btn-receta" onClick={() => eliminarReceta(receta.id)}>Eliminar Receta</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No has guardado recetas aún.</p>
                    )}
                </div>
            </div>
        </div>
    );
};
