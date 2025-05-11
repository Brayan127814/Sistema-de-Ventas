import exress from 'express'
import connect from './Backend/Confing/config.mjs'
const PORT = process.env.PORT || 4000

import rol from './Backend/Models/rol.models.mjs'
import usuarios from './Backend/Models/usuarios.models.mjs'
import productos from './Backend/Models/productos.models.mjs'
import ventas from './Backend/Models/ventas.models.venta.mjs'

import './Backend/Models/index.mjs'


const app = exress()
app.use(exress.json())



//Montar el servidor

const init = async ()=>{
    try{
            await connect.sync(
                {
                    force:false
                }
            )

            console.log('Conexion succebol')
            app.use(PORT,()=>{
                console.log('app corriendo en el servidor ' , PORT)
            })
    }catch(error){
        console.error('No si pudo sincronizar la base de datos')

    }
}

init()
