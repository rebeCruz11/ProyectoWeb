import React from 'react';
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
                            <Link to="/inicioApp" className='ajustarB1'>Registrarse</Link>
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