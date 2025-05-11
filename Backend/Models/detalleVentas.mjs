import connect from "../Confing/config.mjs";
import { DataTypes, Deferrable } from "sequelize";


const detalle_de_ventas= connect.define("detalle_de_ventas",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    id_venta:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    id_producto:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    cantidad:{
        type:DataTypes.INTEGER,
        allowNull:false
    }, 
    precio_unitario:{
        type:DataTypes.FLOAT,
        allowNull:false
    }
})

export default detalle_de_ventas