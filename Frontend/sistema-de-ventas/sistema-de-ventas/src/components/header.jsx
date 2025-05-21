import React from 'react';
import '../estilos/header.css';

const Header = () => {
  return (
    <header className="sales-header">
      <div className="header-logo">
        <svg viewBox="0 0 100 100" className="logo-svg">
          <circle cx="50" cy="50" r="45" fill="#2b6cb0" />
          <path 
            d="M30 40 L50 70 L70 40 M40 50 L60 50" 
            stroke="#ebf4ff" 
            strokeWidth="6" 
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
      <h1 className="header-title">Sistema de Ventas</h1>
    </header>
  );
};

export default Header;