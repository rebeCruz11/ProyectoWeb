import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HEADER } from './header';
import { Footer } from './footer';
import './perfil.css';
import agregar from './images/boton-agregar.png';
import configuracion from './images/configuracion-del-usuario.png';
import notificacion from './images/campana.png';
import editar from './images/editar-texto.png';
import Calendar from './calendar';
import AgregarRutina from './AgregarRutina';
import { Modal, Button } from 'react-bootstrap';

export const PERFIL = () => {
    const [profilePicture, setProfilePicture] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: 'Nombre del Usuario',
        weight: '70 kg',
        targetWeight: '65 kg',
        age: '28 años',
        height: '175 cm'
    });

    const [editForm, setEditForm] = useState(userInfo);
    const [showRoutineEditButtons, setShowRoutineEditButtons] = useState(false);
    const [rutinas, setRutinas] = useState([
        { title: 'Rutina de Cardio', progress: 15 },
        { title: 'Ejercicios G.A.P', progress: 15 }
    ]);

    const [showModal, setShowModal] = useState(false);
    const [rutinaEditada, setRutinaEditada] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleConfigClick = () => {
        setIsEditing(!isEditing);
        setShowRoutineEditButtons(!showRoutineEditButtons);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        setUserInfo(editForm);
        setIsEditing(false);
        setShowRoutineEditButtons(false);
    };

    const handleAddRutina = (nuevaRutina) => {
        setRutinas(prevRutinas => [...prevRutinas, nuevaRutina]);
    };

    const handleEditRutina = (rutina) => {
        setRutinaEditada(rutina);
        setShowModal(true);
    };

    const handleSaveRutina = (rutina) => {
        if (rutinaEditada) {
            setRutinas(prevRutinas =>
                prevRutinas.map(r =>
                    r.title === rutinaEditada.title ? rutina : r
                )
            );
            setRutinaEditada(null);
        } else {
            handleAddRutina(rutina);
        }
    };

    const handleModalShow = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

    return (
        <div>
            <HEADER />
            <div className='espacio'></div>
            <div className='perfil-container'>
                {/* Sección Izquierda - Foto de perfil y Datos del Usuario */}
                <div className='left-section'>
                    <div className='profile-picture-section'>
                        <img
                            src={profilePicture || 'https://via.placeholder.com/150'}
                            alt="Profile"
                            className='profile-picture'
                        />
                        <div className='info-user'>
                            <button className='edit-button' onClick={() => document.getElementById('fileInput').click()}>
                                <img className="edicion" src={editar} alt="Edicion de imagen" />
                            </button>
                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                                accept="image/*"
                            />
                            <div className='profile-info'>
                                {isEditing ? (
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={editForm.name}
                                            onChange={handleChange}
                                            className="form-control my-2"
                                        />
                                        <input
                                            type="text"
                                            name="weight"
                                            value={editForm.weight}
                                            onChange={handleChange}
                                            className="form-control my-2"
                                        />
                                        <input
                                            type="text"
                                            name="targetWeight"
                                            value={editForm.targetWeight}
                                            onChange={handleChange}
                                            className="form-control my-2"
                                        />
                                        <input
                                            type="text"
                                            name="age"
                                            value={editForm.age}
                                            onChange={handleChange}
                                            className="form-control my-2"
                                        />
                                        <input
                                            type="text"
                                            name="height"
                                            value={editForm.height}
                                            onChange={handleChange}
                                            className="form-control my-2"
                                        />
                                        <button className='btn btn-primary' onClick={handleSave}>Guardar</button>
                                    </div>
                                ) : (
                                    <div>
                                        <p className='profile-name py-2'>{userInfo.name}</p>
                                        <div className='profile-stats'>
                                            <p className='py-2'><strong>Peso:</strong> {userInfo.weight}</p>
                                            <p className='py-2'><strong>Objetivo de Peso:</strong> {userInfo.targetWeight}</p>
                                            <p className='py-2'><strong>Edad:</strong> {userInfo.age}</p>
                                            <p className='py-2'><strong>Altura:</strong> {userInfo.height}</p>
                                        </div>
                                    </div>
                                )}
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

                    <div className='rutinas'>
                        {rutinas.map((rutina, index) => (
                            <div className='rutina-small-card py-5' key={index}>
                                <h5 className='rutina-title'>{rutina.title}</h5>
                                <p className='rutina-progress'><strong>Progreso:</strong> {rutina.progress}%</p>
                                <div className='progress'>
                                    <div
                                        className='progress-bar'
                                        role='progressbar'
                                        style={{ width: `${rutina.progress}%` }}
                                    >
                                        {rutina.progress}%
                                    </div>
                                </div>
                                {showRoutineEditButtons && (
                                    <Button variant='link' onClick={() => handleEditRutina(rutina)}>
                                        Editar
                                    </Button>
                                )}
                            </div>
                        ))}
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
                        <button className='agregar-submenu-button' onClick={handleModalShow}>
                            <img className="agregar" src={agregar} alt="Agregar" />

                        </button>
                        <h1>Agregar</h1>
                    </div>
                    <div className='submenu-boton'>
                        <button className='configuracion-submenu-button' onClick={handleConfigClick}>
                            <img className="configuracion" src={configuracion} alt="Configuración" />

                        </button>
                        <h1>Configuracion</h1>
                    </div>
                    <div className='submenu-boton'>
                        <button className='notificacion-submenu-button'>
                            <img className="noti" src={notificacion} alt="Notificación" />

                        </button>
                        <h1>Notificaciones</h1>
                    </div>
                </div>
            </div>

            {/* Modal para Agregar/Editar Rutina */}
            <AgregarRutina
                show={showModal}
                handleClose={handleModalClose}
                onSaveRutina={handleSaveRutina}
                rutinaEditada={rutinaEditada}
            />

            <Footer />
        </div>
    );
};
