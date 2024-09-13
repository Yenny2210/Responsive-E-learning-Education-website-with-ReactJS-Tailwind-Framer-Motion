import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.token);
            alert(`Bienvenido ${data.user.name}`);
        } else {
            alert(data.error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100"> {/* Contenedor centrado */}
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">
                <h2 className="text-2xl font-bold text-center text-dark">Iniciar Sesión</h2>

                <div>
                    <label htmlFor="correo" className="block text-lg font-medium text-gray-700">Correo:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="correo"
                        placeholder="Correo"
                        className="p-3 rounded-xl bg-white w-full border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition duration-300"
                    />
                </div>

                <div>
                    <label htmlFor="contrasena" className="block text-lg font-medium text-gray-700">Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="contrasena"
                        placeholder="Contraseña"
                        className="p-3 rounded-xl bg-white w-full border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition duration-300"
                    />
                </div>

                <button type="submit" className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition duration-300">
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
}

export default Login;
