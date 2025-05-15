import usuarios from "../Models/usuarios.models.mjs";

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
                where: { email }
            })

            return response
        } catch (error) {
            return {
                message: "usuario no encontrado",
                status: 404
            }

        }
    }
}

export default authRepository