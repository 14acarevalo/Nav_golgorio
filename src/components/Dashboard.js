// src/components/Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar'; // ✅ Importa el nuevo navbar

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />

      {/* Barra superior fija */}
      <TopNavbar />

      {/* Contenido principal */}
      <main style={{
        marginLeft: '220px',
        marginTop: '60px', 
        padding: '20px',
        width: `calc(100% - 220px)`,
        minHeight: '100vh',
        backgroundColor: '#f9f9fb'
      }}>
        <h1>Bienvenido al Panel de Golgorio</h1>
        <p>Borrador de ejemplo.</p>
      </main>
    </div>
  );
};

export default Dashboard;