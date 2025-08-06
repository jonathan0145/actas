import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { useNavigate, useLocation } from 'react-router-dom';

function AgregarGestion() {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const actaId = query.get('acta');
  const [form, setForm] = useState({
    compromiso: '',
    fecha: '',
    descripcion: '',
    archivo: null,
    usuario: '',
  });
  const [compromisos, setCompromisos] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (actaId) {
      api.get(`compromisos/?acta=${actaId}`).then(res => setCompromisos(res.data));
    }
  }, [actaId]);

  const handleChange = e => {
    const { name, value, files } = e.target;
    setForm(f => ({
      ...f,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!form.archivo) {
      setError('Debes adjuntar un archivo PDF o JPG');
      return;
    }
    if (form.archivo.size > 5 * 1024 * 1024) {
      setError('El archivo no debe superar 5MB');
      return;
    }
    const ext = form.archivo.name.split('.').pop().toLowerCase();
    if (!['pdf', 'jpg', 'jpeg'].includes(ext)) {
      setError('Solo se permiten archivos PDF o JPG');
      return;
    }
    const data = new FormData();
    data.append('compromiso', form.compromiso);
    data.append('fecha', form.fecha);
    data.append('descripcion', form.descripcion);
    data.append('archivo', form.archivo);
    data.append('usuario', form.usuario);

    try {
      await api.post('gestiones/', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setSuccess('Gestión creada correctamente');
      setTimeout(() => navigate(-1), 1200);
    } catch (err) {
      setError('Error al crear la gestión');
    }
  };

  return (
    <div>
      <h2>Agregar Gestión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Compromiso:</label>
          <select
            name="compromiso"
            value={form.compromiso}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un compromiso</option>
            {compromisos.map(c => (
              <option key={c.id} value={c.id}>
                {c.descripcion}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Fecha:</label>
          <input
            type="date"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Archivo (PDF/JPG, máx 5MB):</label>
          <input
            type="file"
            name="archivo"
            accept=".pdf,.jpg,.jpeg"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Usuario (ID):</label>
          <input
            name="usuario"
            value={form.usuario}
            onChange={handleChange}
            required
            placeholder="ID del usuario"
          />
        </div>
        <button type="submit">Crear Gestión</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}
    </div>
  );
}

export default AgregarGestion;