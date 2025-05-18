import rol from "./rol.models.mjs";
import usuarios from "./usuarios.models.mjs";
import detalle_de_ventas from "./detalleVentas.mjs";
import ventas from "./ventas.models.venta.mjs";
import productos from "./productos.models.mjs";
import categoria from "./categoria.model.mjs";

/*
 Un rol puede tener muchos usuarios
 Un usuario solo puede tener un rol
 Relación de uno a muchos
*/

rol.hasMany(usuarios, {
    foreignKey: "rolID",
    onDelete: "CASCADE"
});

usuarios.belongsTo(rol, {
    foreignKey: "rolID",
    onDelete: "CASCADE"
});

/*
 Un usuario puede tener muchas ventas
 Una venta está asociada a un usuario
 Relación de uno a muchos
*/

usuarios.hasMany(ventas, {
    foreignKey: "id_usuario"
});

ventas.belongsTo(usuarios, {
    foreignKey: "id_usuario"
});

/*
 Relación muchos a muchos entre ventas y productos mediante detalle_de_ventas
*/

ventas.belongsToMany(productos, {
    through: detalle_de_ventas,
    foreignKey: "id_venta"
});

productos.belongsToMany(ventas, {
    through: detalle_de_ventas,
    foreignKey: "id_producto"
});

/*
 Relaciones directas con la tabla intermedia detalle_de_ventas
*/

detalle_de_ventas.belongsTo(ventas, {
    foreignKey: "id_venta"
});

detalle_de_ventas.belongsTo(productos, {
    foreignKey: "id_producto"
});

ventas.hasMany(detalle_de_ventas, {
    foreignKey: "id_venta"
});

productos.hasMany(detalle_de_ventas, {
    foreignKey: "id_producto"
});


//
categoria.hasMany(productos,{
    foreignKey:"categoriaID"
})
productos.belongsTo(categoria,{
        foreignKey:'categoriaID'
})