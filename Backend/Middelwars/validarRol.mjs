const validarRol = (allowedRoles) => {
    return (req, res, next) => {
        //Validar que el usuario esté autenticado
        if (!req.user) {
            return res.status(401).json({ message: 'Usuario no autenticado' })
        }

        if (!allowedRoles.includes(req.user.roleName)) {
            return res.status(400).json({ message: 'No tienes permiso para esta acción' })
        }

        next()
    }
}
export default validarRol