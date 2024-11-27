// Base de datos simulada de usuarios
const users = [
    { email: "admin@braxelgames.com", password: "admin123", role: "admin" },
    { email: "user@braxelgames.com", password: "user1234", role: "user" }
];

// Referencias a las vistas y botones
const loginView = document.getElementById("login-view");
const adminView = document.getElementById("admin-view");
const userView = document.getElementById("user-view");
const btnLogin = document.getElementById("btn-login");
const togglePassword = document.getElementById("toggle-password");
const logoutAdmin = document.getElementById("logout-admin");
const logoutUser = document.getElementById("logout-user");

// Mostrar/ocultar contraseña
togglePassword.addEventListener("click", () => {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "👁️";
    }
});

// Función de inicio de sesión
btnLogin.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    // Resetear mensajes de error
    emailError.textContent = "";
    passwordError.textContent = "";

    // Validar entrada
    if (!validateEmail(email)) {
        emailError.textContent = "Por favor, ingresa un correo electrónico válido.";
        return;
    }
    if (password.length < 8) {
        passwordError.textContent = "La contraseña debe tener al menos 8 caracteres.";
        return;
    }

    // Validar credenciales
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        passwordError.textContent = "Credenciales incorrectas.";
        return;
    }

    // Navegar según el rol
    if (user.role === "admin") {
        loginView.style.display = "none";
        adminView.style.display = "block";
    } else if (user.role === "user") {
        loginView.style.display = "none";
        userView.style.display = "block";
    }
});

// Cerrar sesión
logoutAdmin.addEventListener("click", () => {
    adminView.style.display = "none";
    loginView.style.display = "block";
});

logoutUser.addEventListener("click", () => {
    userView.style.display = "none";
    loginView.style.display = "block";
});

// Validar formato de correo electrónico
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
