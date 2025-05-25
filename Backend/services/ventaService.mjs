import validateFields from "../utils/validarCampos.mjs";
import ventas from "../Models/ventas.models.venta.mjs";
import productos from "../Models/productos.models.mjs";
import detalle_de_ventas from "../Models/detalleVentas.mjs";

class VentasService {
    static async addVenta(userID, data, requiredFields, products) {
        try {
            //Validar que el eser esté logueado
            if (!userID) {
                return {
                    message: 'Debes ingresar al sistema',
                    status: 401
                }
            }
            //Validar los campos
            let validarCampos = validateFields(data, requiredFields)

            if (validarCampos != true) {
                return {
                    message: validarCampos,
                    status: 401
                }
            }
            let total = 0
            let detalles = [] //guardaremos los detalles del producto  el cual se esta consultando


            for (let producto of products) {
                const productoBD = await productos.findOne({
                    where: { id: producto.id }
                })

                if (!productoBD) {
                    return {
                        message: `EL producto con id ${producto.id} no está disponible`,
                        status: 404
                    }
                }

                //Validar que la cantidad sea validad y que no sea mayor al stock
                if (producto.cantidad <= 0 || producto.cantidad > productoBD.cantidad_en_stock) {

                    return {
                        // "message": "La cantidad solicitada para el producto con ID no es válida. Stock disponible: 63",
                        // "status": 400
                        message: `La cantidad solicitada para el producot con ID ${producto.id} no es valida, Stock disponible ${productoBD.cantidad_en_stock}`
                    }
                }

                //calcular el total
                let subTotal = producto.cantidad * productoBD.precio
                total += subTotal
                detalles.push({
                    productoID: producto.id,
                    cantidad: producto.cantidad,
                    precioUnitario: productoBD.precio,
                    stock: productoBD.cantidad_en_stock
                })
            }

            //CREAR LA VENTA
            const newVenta = await ventas.create({
                ...data,
                total: total,
                id_usuario: userID

            })
            //Registrar los detalles de la venta en la tabla de detalles
            for (let detalle of detalles) {
                await detalle_de_ventas.create({
                    id_venta: newVenta.id,
                    id_producto: detalle.productoID,
                    cantidad: detalle.cantidad,
                    precio_unitario: detalle.precioUnitario
                })
            }

            //Actualizar el estok
            for (let detalle of detalles) {

                let newStock = detalle.stock - detalle.cantidad
                await productos.update(
                    { cantidad_en_stock: newStock },
                    { where: { id: detalle.productoID } }
                )
            }


            return {
                message: 'Venta registrada exitosamente',
                status: 201,
                venta: newVenta
            };
        } catch (error) {
            console.error('Error en addVenta:', error);
            return {
                message: 'Error interno del servidor',
                status: 500
            }
        }
    }
}

export default VentasService;