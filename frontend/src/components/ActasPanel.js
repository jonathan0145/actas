import React, { useEffect, useState } from 'react';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';

function ActasPanel() {
  const [actas, setActas] = useState([]);
  const [filtros, setFiltros] = useState({ titulo: '', estado: '', fecha: '' });
  const navigate = useNavigate();

  useEffect(() => {
    let query = '?';
    Object.entries(filtros).forEach(([k, v]) => {
      if (v) query += `${k}=${v}&`;
    });
    api.get(`actas/${query}`).then(res => setActas(res.data));
  }, [filtros]);

  return (
    <div>
      <h2>Panel de Actas</h2>
      <input placeholder="Título" onChange={e => setFiltros(f => ({ ...f, titulo: e.target.value }))} />
      <input placeholder="Estado" onChange={e => setFiltros(f => ({ ...f, estado: e.target.value }))} />
      <input type="date" onChange={e => setFiltros(f => ({ ...f, fecha: e.target.value }))} />
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Estado</th>
            <th>Fecha</th>
            <th>Compromisos</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          {actas.map((a, idx) => (
            <tr key={`${a.id}-${idx}`}>
              <td>{a.titulo}</td>
              <td>{a.estado}</td>
              <td>{a.fecha}</td>
              <td>{a.compromisos.length}</td>
              <td>
                <button onClick={() => navigate(`/actas/${a.id}`)}>Ver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActasPanel;