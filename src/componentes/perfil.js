import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HEADERAPP } from './headerApp';
import { Footer } from './footer';
import './perfil.css';
import agregar from './images/boton-agregar.png';
import configuracion from './images/configuracion-del-usuario.png';
import notificacion from './images/campana.png';
import editar from './images/editar-texto.png';
import Calendar from './calendar';

export const PERFIL = () => {
    // Estado para almacenar la información del perfil
    const [perfil, setPerfil] = useState([]);
    const [profilePicture, setProfilePicture] = useState(null);
    // Extraer perfilId del localStorage y codificar el valor
    const perfilId = encodeURIComponent(localStorage.getItem('userID'));

    useEffect(() => {
        // Obtener el ID del usuario previamente guardado en localStorage
        const previousUserId = localStorage.getItem('previousUserID');

        // Si el usuario ha cambiado, eliminar la imagen de perfil del localStorage
        if (previousUserId && previousUserId !== perfilId) {
            localStorage.removeItem('profileImage'); // Eliminar la imagen
            setProfilePicture(null); // Resetear la imagen de perfil
        }

        // Guardar el nuevo ID de usuario como el anterior para futuras comparaciones
        localStorage.setItem('previousUserID', perfilId);

        // Cargar imagen de perfil desde localStorage si existe
        const storedImage = localStorage.getItem('profileImage');
        if (storedImage) {
            setProfilePicture(storedImage);
        }

        if (perfilId) {
            fetch(`http://localhost:3001/api/profile?id=${perfilId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al cargar los datos del perfil');
                    }
                    return response.json();
                })
                .then(data => setPerfil(data))
                .catch(error => console.error('Error al cargar los datos del perfil:', error));
        }
    }, [perfilId]);

    // Función para convertir archivos en Base64
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const base64Image = await convertToBase64(file);
            // Guardar la imagen en el estado
            setProfilePicture(base64Image);
            // Guardar la imagen en localStorage
            localStorage.setItem('profileImage', base64Image);
        }
    };

    return (
        <div>
            <HEADERAPP />
            <div className='espacio'></div>
            <div className='perfil-container'>
                {/* Sección Izquierda - Foto de perfil y Datos del Usuario */}
                <div className='left-section'>
                    <div className='left-section'>
                        <div className='profile-picture-section'>
                            <div className='info-user'>
                                <div className='profile-picture-section'>
                                    <img
                                        src={profilePicture || 'https://via.placeholder.com/150'}
                                        alt="Profile"
                                        className='profile-picture'
                                    />
                                </div>
                                <button className='edit-button' onClick={() => document.getElementById('fileInput').click()}>
                                    <img className="edicion" src={editar} alt="Edicion de imagen" />
                                </button>
                                <input
                                    type="file"
                                    id="fileInput"
                                    style={{ display: 'none' }}
                                    onChange={handleImageUpload}
                                    accept="image/*"
                                />

                                <div className='profile-info'>
                                    <div>
                                        <p className='profile-name '>{perfil.nombre || 'Nombre del Usuario'}</p>
                                        <div className='profile-stats'>
                                            <p className='py-2'><strong>Peso:</strong> {perfil.peso || 'XX kg'}</p>
                                            <p className='py-2'><strong>Objetivo de Peso:</strong> {perfil.objetivo_actual || 'XX kg'}</p>
                                            <p className='py-2'><strong>Edad:</strong> {perfil.edad || 'XX años'}</p>
                                            <p className='py-2'><strong>Altura:</strong> {perfil.altura || 'XX cm'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección Central - Estadísticas y Rutinas */}
                    <div className='center-section'>
                        <div className='estadistica'>
                            <div className='calendar-container'>
                                <Calendar />
                            </div>
                        </div>
                        <div className='small-cards'>
                            <div className='plan-small-card py-5 plan-ejercicios'>
                                <h5 className='plan-title'>Plan de Ejercicios</h5>
                                <p className='plan-price'><strong>Precio:</strong> $150</p>
                                <p className='plan-description'><strong>Descripción:</strong> Un plan completo para mejorar tu fuerza y resistencia, con entrenamientos adaptados a tus necesidades.</p>
                                <p className='plan-duration'><strong>Duración:</strong> 3 meses</p>
                            </div>
                            <div className='receta-small-card py-5 receta'>
                                <h5 className='receta-name'>Ensalada de Quinoa</h5>
                                <p className='receta-description'>Una ensalada fresca y nutritiva rica en proteínas y fibra.</p>
                                <button className='receta-button'>Ver</button>
                            </div>
                        </div>
                    </div>

                    {/* Sección Derecha - Submenú */}
                    <div className='submenu-section'>
                        <div className='submenu-boton'>
                            <button className='configuracion-submenu-button'>
                                <img className="configuracion" src={configuracion} alt="Configuración" />
                            </button>
                            <h1>Configuración</h1>
                        </div>
                        <div className='submenu-boton'>
                            <button className='notificacion-submenu-button'>
                                <img className="noti" src={notificacion} alt="Notificación" />
                            </button>
                            <h1>Notificaciones</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};