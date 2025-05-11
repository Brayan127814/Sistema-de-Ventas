import connect from "../Confing/config.mjs";
import { DataTypes, DATE } from "sequelize";

const ventas = connect.define("ventas", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha_de_venta: {
        type: DataTypes.DATE,
        allowNull: false

    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    id_usuario: {
        type:DataTypes.INTEGER,
        allowNull:false
    }


})

export default ventas