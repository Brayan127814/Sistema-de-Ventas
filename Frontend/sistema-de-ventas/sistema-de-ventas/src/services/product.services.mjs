

const url = "http://localhost:5000/productos"
class ProductServis {
    static async addProduct(nombre, descripcion, precio, cantidad_en_stock, categoriaID, imgProducto) {
        const token = localStorage.getItem("token")
        if (!token) {
            throw new Error('No has iniciado sesión')
        }

        try {
            const response = await fetch(`${url}/create`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }, body: JSON.stringify({ nombre, descripcion, precio, cantidad_en_stock, categoriaID, imgProducto })
            })

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}))
                throw new Error(errorData || "No se pudo registrar el producto")
            }

            return await response.json()
        } catch (error) {
            throw new Error(`Error inesperado ${error}`)
        }
    }

    //COSULTAR TODOS LOS PRODUCTOS
    static async getAllProductos() {
        const token = localStorage.getItem("token")
        if (!token) {
            throw new Error('No has iniciado sesión')
        }

        try {
            const response = await fetch(`${url}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}))
                throw new Error(errorData || "no hay productos disponibles")
            }

            return await response.json()

        } catch (error) {
            throw new Error(`Error inesperado ${error.message}`)
        }
    }

    //Obtener productos por categoria

    static async getproductCategoryByID(categoriaID) {
        const token = localStorage.getItem("token")
        if (!token) {
            throw new Error('No has iniciado sesión')
        }

        try {

            const response = await fetch(`${url}/categoria/${categoriaID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}))
                throw new Error(errorData || 'Productos no disponibles')
            }

            return await response.json()

        } catch (error) {
            throw new Error(`Error inesperado ${error.message}`)
        }
    }

}

export default ProductServis