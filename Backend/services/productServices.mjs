import validateFields from "../utils/validarCampos.mjs";
import ProductRepository from "../Repositories/ProductRepository.mjs";

class ProductsService {
  static async agregarProductos({ userID, data, arrayData }) {
    try {
      // Verificar si el usuario está autenticado
      console.log(userID)
      if (!userID) {
        return {
          message: "⛔ Acceso denegado: debe iniciar sesión para registrar productos.",
          status: 401
        };
      }

      // Validación de campos requeridos
      const resultValidation = validateFields(data, arrayData);
      if (resultValidation !== true) {
        return {
          message: resultValidation,
          status: 400
        };
      }

      // Crear producto en la base de datos
      const newProducto = await ProductRepository.createProduct(data);

      // Si hubo un error en la inserción
      if (newProducto?.message === "No se pudo insertar el producto") {
        return {
          message: "❌ Error al guardar el producto.",
          status: 500
        };
      }

      return {
        message: "✅ Producto registrado correctamente.",
        data: newProducto,
        status: 200
      };
    } catch (error) {
      return {
        message: "❌ Error inesperado al registrar el producto.",
        error: error.message,
        status: 500
      };
    }
  }

  static async getCategoriaByID(userID, categoriaID) {

    try {
      if (!userID) {
        return {
          message: "⛔ Acceso denegado: debe iniciar sesión para registrar productos.",
          status: 401
        }

      }
      const products = await ProductRepository.getProductsByCategory(categoriaID)
      return {
        message: 'Producto encontrado',
        data: products,
        status: 200
      }
    } catch (error) {
      return {
        message: "❌ Error inesperado al obtener los productos.",
        error: error.message,
        status: 500
      };
    }
  }

  //SERVICIO PAR OBTENER TODOS LOS PRODUCOTS
  static async getAllProducts(userID) {
    try {
      if (!userID) {
        return {
          message: "⛔ Acceso denegado: debe iniciar sesión para registrar productos.",
          status: 401
        }
      }

      const listProducts = await ProductRepository.getProducts()

      return {
        message: 'Lista de productos',
        data: listProducts,
        status:200,
      
       
      }
    } catch (error) {

      return {
        message: "❌ Error inesperado al obtener los productos.",
        error: error.message,
        status: 500
      };
    }
  }
}

export default ProductsService;
