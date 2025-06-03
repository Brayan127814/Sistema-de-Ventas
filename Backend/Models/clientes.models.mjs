import { DataTypes } from "sequelize";
import connect from "../Confing/config.mjs";

const clientes = connect.define("clientes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    documento: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            len: [10, 10] // exactamente 10 caracteres
        }
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    }
   
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
    tableName: 'clientes' // útil si quieres un nombre fijo
});

export default clientes;
