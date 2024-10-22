import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProfileForm = () => {
    const { id } = useParams(); // Obtiene el ID desde la URL si es necesario, aunque no lo uses aquí
    const [profileData, setProfileData] = useState({
        email: '', // Agregamos el campo de email
        edad: '',
        peso: '',
        altura: '',
        objetivo_actual: ''
    });

    // Función para manejar cambios en los campos del formulario
    const handleChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/api/Rperfil', profileData); // Enviar datos al backend
            alert('Perfil guardado con éxito');
        } catch (error) {
            console.error('Error al guardar el perfil:', error);
            alert('Error al guardar el perfil');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                required
                onChange={handleChange}
            />
            <input
                type="number"
                name="edad"
                placeholder="Edad"
                required
                onChange={handleChange}
            />
            <input
                type="number"
                name="peso"
                placeholder="Peso"
                required
                onChange={handleChange}
            />
            <input
                type="number"
                name="altura"
                placeholder="Altura"
                required
                onChange={handleChange}
            />
            <input
                type="text"
                name="objetivo_actual"
                placeholder="Objetivo Actual"
                required
                onChange={handleChange}
            />
            <button type="submit">Guardar Perfil</button>
        </form>
    );
};

export default ProfileForm;
