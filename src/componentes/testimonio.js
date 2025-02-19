import React, { useState, useEffect } from "react";
import { HEADER } from './header.js';
import { Footer } from './footer.js';
import './testimonio.css';
import fondo from '../componentes/imgs/fondoladrillo.jpg';
import salud from '../componentes/imgs/imagen saludable.png';
import chica1 from '../componentes/imgs/chica1.jpg';
import chica2 from '../componentes/imgs/chica2.jpg';
import chica3 from '../componentes/imgs/chica3.jpg';
import chica4 from '../componentes/imgs/hombre2.jpg';
import doctores from '../componentes/imgs/doctores-removebg-preview.png';

const Testimonio = () => {
    const [showModal, setShowModal] = useState(false);
    const [newTestimonial, setNewTestimonial] = useState({
        name: '',
        text: '',
        image: ''
    });
    const [testimonials, setTestimonials] = useState([]);

    // Cargar testimonios del localStorage al montar el componente
    useEffect(() => {
        const storedTestimonials = localStorage.getItem('testimonials');
        if (storedTestimonials) {
            setTestimonials(JSON.parse(storedTestimonials));
        } else {
            // Si no hay testimonios en el localStorage, usa algunos por defecto
            setTestimonials([
                { name: "Carmen Ramos", text: "Desde que comencé con sus rutinas mi vida cambió totalmente, ¡ahora me gusta mucho más mi estilo de vida!", image: chica1 },
                { name: "Fatima Dada", text: "Desde que comencé con sus rutinas mi vida cambió totalmente, ¡ahora me gusta mucho más mi estilo de vida!", image: chica2 },
                { name: "Karla Marjorie", text: "Desde que comencé con sus rutinas mi vida cambió totalmente, ¡ahora me gusta mucho más mi estilo de vida!", image: chica3 },
                { name: "Patricio Leon", text: "Desde que comencé con sus rutinas mi vida cambió totalmente, ¡ahora me gusta mucho más mi estilo de vida!", image: chica4 }
            ]);
        }
    }, []);

    // Función para convertir archivos en Base64
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTestimonial(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const base64Image = await convertToBase64(file);
            setNewTestimonial({
                ...newTestimonial,
                image: base64Image // Guardamos la imagen como Base64
            });
        }
    };

    const handleAddTestimonial = () => {
        const updatedTestimonials = [...testimonials, newTestimonial];
        setTestimonials(updatedTestimonials);
        setNewTestimonial({ name: '', text: '', image: '' });
        setShowModal(false);

        // Guardar los testimonios en el localStorage
        localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
    };

    return (
        <div className="testimonio-body">
            <HEADER />
            <div className="testimonio-banner-container">
                <img src={fondo} alt="Banner" />
                <div className="testimonio-banner-overlay">
                    <h1 className="testimonio-banner-title">Únete a la gran cantidad de personas beneficiadas con nuestros hábitos saludables de vida! <br /></h1>
                    <img src={salud} alt="Salud" />
                </div>
            </div>

            <div className="testimonio-contenedor-inferior">
                <div className="testimonio-titles text-center"><h1>Construimos vidas felices</h1></div>

                <div className="testimonio-contenedor-cards">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonio-contenedor2">
                            <img src={testimonial.image} alt={testimonial.name} />
                            <p className="testimonio-card-title">{testimonial.name}</p>
                            <p className="testimonio-card-subtitle">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={() => setShowModal(true)} className="btn-add-testimonio">
                Agregar Testimonio
            </button>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Agregar nuevo testimonio</h2>
                        <input
                            type="text"
                            name="name"
                            value={newTestimonial.name}
                            onChange={handleInputChange}
                            placeholder="Nombre"
                        />
                        <textarea
                            name="text"
                            value={newTestimonial.text}
                            onChange={handleInputChange}
                            placeholder="Testimonio"
                        />
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                        {newTestimonial.image && (
                            <div>
                                <p>Previsualización de la imagen:</p>
                                <img src={newTestimonial.image} alt="Previsualización" style={{ width: '100px', height: '100px' }} />
                            </div>
                        )}
                        <button onClick={handleAddTestimonial}>Agregar</button>
                        <button onClick={() => setShowModal(false)}>Cancelar</button>
                    </div>
                </div>
            )}

            <div className="testimonio-contenedor3">
                <img src={doctores} alt="Doctores" />
                <div className="testimonio-text-nutris">
                    <h1>¡Conoce a nuestro equipo de nutricionistas!</h1>
                    <p>Profesional de la salud que tiene una formación especial en dietética y nutrición...</p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Testimonio;