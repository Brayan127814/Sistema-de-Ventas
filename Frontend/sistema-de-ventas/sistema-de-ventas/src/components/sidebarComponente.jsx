import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../estilos/sidebar.css';

function Sidebar() {
  const [showCategories, setShowCategories] = useState(false);
  
  const categorias = [
    { id: 1, nombre: "Electrónica" },
    { id: 2, nombre: "Ropa" },
    { id: 3, nombre: "Hogar" },
    { id: 4, nombre: "Deportes" },
    { id: 5, nombre: "Juguetes" },
  ];

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

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

        {/* Sección de categorías con acordeón */}
        <div className="sidebar-category-section">
          <div 
            className="sidebar-link category-toggle" 
            onClick={toggleCategories}
          >
            <span className="link-icon">🏷️</span>
            <span className="link-text">Categorías</span>
            <span className={`toggle-icon ${showCategories ? 'open' : ''}`}>
              {showCategories ? '▼' : '►'}
            </span>
          </div>
          
          <ul className={`categories-list ${showCategories ? 'show' : ''}`}>
            {categorias.map(cat => (
              <li key={cat.id} className="category-item">
                <Link 
                  to={`/app/FetchCategory/${cat.id}`} 
                  className="category-link"
                >
                  {cat.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;