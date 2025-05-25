import ventas from "../Models/ventas.models.venta.mjs";
import detalle_de_ventas from "../Models/detalleVentas.mjs";
import productos from "../Models/productos.models.mjs";
class VentasRepository {
    static async addVenta(data) {
        try {
            const response = await ventas.create(data)
            return response

        } catch (error) {
            console.error("Error al registrar la venta:", error);
            return {
                message: "No se pudo registrar la venta.",
                error: error.message
            };
        }
    }

    //Obtener todas ventas

    static async allVentas(userID, roleName, page = 1, pageSize = 10) {
        try {
            const whereClause = roleName === 'admin' ? {} : { id_usuario: userID }

            const offset = (page - 1) * pageSize //calculo del desplazamiento
            const { count, rows } = await ventas.findAndCountAll({
                where: whereClause,
                offset: offset,
                limit: pageSize,
                include: {
                    model: detalle_de_ventas,
                    attributes: ['cantidad'],
                    include: {
                        model: productos,
                        attributes: ["nombre", "precio"]
                    }
                },
                attributes: ["total"]
            })

            return {
                totalVentas: count,
                totalPaginas: Math.ceil(count / pageSize),
                paginaActual: page,
                ventas: rows
            }
        } catch (error) {
            return {
                message: 'Ventas no disponibles',
                error: error.message
            }
        }
    }
}

export default VentasRepository