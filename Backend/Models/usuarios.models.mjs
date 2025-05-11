import connect from "../Confing/config.mjs";
import { DataTypes } from "sequelize";

const usuarios = connect.define('usuarios',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        cedula:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                isEmail:true
            }
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                min :8
            }
        },
        rolID:{
            type:DataTypes.INTEGER,
            allowNull: false
        }
    }

)

export default usuarios