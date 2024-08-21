import React from 'react'
import { HEADER } from './header.js';

export const PAGINAINICIO = () => {
    <HEADER/>
    let nombre = "Proyecto";
    let web = "nuestroProyecto.com";

    let intereses = [
        "intereses 1", 
        "intereses 1", 
        "intereses 1"
    ];
    const cambiarNombre = (nuevonombre) =>{
        nombre = nuevonombre;
    }
    return(
        <div>
            <h1>PAGINA INICIO </h1>
            <p>MI PRIMERA PRUEBA</p>
            <p>Nombre: <strong className={nombre.length >=4 ? 'verde' : 'rojo'}>{nombre} </strong></p>
            <p>Web: {web}</p>
            <button onClick={e=>cambiarNombre("NuestroP")}/>
            <h2>Intereses:</h2>
            <ul>
                {
                    intereses.map(intereses => {
                        return (<li>
                            {intereses}
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}