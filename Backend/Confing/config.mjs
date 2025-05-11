import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

dotenv.config()

//Verificar si se están cargando las variables de entorno

console.log(process.env.HOST)
console.log(process.env.DB_NAME)
console.log(process.env.USER)
console.log(process.env.PASSWORD)


//ESTABLECER LA CONEXIÓN

const connect = new Sequelize(

    process.env.DB_NAME,
    process.env.USER,
    process.env.PASSWORD,
    {
        dialect: "mysql",
        host: process.env.HOST
    }
)

//Validar la conexión 
const validarConexion = async () => {
    try {
        await connect.authenticate()
        console.log('Conexion establecida')
    } catch (error) {
        console.error("No se pudo establecer la conexion")

    }
}

validarConexion()
export default connect