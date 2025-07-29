// src/components/TopNavbar.js
import React, { useState } from 'react';
import './TopNavbar.css';

// Íconos (opcional, si quieres ícono de configuración)
import { FaCogs, FaUser, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';

const TopNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Aquí puedes agregar lógica de cierre de sesión
    console.log('Cerrando sesión...');
    // Ejemplo: redirigir o limpiar sesión
    // window.location.href = '/login';
  };

  return (
    <nav className="top-navbar">
      <div className="navbar-container">
        <h3 className="navbar-title">Golgorio</h3>

        <div className="navbar-profile">
          <button
            className="profile-button"
            onClick={toggleDropdown}
            aria-expanded={showDropdown}
          >
            <FaCogs /> <span>A</span>
          </button>

          {showDropdown && (
            <ul className="dropdown-menu">
              <li>
                <a href="#configuracion">
                  <FaCogs /> Configuración
                </a>
              </li>
              <li>
                <a href="#ayuda">
                  <FaQuestionCircle /> Ayuda
                </a>
              </li>
              <li>
                <button onClick={handleLogout} className="logout-btn">
                  <FaSignOutAlt /> Cerrar sesión
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Overlay para cerrar el menú al hacer clic fuera */}
      {showDropdown && (
        <div
          className="dropdown-overlay"
          onClick={() => setShowDropdown(false)}
        ></div>
      )}
    </nav>
  );
};

export default TopNavbar;