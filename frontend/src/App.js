import /*React,*/ { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import ActasPanel from './components/ActasPanel';
import ActaDetalle from './components/ActaDetalle';
import AgregarGestion from './components/AgregarGestion';

function App() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    if (isAuth && window.location.pathname === '/login') {
      window.location.replace('/actas');
    }
  }, [isAuth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login onLogin={() => setIsAuth(true)} />} />
        <Route path="/actas" element={isAuth ? <ActasPanel /> : <Navigate to="/login" />} />
        <Route path="/actas/:id" element={isAuth ? <ActaDetalle /> : <Navigate to="/login" />} />
        <Route path="/gestiones/nueva" element={isAuth ? <AgregarGestion /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/actas" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;