
import AuthService from "../services/authServices.mjs";



class AuthController {
    static async adduser(req, res) {
        try {

            const data = req.body
            const response = await AuthService.createUser({ data, arrayData: ["nombre", "cedula", "email", "password", "rolID"] })
            return res.status(response.status).json({
                message: response.message,
                data: response.data || null,
                error: response.error || null
            })

        } catch (error) {
            return res.status(500).json({ message: "Error interno del servidor " })
        }
    }
    //controlador par inicio de sesión
    static async KeyEntry(req, res) {
        try {
            const { email, password } = req.body
            const response = await AuthService.LoginPlus(email, password)

            return res.status(response.status).json(
                {
                    message: response.message,
                    token: response.token,
                    success: response.success
                }
            )
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    }

    static async getEmpleados(req, res) {
        try {
            const userID = req.user.id
            const response = await AuthService.obtenerEmpledos(userID)

            return res.status(response.status).json({
                message: response.message,
                data: response.data || null,
                error: response.error || null
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    }

    static async stateUpdate(req, res) {
        try {
            const idUser = req.user.id
            const updateID = req.params.id

            const response = await AuthService.updateState(idUser, updateID)

            return res.status(response.status).json({
                message: response.message,
                error: response.error || null
            })
        } catch (error) {
            return res.status(500).json({
                message: 'error interno del servidor',
                error: error.message
            })
        }
    }

    static async getprofileById(req, res) {
        try {
            const userID = req.user.id
            const response = await AuthService.getUserProfile(userID)
            return res.status(response.status).json({
                message: response.message,
                data: response.data || null,
                error: response.error || null
            })
        } catch (error) {

            return res.status(500).json({
                message: 'error interno del servidor',
                error: error.message
            })
        }

    }
}

    


export default AuthController