import React, { useEffect } from 'react';
import './comentarios.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HEADERAPP } from './headerApp.js';

const Comments = () => {
    useEffect(() => {
        mostrarComentarios();

        // Usar una función separada para manejar el envío del formulario
        const handleFormSubmit = (event) => {
            event.preventDefault(); // Evita el envío del formulario

            // Obtén los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const comentario = document.getElementById('comentario').value;
            const fecha = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });

            // Crea un objeto para representar el comentario
            const comentarioObj = {
                nombre,
                comentario,
                fecha,
            };

            // Guarda el comentario en localStorage
            const comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];
            comentariosGuardados.push(comentarioObj);
            localStorage.setItem('comentarios', JSON.stringify(comentariosGuardados));

            // Actualiza la lista de comentarios
            mostrarComentarios();

            // Limpia los campos del formulario
            form.reset();
        };

        // Añadir event listener una sola vez
        const form = document.getElementById('comment-form');
        form.addEventListener('submit', handleFormSubmit);

        // Limpiar el event listener cuando el componente se desmonta
        return () => {
            form.removeEventListener('submit', handleFormSubmit);
        };
    }, []);

    // Función para mostrar los comentarios almacenados en localStorage
    const mostrarComentarios = () => {
        const comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];
        const commentsContainer = document.getElementById('comments-container');
        commentsContainer.innerHTML = ''; // Limpia el contenedor antes de agregar los comentarios

        comentariosGuardados.forEach((comentario) => {
            const newComment = document.createElement('div');
            newComment.className = 'card mb-3';
            newComment.innerHTML = `
                <div class="card-header bg-naranja text-white">
                    <strong>${comentario.nombre}</strong>
                </div>
                <div class="card-body bg-black">
                    <p class="card-text text-white">${comentario.comentario}</p>
                </div>
                <div class="card-footer text-white bg-black">
                    <small>Publicado el ${comentario.fecha}</small>
                </div>
            `;
            commentsContainer.appendChild(newComment);
        });
    };

    return (
        <div>
            <HEADERAPP />
            <section className="container p-5">
                <div className="p-5">
                    <div className="text-center mb-3 p-5">
                        <h1>Opiniones de nuestros clientes</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card mb-3" id="comments-container"></div>
                            <div className="card bg-black">
                                <div className="card-body ">
                                    <h5 className="card-title text-white">Agregar Comentario</h5>
                                    <form id="comment-form">
                                        <div className="mb-3">
                                            <label htmlFor="nombre" className="form-label">Nombre</label>
                                            <input type="text" className="form-control ajustarNombre" id="nombre" placeholder="Ingrese su nombre" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="comentario" className="form-label">Comentario</label>
                                            <textarea className="form-control" id="comentario" rows="4" placeholder="Escriba su comentario"></textarea>
                                        </div>
                                        <button id="boton-enviar" type="submit" className="ajustarB2">Enviar Comentario</button>
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

export default Comments;
