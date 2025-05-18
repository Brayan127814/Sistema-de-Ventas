import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validateFields from "../utils/validarCampos.mjs";
import isPassworSecure from "../utils/passwordSecure.mjs";
import authRepository from "../Repositories/authRepositories.mjs";
import isValidCredentials from "../utils/isLogin.mjs";


class AuthService {
    static async createUser({ data, arrayData }) {
        try {
            //VALIDAR QUE NO VENGAN CAMPOS VACIOS
            let validationResult = validateFields(data, arrayData)
            if (validationResult !== true) {
                return {
                    message: validationResult,
                    status: 400
                }
            }

            //VALIDAR SI LA CONTRASEÑA ES SEGURA

            if (!isPassworSecure(data.password)) {
                return {
                    message: "La contraseña debe tener 8+ caracteres, mayúsculas, minúsculas, números y símbolos (@$!%*?&)",
                    status: 400
                }
            }

            //Encriptar contraseña

            const hashPassword = await bcrypt.hash(data.password, 10)

            const newUser = await authRepository.create({
                ...data,
                password: hashPassword
            })

            return {
                message: 'Usuario creado exitosamente',
                data: newUser,
                status: 201
            }

        } catch (error) {
            console.error("Error en AuthService.createUser:", error);
            return { message: "Error interno del servidor", status: 500 };
        }
    }

    //Servicio de inicio de sesión

    static async LoginPlus(email, password) {
        try {

            // VALIDAR QUE LOS CAMPOS SEAN CORRECTO 

            if (!isValidCredentials(email, password)) {
                return {
                    message: "email o password son incorrectos",
                    status: 400
                }
            }

            //obtener el usuario
            const user = await authRepository.getLoginEmail(email)
            if (!user) {
                return {
                    message: user.message,
                    status: user.status
                }
            }

            //Comparar contraseñas

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {

                return {
                    message: "Contraseña incorrecta",
                    status: 400
                }
            }

            //Generar TOken

            const token = jwt.sign({ id: user.id }, process.env.secretKey, { expiresIn: "1h" })

            return {
                message: "Inicio de sesión exitoso",
                token,
                success: true,
                status: 200
            }


        } catch (error) {

            return {
                message: 'Error al iniciar sesion',
                error: error
            }

        }
    }

    //Obtener todos datos de los empleados
    static async obtenerEmpledos(userID) {

        try {
            console.log('id del usuario', userID)
            if (!userID) {
                return {
                    message: 'Ingresa al sistema',
                    status: 401
                }
            }

            const empleados = await authRepository.obtenerUsuariosConRolEmpleado()
            return {

                message: 'Usuarios registrados en la base de datos',
                data: empleados,
                status: 200,

            }
        } catch (error) {


            return {
                message: 'Error al buscar la lista de usuarios',
                error: error
            }

        }

    }




    // Actualizar el estado de un usuario
    static async updateState(idUser, updateID) {
        try {
            if (!idUser) {
                return {
                    message: 'Ingresa al sistema',
                    status: 401
                };
            }

            const resultado = await authRepository.updateState(updateID);
            return resultado;

        } catch (error) {
            console.error('Error en updateState:', error);
            return {
                message: 'Error del servidor',
                status: 500
            };
        }
    }

    //Obetener el perfil de un usuario en especifico


    static async getUserProfile(userID) {
        try {
            if (!userID) {
                return {
                    message: 'Ingresa al sistema',
                    status: 401
                };
            }

            const userProfile = await authRepository.getUserByID(userID)

            return {
                message:'Perfil de usuario',
                data:userProfile,
                status:200
            }

        } catch (error) {
            return {
                message: "Error al obtener el perfil",
                status: 500
            };
        }
    }
}


export default AuthService