import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin }) {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
        const res = await axios.post('http://127.0.0.1:8000/api/token/', {
            correo: correo,
            password,
        });
      localStorage.setItem('token', res.data.access);
      onLogin();
    } catch {
      setError('Credenciales inválidas');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={correo} onChange={e => setCorreo(e.target.value)} placeholder="Correo" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
      <button type="submit">Iniciar sesión</button>
      {error && <div>{error}</div>}
    </form>
  );
}

export default Login;