const url = "http://localhost:5000/usuarios";

class ServicesAuth {
    static async login(email, password) {
        try {
            const response = await fetch(`${url}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            console.log(data);

            if (data.success) {
                localStorage.setItem("token", data.token);
                return data;
            } else {
                throw new Error(data.message || 'Credenciales incorrectas');
            }

        } catch (error) {
            console.error("Error: ", error);
            throw new Error(error.message || "Error de inicio de sesión");
        }
    }
}

export default ServicesAuth;
