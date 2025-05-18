import { DataTypes } from "sequelize";
import connect from "../Confing/config.mjs";

const categoria = connect.define('categorias',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
})

export default categoria