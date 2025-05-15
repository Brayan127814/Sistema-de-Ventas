function isValidCredentials(email, password) {
    // Validación del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email) && password && password.trim().length >= 8

}

export default isValidCredentials