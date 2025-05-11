import connect from "../Confing/config.mjs";
import { DataTypes } from "sequelize";

//Modelo de roles de usuarios
const rol = connect.define("rol", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roleName: {
        type: DataTypes.STRING,

        allowNull: false
    },
    descripción: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    timestamps: true
})

export default rol