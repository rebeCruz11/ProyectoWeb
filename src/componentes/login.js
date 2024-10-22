/*import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';


export const LOGIN = () => {
    return (
        <div class="animated-box" transition-style="in:circle:bottom-right">
            <div className='login-section'>
                <div className="main">
                    <input type="checkbox" id="chk" aria-hidden="true" />
                    <div className="signup">
                        <form>
                            <label className='ajustar2' htmlFor="chk" aria-hidden="true">Registrarse</label>
                            <input className= 'cajas' type="text" name="txt" placeholder="Tú Nombre" required />
                            <input className= 'cajas' type="email" name="email" placeholder="Correo" required />
                            <input className= 'cajas' type="password" name="pswd" placeholder="Contraseña" required />
                            <Link to="/pagar" className='ajustarB1'>Registrarse</Link>
                        </form>
                    </div>
                    <div className="login">
                        <form>
                            <label className='ajustar' htmlFor="chk" aria-hidden="true">Inicio</label>
                            <input className= 'cajas2' type="email" name="email" placeholder="Correo" required />
                            <input className= 'cajas2' type="password" name="pswd" placeholder="Contraseña" required />
                            <Link to="/inicioApp" className='ajustarB2'>Iniciar</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
    */
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './login.css';

export const LOGIN = () => {
    // Estados para manejar los datos de los formularios
    const [registerData, setRegisterData] = useState({ nombre: '', email: '', password: '' });
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const navigate = useNavigate(); // Hook para la navegación

    // Función para manejar cambios en los campos del formulario de registro
    const handleRegisterChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    // Función para manejar cambios en los campos del formulario de login
    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    // Función para manejar el registro de un nuevo usuario
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/register', registerData);
            Swal.fire('Éxito', response.data.message, 'success');
            navigate('/registro'); // Redirige a la ruta principal de la aplicación
        } catch (error) {
            console.error('Error al registrarse:', error);
            Swal.fire('Error', 'Error al registrarse. Intenta de nuevo.', 'error');
        }
    };

    // Función para manejar el inicio de sesión
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/login', loginData);
            if (response.status === 200) {
                Swal.fire('Bienvenido', 'Inicio de sesión exitoso', 'success').then(() => {
                    navigate('/inicioApp'); // Redirige a la ruta principal de la aplicación
                });
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            Swal.fire('Error', 'Error en el inicio de sesión. Credenciales incorrectas.', 'error');
        }
    };

    return (
        <div className="animated-box" transition-style="in:circle:bottom-right">
            <div className='login-section'>
                <div className="main">
                    <input type="checkbox" id="chk" aria-hidden="true" />
                    <div className="signup">
                        <form onSubmit={handleRegister}>
                            <label className='ajustar2' htmlFor="chk" aria-hidden="true">Registrarse</label>
                            <input
                                className='cajas'
                                type="text"
                                name="nombre"
                                placeholder="Tú Nombre"
                                required
                                onChange={handleRegisterChange}
                            />
                            <input
                                className='cajas'
                                type="email"
                                name="email"
                                placeholder="Correo"
                                required
                                onChange={handleRegisterChange}
                            />
                            <input
                                className='cajas'
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                required
                                onChange={handleRegisterChange}
                            />
                            <button type="submit" className='ajustarB1'>Registrarse</button>
                        </form>
                    </div>
                    <div className="login">
                        <form onSubmit={handleLogin}>
                            <label className='ajustar' htmlFor="chk" aria-hidden="true">Inicio</label>
                            <input
                                className='cajas2'
                                type="email"
                                name="email"
                                placeholder="Correo"
                                required
                                onChange={handleLoginChange}
                            />
                            <input
                                className='cajas2'
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                required
                                onChange={handleLoginChange}
                            />
                            <button type="submit" className='ajustarB2'>Iniciar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
