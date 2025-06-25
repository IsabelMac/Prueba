import { useState } from 'react';
import './stylesregister.css';


function Register() {

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        userid:'',
        password: ''
    });

    /*const [submittedData, setSubmittedData] = useState(null);*/

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://mock.apidog.com/m1/920738-903315-default/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Error al enviar datos');
            }

            const data = await response.json();
            console.log('Respuesta de la API:', data);
            alert('Registro exitoso');

            /*setSubmittedData(formData);*/

            setFormData({
                nombre: '',
                email: '',
                password: '',
                userid: '',
            });

        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un problema al registrar');
        }
    };
    return (
        <div>
            <img src="src/assets/laesquinalogo.svg" alt="logo La Esquina"/>
            <div/>
            <div className="container">
                <p> ¡Crea tu cuenta!</p>
                <div className="row"></div>
                <div>

                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                            <label>Nombre:</label>
                            <input
                                className="textoin"
                                type="text"
                                name="nombre"
                                /*placeholder="Ingrese su nombre"*/
                                required
                                value={formData.nombre}
                                onChange={handleChange} />
                        </div>
                        <div>
                            <label>Correo:</label>
                            <input className="textoin"
                                   type="email"
                                   name="email"
                                /*placeholder="Ingrese su correo"*/
                                   required
                                   value={formData.email}
                                   onChange={handleChange} />
                        </div>
                        <div>
                            <label>Contraseña:</label>
                            <input className="textoin"
                                   type="password"
                                   name="password"
                                /*placeholder="Cree una contraseña"*/
                                   required
                                   value={formData.password}
                                   onChange={handleChange} />
                        </div>
                        <div>
                            <label>Usuario:</label>
                            <input className="textoin"
                                   type="text"
                                   name="userid"
                                /*placeholder="Username"*/
                                   required
                                   value={formData.userid}
                                   onChange={handleChange} />
                        </div>
                        <button type="submit">Registrarme</button>
                    </form>
                    <div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Register;