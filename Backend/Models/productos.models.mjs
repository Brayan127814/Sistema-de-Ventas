import connect from "../Confing/config.mjs";
import { DataTypes, DATE, INTEGER } from "sequelize";



const productos = connect.define("productos",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        cantidad_en_stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imgProducto: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isUrl: {
                    msg: "Debe ser una URL valida"
                }
            },
            defaultValue: "https://images.unsplash.com/photo-1566669437687-7040a6926753?w=400&h=300"
        }

    }
)

export default productos