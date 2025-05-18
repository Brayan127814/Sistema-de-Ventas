import jwt from 'jsonwebtoken'
import rol from '../Models/rol.models.mjs'
import usuarios from '../Models/usuarios.models.mjs'

const autenticarToken = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if (!token) {
        return res.status(403).json({ message: 'No hay token' })
    }


    jwt.verify(token, process.env.secretKey, async (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token no válido" })
        }

        try {
            const userRol = await usuarios.findOne({
                where: { id: user.id },
                include: {
                    model: rol,
                    attributes: ["roleName"]
                },
                attributes: ["nombre", "rolID"]
            })

            if (!userRol) {
                return res.status(404).json({ message: "Usuario no encontrado" })
            }

            const rolName = userRol.rol?.roleName
            if (!rolName) {
                return res.status(403).json({ message: "Usuario no tiene un rol permitido" })
            }

            console.log('Rol del usuario:', rolName)

            req.user = {
                id:user.id,
                nombre: userRol.nombre,
                rolID: userRol.rolID,
                roleName: rolName
            }

            next()
        } catch (error) {
            console.error('Error al verificar el rol del usuario:', error.message)
            res.status(500).json({ mensaje: 'Error del servidor' })
        }
    })
}

export default autenticarToken
