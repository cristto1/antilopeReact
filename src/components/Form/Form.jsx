import React from "react";
import { useState } from "react";
import classes from "./Form.module.css";

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        phoneNumber: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const requiredFields = ['firstName', 'lastName', 'email', 'address', 'city', 'phoneNumber'];
        const missingFields = requiredFields.filter(field => !formData[field]);
        if (missingFields.length > 0) {
            alert(`Por favor complete los siguientes campos obligatorios: ${missingFields.join(', ')}`);
            return;
        }
        onSubmit(formData);
        setFormSubmitted(true);
    };

    return (
        <div className={classes.form}>
            <h2>Completa tus datos</h2>
            {formSubmitted ? (
                <p>¡Gracias por tu compra! Pronto recibirás tu pedido.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Apellido:
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Correo electrónico:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Dirección:
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Ciudad:
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Teléfono:
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <button type="submit">Enviar</button>
                </form>
            )}
        </div>
    );
};

export default Form;
