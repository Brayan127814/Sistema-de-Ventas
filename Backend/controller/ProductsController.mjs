import ProductsService from "../services/productServices.mjs";

class ProductController {
    static async productCreate(req, res) {
        try {
            const userID = req.user.id
            const data = req.body
            const response = await ProductsService.agregarProductos({ userID, data, arrayData: ['nombre', 'descripcion', 'precio', 'cantidad_en_stock', 'categoriaID', 'imgProducto'] })

            return res.status(response.status).json({ message: response.message, data: response.data || null, error: response.error || null })
        } catch (error) {

            return res.status(500).json({ message: 'Error interno del servidor', error: error.message })

        }
    }
}


export default ProductController