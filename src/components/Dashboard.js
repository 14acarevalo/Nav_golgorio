// src/components/Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ marginLeft: '260px', padding: '20px', width: 'calc(100% - 260px)' }}>
        <h1>Bienvenido al Panel de Administración de Golgorio</h1>
        <p>Esto es un borrador de prueba y de ejemplo.</p>
      </main>
    </div>
  );
};

export default Dashboard;