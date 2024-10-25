document.getElementById('btn-login').addEventListener('click', function() {
    // Obtener los valores de los inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Limpiar mensajes de error anteriores
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    let valid = true;

    // Validar el correo electrónico
    if (!validateEmail(email)) {
        document.getElementById('email-error').textContent = 'Por favor, ingresa un correo electrónico válido.';
        valid = false;
    }

    // Validar la contraseña
    if (password.length < 8) {
        document.getElementById('password-error').textContent = 'La contraseña debe tener al menos 8 caracteres.';
        valid = false;
    }

    // Si todos los campos son válidos, se puede proceder con la lógica de inicio de sesión
    if (valid) {
        alert('Iniciando sesión...');
    }
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Agregar evento para alternar la visibilidad de la contraseña
document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const passwordType = passwordInput.getAttribute('type');

    // Cambiar el tipo de input y el icono
    if (passwordType === 'password') {
        passwordInput.setAttribute('type', 'text');
        this.textContent = '🙈'; // Cambiar a "ocultar"
    } else {
        passwordInput.setAttribute('type', 'password');
        this.textContent = '👁️'; // Cambiar a "mostrar"
    }
});