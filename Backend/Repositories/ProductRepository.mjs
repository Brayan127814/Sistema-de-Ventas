import productos from "../Models/productos.models.mjs";

class ProductRepository {
  static async createProduct(data) {
    try {
      const response = await productos.create(data);
      return response;
    } catch (error) {
      console.error("Error al insertar el producto:", error);
      return {
        message: "No se pudo insertar el producto.",
        error: error.message
      };
    }
  }
}

export default ProductRepository;
