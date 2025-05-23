import Sidebar from "../components/sidebarComponente";
import ProductServis from "../services/product.services.mjs";
import React, { useEffect, useState } from "react";
import "../estilos/fetchProductos.css"; // Importamos los estilos
import { useNavigate } from "react-router-dom";
function FetchProducts() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const products = await ProductServis.getAllProductos();
                if (products) {
                    setProductos(products.data || []);
                } else {
                    setError("Productos no disponibles");
                }
            } catch (error) {
                console.error(error);
                setError('Error al cargar los productos');
            } finally {
                setLoading(false);
            }
        };

        obtenerProductos();
    }, []);

    if (loading) return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Cargando información...</p>
        </div>
    );

    if (error) return <div className="error-message">{error}</div>;

    //Manejo de boton para vender el producto

    const handleVenderClick = async (productoID) => {

    }

    return (
        <div className="products-container">

            <div className="products-content">
                <h2 className="products-title">Productos Disponibles</h2>
                <div className="products-grid">
                    {productos.map((producto, index) => (
                        <div className="product-card" key={index}>
                            {producto.imgProducto && (
                                <div className="product-image-container">
                                    <img
                                        src={producto.imgProducto}
                                        alt={producto.nombre}
                                        className="product-image"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/300x200?text=Imagen+no+disponible";
                                        }}
                                    />
                                </div>
                            )}
                            <div className="product-details">
                                <h3 className="product-name">{producto.nombre}</h3>
                                <p className="product-description">{producto.descripcion}</p>
                                <div className="product-info">
                                    <p><span className="info-label">Precio:</span> ${producto.precio}</p>
                                    <p><span className="info-label">Stock:</span> {producto.cantidad_en_stock}</p>
                                    <p><span className="info-label">Categoría:</span> {producto.categoria?.nombre || "Sin categoría"}</p>
                                </div>
                                <div className="detail-price">
                                    <span className="price"> Precio: {producto.precio}</span>
                                    <button onClick={()=>handleVenderClick(producto.id)} className="button-vender">vender</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FetchProducts;