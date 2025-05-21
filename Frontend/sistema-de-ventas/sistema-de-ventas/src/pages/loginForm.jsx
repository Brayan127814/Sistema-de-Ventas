import ServicesAuth from "../services/aseAuthServices.mjs";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../estilos/login.style.css";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setLoading(true);
        try {
            const response = await ServicesAuth.login(email, password);
          
            setEmail("");
            setPassword("");
            navigate('/app')
            console.log(response)
        } catch (error) {

            setError(error.message || 'Error al iniciar sesión');
        }
        setLoading(false);
    };

    return (
        <div className="login-container">
            <div className="login-form-container">
                <h2>Inicia Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            required
                            value={password}
                            disabled={loading}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-button" disabled={loading}>
                        {loading ? "Cargando..." : "Iniciar sesión"}
                    </button>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default LoginForm;