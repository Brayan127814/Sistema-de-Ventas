import React, { useState } from "react";
import ProductServis from "../services/product.services.mjs";
import Sidebar from "../components/sidebarComponente";

function RegistrarProducto() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad_en_stock, setStock] = useState("");
  const [categoriaID, setCategoriaID] = useState("");
  const [imgProducto, setImg] = useState("");
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");

  const categorias = [
    { id: 1, nombre: "Electrónica" },
    { id: 2, nombre: "Ropa" },
    { id: 3, nombre: "Hogar" },
    { id: 4, nombre: "Deportes" },
    { id: 5, nombre: "Juguetes" },
  ];

  const handleSumbit = async (event) => {
    event.preventDefault();
    setError("");
    setExito("");

    try {
      const nuevoProducto = await ProductServis.addProduct(
        nombre,
        descripcion,
        parseFloat(precio),
        parseInt(cantidad_en_stock),
        parseInt(categoriaID),
        imgProducto
      );

      setNombre("");
      setDescripcion("");
      setPrecio("");
      setStock("");
      setCategoriaID("");
      setImg("");
      setExito("Producto registrado con éxito ✅");
      console.log("Producto registrado:", nuevoProducto);
    } catch (error) {
      setError(error.message || "Error al registrar el producto ❌");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-auto p-0">
       
        </div>

        {/* Contenido principal */}
        <div className="col px-5 px-md-5 mt-4">
          <h2 className="mb-4 text-center">Registrar nuevo producto</h2>

          {error && <div className="alert alert-danger">{error}</div>}
          {exito && <div className="alert alert-success">{exito}</div>}

          <form onSubmit={handleSumbit} className="mx-auto">
            {/* Primera fila: Nombre y Descripción */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Descripción:</label>
                <textarea
                  className="form-control"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  required
                  rows="1"
                />
              </div>
            </div>

            {/* Segunda fila: Precio y Stock */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Precio:</label>
                <input
                  type="number"
                  className="form-control"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  required
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Cantidad en stock:</label>
                <input
                  type="number"
                  className="form-control"
                  value={cantidad_en_stock}
                  onChange={(e) => setStock(e.target.value)}
                  required
                  min="0"
                />
              </div>
            </div>

            {/* Tercera fila: Categoría e Imagen */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Categoría:</label>
                <select
                  className="form-select"
                  value={categoriaID}
                  onChange={(e) => setCategoriaID(e.target.value)}
                  required
                >
                  <option value="">Selecciona una categoría</option>
                  {categorias.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Imagen del producto (URL):</label>
                <input
                  type="text"
                  className="form-control"
                  value={imgProducto}
                  onChange={(e) => setImg(e.target.value)}
                />
              </div>
            </div>

            {/* Botón de submit */}
            <div className="row">
              <div className="col-12">
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Registrar Producto
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrarProducto;