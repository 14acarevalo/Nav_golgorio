// src/components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

// Importamos íconos
import { FaHome, FaUsers, FaTrophy, FaDollarSign, FaChevronDown, FaChevronUp, FaCalendarAlt } from 'react-icons/fa';
import { GiField } from 'react-icons/gi';
import { MdDocumentScanner } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import logo from '../images/Logo_golgorio.png';  


const Sidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Logo Golgorio" className="sidebar-logo" />
      </div>

      <ul className="sidebar-menu">
        {/* Mi Campo - con submenú */}
        <li>
          <button
            className="menu-item"
            onClick={() => toggleSubMenu('campo')}
          >
            <GiField /> <span>Mi Campo</span>
            {openSubMenu === 'campo' ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openSubMenu === 'campo' && (
            <ul className="submenu">
              <li><a href="#documento"><MdDocumentScanner /> Documento</a></li>
              <li><a href="#cierre"><FaHome /> Cierre</a></li>
              <li><a href="#precios"><RiMoneyDollarCircleLine /> Precios</a></li>
              <li><a href="#campos"><GiField /> Campos</a></li>
              <li><a href="#horarios"><BiTime /> Horarios</a></li>
            </ul>
          )}
        </li>

        {/* Usuarios */}
        <li>
          <a href="#usuarios" className="menu-item">
            <FaUsers /> <span>Usuarios</span>
          </a>
        </li>

        {/* Calendario instalación */}
        <li>
          <a href="#calendario" className="menu-item">
            <FaCalendarAlt /> <span>Calendario</span>
          </a>
        </li>


        {/* Torneos */}
        <li>
          <a href="#torneos" className="menu-item">
            <FaTrophy /> <span>Torneos</span>
          </a>
        </li>

        {/* Contabilidad */}
        <li>
          <a href="#contabilidad" className="menu-item">
            <FaDollarSign /> <span>Contabilidad</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;