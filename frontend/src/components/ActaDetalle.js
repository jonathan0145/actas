import React, { useEffect, useState } from 'react';
import { api } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

function ActaDetalle() {
  const { id } = useParams();
  const [acta, setActa] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`actas/${id}/`).then(res => setActa(res.data));
  }, [id]);

  if (!acta) return <div>Cargando...</div>;

  const descargarPDF = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(acta.pdf, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      window.open(url, '_blank');
    } else {
      alert('No tienes permiso para ver el archivo.');
    }
  };

 
  const verArchivoGestion = async (archivoUrl) => {
    const token = localStorage.getItem('token');
    
    const url = archivoUrl.startsWith('http') ? archivoUrl : `http://127.0.0.1:8000${archivoUrl}`;
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (response.ok) {
      const blob = await response.blob();
      const fileUrl = window.URL.createObjectURL(blob);
      window.open(fileUrl, '_blank');
    } else {
      alert('No tienes permiso para ver el archivo.');
    }
  };

  const handleAgregarGestion = () => {
    navigate(`/gestiones/nueva?acta=${id}`);
  };

  return (
    <div>
      <h2>{acta.titulo}</h2>
      <p>Estado: {acta.estado}</p>
      <p>Fecha: {acta.fecha}</p>
      <p>
        PDF: <button onClick={descargarPDF}>Ver PDF</button>
      </p>
      <h3>Compromisos</h3>
      <ul>
        {acta.compromisos.map(c => (
          <li key={c.id}>
            {c.descripcion} - Responsable: {c.responsable}
      
            {c.gestiones && c.gestiones.length > 0 && (
              <ul>
                {c.gestiones.map((g, idx) => (
                  <li key={`${g.id}-${idx}`}>
                    {g.descripcion} ({g.fecha})
                    {g.archivo && (
                      <button onClick={() => verArchivoGestion(g.archivo)}>
                        Ver PDF/JPG
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <button onClick={handleAgregarGestion}>Agregar gestión</button>
    </div>
  );
}

export default ActaDetalle;