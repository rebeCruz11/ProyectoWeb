// AgregarRutina.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AgregarRutina = ({ show, handleClose, onSaveRutina, rutinaEditada }) => {
    const [rutina, setRutina] = useState({
        title: '',
        progress: 0
    });

    // Si hay una rutina para editar, carga sus datos
    useEffect(() => {
        if (rutinaEditada) {
            setRutina(rutinaEditada);
        } else {
            setRutina({ title: '', progress: 0 });
        }
    }, [rutinaEditada]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRutina(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        onSaveRutina(rutina); // Llama a la función de guardar rutina del componente padre
        handleClose(); // Cierra el modal
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{rutinaEditada ? 'Editar Rutina' : 'Agregar Nueva Rutina'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formRutinaTitulo">
                        <Form.Label>Título de la Rutina</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={rutina.title}
                            onChange={handleChange}
                            placeholder="Ejemplo: Rutina de Cardio"
                        />
                    </Form.Group>

                    <Form.Group controlId="formRutinaProgreso">
                        <Form.Label>Progreso Inicial (%)</Form.Label>
                        <Form.Control
                            type="number"
                            name="progress"
                            value={rutina.progress}
                            onChange={handleChange}
                            placeholder="Ejemplo: 10"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {rutinaEditada ? 'Guardar Cambios' : 'Guardar'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AgregarRutina;
