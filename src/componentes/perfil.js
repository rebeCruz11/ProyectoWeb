import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { HEADERAPP } from './headerApp';
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
        name: '',
        weight: '',
        targetWeight: '',
        age: '',
        height: ''
    });

    const [editForm, setEditForm] = useState(userInfo);
    const [showRoutineEditButtons, setShowRoutineEditButtons] = useState(false);
    const [rutinas, setRutinas] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [rutinaEditada, setRutinaEditada] = useState(null);
    const userId = 1; // Aquí puedes pasar el `id` del usuario logueado

    // Cargar datos del perfil del usuario cuando el componente se monta
    useEffect(() => {
        axios.get(`/api/perfil/${userId}`)
            .then(response => {
                if (response.data) {
                    const { nombre, peso, objetivo_peso, edad, altura, foto } = response.data;
                    setUserInfo({
                        name: nombre || 'Nombre del Usuario',
                        weight: `${peso} kg`,
                        targetWeight: `${objetivo_peso} kg`,
                        age: `${edad} años`,
                        height: `${altura} cm`
                    });
                    setProfilePicture(foto || null);
                    setEditForm({
                        name: nombre || 'Nombre del Usuario',
                        weight: `${peso} kg`,
                        targetWeight: `${objetivo_peso} kg`,
                        age: `${edad} años`,
                        height: `${altura} cm`
                    });
                }
            })
            .catch(error => {
                console.error("Error al cargar el perfil del usuario:", error);
                Swal.fire('Error', 'Hubo un problema al cargar los datos del perfil.', 'error');
            });
    }, [userId]);

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
        const updatedProfile = {
            nombre: editForm.name,
            peso: editForm.weight.replace(' kg', ''),
            objetivo_peso: editForm.targetWeight.replace(' kg', ''),
            edad: editForm.age.replace(' años', ''),
            altura: editForm.height.replace(' cm', ''),
            foto: profilePicture
        };

        axios.put(`/api/perfil/${userId}`, updatedProfile)
            .then(() => {
                setUserInfo(editForm);
                setIsEditing(false);
                setShowRoutineEditButtons(false);
                Swal.fire('Éxito', 'Los datos del perfil se han actualizado correctamente.', 'success');
            })
            .catch(error => {
                console.error("Error al guardar el perfil:", error);
                Swal.fire('Error', 'Hubo un problema al guardar los datos del perfil.', 'error');
            });
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
            <HEADERAPP />
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
                            <div className='benefits'>
                                <p><strong>Beneficios:</strong></p>
                                <ul>
                                    <li>Mejora la condición física</li>
                                    <li>Tonificación muscular</li>
                                    <li>Pérdida de peso</li>
                                </ul>
                            </div>
                        </div>

                        <div className='plan-small-card py-5 plan-nutricion'>
                            <h5 className='plan-title'>Plan de Nutrición</h5>
                            <p className='plan-price'><strong>Precio:</strong> $90</p>
                            <div className='benefits'>
                                <p><strong>Beneficios:</strong></p>
                                <ul>
                                    <li>Pérdida de peso</li>
                                    <li>Salud cardiovascular</li>
                                    <li>Alimentación equilibrada</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='right-section'>
                    <div className='info-section'>
                        <div className='icon-buttons'>
                            <button className='icon-button'>
                                <img src={configuracion} alt="configuración" onClick={handleConfigClick} />
                            </button>
                            <button className='icon-button'>
                                <img src={notificacion} alt="notificación" />
                            </button>
                        </div>
                        <button className='edit-rutina-button' onClick={handleModalShow}>
                            <img className="boton-agregar-rutina" src={agregar} alt="Agregar rutina" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal para agregar o editar rutinas */}
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{rutinaEditada ? 'Editar Rutina' : 'Agregar Rutina'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AgregarRutina onSave={handleSaveRutina} rutina={rutinaEditada} />
                </Modal.Body>
            </Modal>

            <Footer />
        </div>
    );
};
