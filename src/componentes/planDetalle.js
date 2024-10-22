import React from 'react';
import './planDetalle.css';
import gym from './images/girl3.png';
import { Link } from 'react-router-dom';



const Plans = () => {
return (
    <div>
        <section class="p-5 bg-darkdark text-white ">
                <h1 style={{fontSize: '2rem', textAlign: 'center', padding: '25px'}}>Binevenido a tu compra</h1>
                    <div class="container bor">
                        <div class="d-flex justify-content-between align-items-center">
                            <div className="col-md-6 bg-dark">
                            <img className="d-block w-100" src={gym} alt="Fitness" />
                            </div>
                            <div class="m-2 p-3 ml-5">
                                <h1 class="text-orange">Elige el Plan Perfecto para Ti</h1>
                                <p>En ELITE FITNESS, ofrecemos una variedad de planes diseñados para adaptarse a tus necesidades y objetivos específicos. Ya sea que busques flexibilidad, acceso a múltiples sedes o beneficios adicionales como el acceso al Smart SPA, tenemos el plan ideal para ti.</p>
                                <p>Al elegir uno de nuestros planes, te aseguras de tener acceso a las mejores instalaciones y al apoyo de nuestro equipo de profesionales, quienes están dedicados a ayudarte a alcanzar tus metas de fitness.</p>
                                <p>¡No esperes más! Elige tu plan hoy y comienza tu transformación con ELITE FITNESS.</p>
                            </div>
                        </div>
                    </div>
                </section>
        <div className="page-container">
        {/* Sección de planes */}
            <div className="plan-details">
            <div className="plan-card">
                <h2>PLAN FIT</h2>
                <p>Inscripción: $3.99 + IVA</p>
                <p>Mantenimiento: $39.00/año + IVA</p>
                <p>Fidelidad: 12 meses</p>
                <p>$18.49 + IVA</p>
                <p>Entra en la sede seleccionada sin restricción de horario.</p>
                <input type="checkbox" />
                </div>


                <div className="plan-card">
                <h2>PLAN FIT</h2>
                <p>Inscripción: $3.99 + IVA</p>
                <p>Mantenimiento: $39.00/año + IVA</p>
                <p>Fidelidad: 12 meses</p>
                <p>$18.49 + IVA</p>
                <p>Entra en la sede seleccionada sin restricción de horario.</p>
                <input type="checkbox" />
                </div>

                <div className="plan-card">
                <h2>PLAN SMART</h2>
                <p>Inscripción: $5.99 + IVA</p>
                <p>Mantenimiento: $39.00/año + IVA</p>
                <p>Fidelidad: Sin permanencia</p>
                <p>$19.99 + IVA</p>
                <p>Entra en la sede seleccionada sin restricción de horario.</p>
                <input type="checkbox" />
                </div>
            </div>

            {/* Sección de detalles de la compra */}
            <div className="compra-details">
                <h1 className="compra-details-header">Detalles de la compra</h1>
                <p>Gimnasio: Elite Fitness Santa Ana</p>
                <Link to="/pagar"><button class="buttonCompra"> Pagar</button></Link>

                <div className="details-pago">
                <h2>Mensualidad</h2>
                <p>1er PAGO: $28.48 + IVA</p>
                <p>2° PAGO: $25.99 + IVA</p>
                <p>3er PAGO: $64.99 + IVA</p>
                <p>...y así sucesivamente cada tres meses...</p>
                </div>
            </div>
        </div>

    </div>
    
    );
}

export default Plans;
