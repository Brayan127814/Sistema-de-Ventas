
import usuarios from "../Models/usuarios.models.mjs";
import rol from "../Models/rol.models.mjs";

class authRepository {

    // crear un nuevo usuario
    static async create(data) {
        try {
            const response = await usuarios.create(data)
            return response
        } catch (error) {
            console.error("Error en AuthService.createUser:", error);
            return { message: "Error interno del servidor", status: 500 };
        }
    }

    //obtener email para inicio de sesión
    static async getLoginEmail(email) {
        try {
            const response = await usuarios.findOne({
                where: { email },
                include:{
                    model:rol,
                    attributes:["roleName"]
                }
            })

            return response
        } catch (error) {
            return {
                message: "usuario no encontrado",
                status: 404
            }

        }
    }

    //Obtener todos los usuarios con denominación de empleados
    static async obtenerUsuariosConRolEmpleado() {

        try {
            const response = await usuarios.findAll()
            return response
        } catch (error) {
            return {
                message: "usuario no encontrado",
                status: 404
            }
        }
    }

    //actualizar estado

    static async updateState(idUpdate, nuevoEstado = "Retiro") {
        try {
            const user = await usuarios.findOne({ where: { id: idUpdate } });
            console.log(user)
            if (!user) {
                return {
                    status: 404,
                    message: "Usuario no encontrado"
                };
            }

            await usuarios.update(
                { estado: nuevoEstado },
                { where: { id: idUpdate } }
            );

            return {
                status: 200,
                message: `Estado actualizado a ${nuevoEstado}`
            };

        } catch (error) {
            console.error("Error al actualizar el estado:", error);
            return {
                status: 500,
                message: "Error del servidor"
            };
        }
    }

    static async getUserByID(userID) {
        try {
            let user = await usuarios.findOne({
                where: { id: userID },
                include:{
                    model:rol,
                    attributes:["roleName"]
                }
            })

            if (!user) {
                return {
                    message: 'No se encotrón el usuario en la base de datos',
                    status: 404
                }
            }
            // Convertir a objeto plano
            user = user.get({ plain: true });
            if (user.password) delete user.password

            return user
        } catch (error) {
            return {
                status: 500,
                message: "Error del servidor"
            };
        }
    }


}

export default authRepository