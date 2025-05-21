import React from "react";
import Sidebar from "./sidebarComponente";
import Header from "./header";
import { Outlet } from "react-router-dom";
import '../estilos/layout.css';

function Layout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="content-area">
        <Header />
        <div className="content-wrapper">
          <Outlet /> {/* Aquí se renderizan las rutas hijas como RegistrarProducto o FectchPrducts */}
        </div>
      </main>
    </div>
  );
}

export default Layout;
