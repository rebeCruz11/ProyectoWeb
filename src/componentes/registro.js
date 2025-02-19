import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
    const [profileData, setProfileData] = useState({
        email: '',
        edad: '',
        peso: '',
        altura: '',
        objetivo_actual: ''
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [touched, setTouched] = useState({});
    const navigate = useNavigate(); // Inicializa el hook de navegación

    const validateField = (name, value) => {
        switch (name) {
            case 'email':
                return !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? 'Email inválido' : '';
            case 'edad':
                return value < 16 || value > 100 ? 'La edad debe estar entre 16 y 100 años' : '';
            case 'peso':
                return value < 30 || value > 250 ? 'El peso debe estar entre 30 y 250 kg' : '';
            case 'altura':
                return value < 100 || value > 250 ? 'La altura debe estar entre 100 y 250 cm' : '';
            case 'objetivo_actual':
                return value.length < 10 ? 'Describe tu objetivo en al menos 10 caracteres' : '';
            default:
                return '';
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({ ...prev, [name]: value }));

        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
    };

    const isFormValid = () => {
        const newErrors = {};
        Object.keys(profileData).forEach(key => {
            const error = validateField(key, profileData[key]);
            if (error) newErrors[key] = error;
        });
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid()) {
            setTouched(Object.keys(profileData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
            return;
        }

        setIsLoading(true);
        try {
            await axios.post('http://localhost:3001/api/Rperfil', profileData); // Enviar datos al backend
            alert('Perfil guardado con éxito');
            navigate('/login');
        } catch (error) {
            console.error('Error al guardar el perfil:', error);
            alert('Error al guardar el perfil');
        } finally {
            setIsLoading(false);
        }
    };

    const customStyles = {
        formContainer: {
            backgroundColor: '#0a0a0a',
            border: '2px solid #FF4500',
            borderRadius: '15px',
            padding: '2rem',
            color: 'white',
            maxWidth: '600px',
            margin: '2rem auto',
            boxShadow: '0 0 20px rgba(255, 69, 0, 0.2)'
        },
        input: {
            backgroundColor: '#2c2c2c',
            border: '2px solid #FF4500',
            color: 'white',
            transition: 'all 0.3s ease'
        },
        button: {
            backgroundColor: '#FF4500',
            border: 'none',
            transition: 'all 0.3s ease'
        },
        title: {
            color: '#FF4500',
            textTransform: 'uppercase',
            letterSpacing: '2px'
        },
        gradientTop: {
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle at top right, rgba(255, 69, 0, 0.2), transparent)',
            borderRadius: '0 0 0 100%',
            pointerEvents: 'none'
        },
        gradientBottom: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle at bottom left, rgba(255, 69, 0, 0.2), transparent)',
            borderRadius: '0 100% 0 0',
            pointerEvents: 'none'
        }
    };

    return (
        <div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '20px' }}>
            <div style={customStyles.formContainer} className="position-relative">
                <div style={customStyles.gradientTop}></div>
                <div style={customStyles.gradientBottom}></div>

                <div className="text-center mb-4">
                    <h1 style={customStyles.title} className="display-5 fw-bold">
                        Elite Fitness
                    </h1>
                    <p className="text-white-50">Comienza tu viaje hacia la excelencia, crea tu perfil con nosotros </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                        <input
                            type="email"
                            className={`form-control ${touched.email && errors.email ? 'is-invalid' : touched.email ? 'is-valid' : ''}`}
                            id="email"
                            name="email"
                            style={customStyles.input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            placeholder="tu@email.com"
                        />
                        {touched.email && errors.email && (
                            <div className="invalid-feedback">{errors.email}</div>
                        )}
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="edad" className="form-label">Edad</label>
                            <input
                                type="number"
                                className={`form-control ${touched.edad && errors.edad ? 'is-invalid' : touched.edad ? 'is-valid' : ''}`}
                                id="edad"
                                name="edad"
                                style={customStyles.input}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                placeholder="Años"
                            />
                            {touched.edad && errors.edad && (
                                <div className="invalid-feedback">{errors.edad}</div>
                            )}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="peso" className="form-label">Peso</label>
                            <input
                                type="number"
                                className={`form-control ${touched.peso && errors.peso ? 'is-invalid' : touched.peso ? 'is-valid' : ''}`}
                                id="peso"
                                name="peso"
                                style={customStyles.input}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                placeholder="kg"
                            />
                            {touched.peso && errors.peso && (
                                <div className="invalid-feedback">{errors.peso}</div>
                            )}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="altura" className="form-label">Altura</label>
                        <input
                            type="number"
                            className={`form-control ${touched.altura && errors.altura ? 'is-invalid' : touched.altura ? 'is-valid' : ''}`}
                            id="altura"
                            name="altura"
                            style={customStyles.input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            placeholder="cm"
                        />
                        {touched.altura && errors.altura && (
                            <div className="invalid-feedback">{errors.altura}</div>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="objetivo_actual" className="form-label">Objetivo Actual</label>
                        <input
                            type="text"
                            className={`form-control ${touched.objetivo_actual && errors.objetivo_actual ? 'is-invalid' : touched.objetivo_actual ? 'is-valid' : ''}`}
                            id="objetivo_actual"
                            name="objetivo_actual"
                            style={customStyles.input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            placeholder="Describe tu objetivo fitness"
                        />
                        {touched.objetivo_actual && errors.objetivo_actual && (
                            <div className="invalid-feedback">{errors.objetivo_actual}</div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="btn btn-lg w-100"
                        style={customStyles.button}
                        disabled={isLoading || !isFormValid()}
                    >
                        {isLoading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" ></span>
                                Guardando...
                            </>
                        ) : (
                            'Unirse a Elite Fitness'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;
