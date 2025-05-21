import React from "react";
import { Link } from "react-router-dom";
import '../estilos/sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h3 className="sidebar-title">Menú Principal</h3>
      </div>
      <nav className="sidebar-nav">
        <Link to="/app/RegistrarProducto" className="sidebar-link">
          <span className="link-icon">📝</span>
          <span className="link-text">Registrar productos</span>
        </Link>
        <Link to="/app/FectchPrducts" className="sidebar-link">
          <span className="link-icon">📦</span>
          <span className="link-text">Todos los productos</span>
        </Link>
        <Link to="/app/categoria" className="sidebar-link">
          <span className="link-icon">🏷️</span>
          <span className="link-text">Categorías</span>
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;