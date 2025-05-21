import productos from "../Models/productos.models.mjs";
import categoria from "../Models/categoria.model.mjs";
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

  //Filtrar productos por categoria

  static async getProductsByCategory(categoriaID) {
    try {
      const response = await productos.findAll({
        where: {
          categoriaID
        }, include: {
          model: categoria,
          attributes: ['nombre']
        }
      })
      if (response.length === 0) {
        return {
          message: "No hay productos con esta categoría"
        };
      }

      return response

    } catch (error) {
      return {
        message: "No hay productos con esta categoria",
        error: error.message
      };
    }
  }

  //Obtener todos los productos

  static async getProducts() {
    try {
      const response = await productos.findAll(
        {
          include: {
            model: categoria,
            attributes: ['nombre']
          }
        }
      )

      if (response.length === 0) {
        return {
          message: "No hay productos"
        }
      }

      return response
    } catch (error) {

      return {
        message: "La base de datos esta vacia",
        error: error.message

      }

    }
  }
}


export default ProductRepository;
