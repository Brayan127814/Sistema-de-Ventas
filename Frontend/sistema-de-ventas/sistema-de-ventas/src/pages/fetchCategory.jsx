import { useEffect, useState } from "react";
import ProductServis from "../services/product.services.mjs";
import { useParams } from "react-router-dom";
import "../estilos/categorias.css"; // <-- Archivo de estilos nuevo

function FetchCategory() {
    const { categoriaID } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fechProductCategory = async () => {
            try {
                const response = await ProductServis.getproductCategoryByID(categoriaID);
                if (response.data) {
                    setProductos(response.data || []);
                } else {
                    setError("Productos no disponibles");
                }
            } catch (error) {
                setError("Error al cargar los productos");
                console.log('ERROR EN:', error);
            } finally {
                setLoading(false);
            }
        };
        fechProductCategory();
    }, [categoriaID]);

    if (error) {
        return <div className="error-message"><p>{error}</p></div>;
    }

    if (loading) {
        return <div className="loading-message"><p>Cargando productos</p></div>;
    }

    const handleVenderClick = async (productoID) => {

    }

    return (
        <div className="category-container">
            <h2 className="category-header">Categoría #{categoriaID}</h2>

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
                                <button onClick={() => handleVenderClick(producto.id)} className="button-vender">vender</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FetchCategory;