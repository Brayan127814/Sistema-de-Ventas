import VentasService from "../services/ventaService.mjs";


class VentaController {
    static async registerVenta(req, res) {
        try {
            const userID = req.user.id;
            const data = req.body;
            const products = req.body.products;

            const requiredFields = ["fecha_de_venta"];

            const response = await VentasService.addVenta(userID, data, requiredFields, products);

            res.status(response.status || 200).json(response);
        } catch (error) {
            res.status(500).json({ message: "Error interno del servidor", error: error.message });
        }
    }

    static async getyVentas(req, res) {
        try {
            const userID = req.user.id
            const roleName= req.user.roleName
            const response = await VentasService.getAllventas(userID, roleName)
            return res.status(response.status).json({
                message: response.message,
                data: response.data || null,
                error: response.error || null
            })
        } catch (error) {
            res.status(500).json({ message: "Error interno del servidor", error: error.message })

        }
    }
}


export default VentaController