
let user = {
    email: "ejemplo@gmail.com",
    password: "123456"
};


const loginView = document.getElementById("login-view");
const recoveryView = document.getElementById("recovery-view");
const forgotPasswordLink = document.getElementById("forgot-password-link");
const backToLoginLink = document.getElementById("back-to-login");
const btnRecover = document.getElementById("btn-recover");

document.getElementById('btn-login').addEventListener('click', function() {
   
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    let valid = true;

    
    if (!validateEmail(email)) {
        document.getElementById('email-error').textContent = 'Por favor, ingresa un correo electrónico válido.';
        valid = false;
    }

    
    if (password.length < 8) {
        document.getElementById('password-error').textContent = 'La contraseña debe tener al menos 8 caracteres.';
        valid = false;
    }

    
    if (valid) {
        if (email === user.email && password === user.password) {
            alert('Inicio de sesión exitoso.');
        } else {
            document.getElementById('password-error').textContent = 'Credenciales incorrectas.';
        }
    }
});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const passwordType = passwordInput.getAttribute('type');

   
    if (passwordType === 'password') {
        passwordInput.setAttribute('type', 'text');
        this.textContent = '🙈'; 
    } else {
        passwordInput.setAttribute('type', 'password');
        this.textContent = '👁️';
    }
});

// Navegar a la vista de recuperación
forgotPasswordLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginView.style.display = "none";
    recoveryView.style.display = "block";
});

// Volver a la vista de inicio de sesión
backToLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    recoveryView.style.display = "none";
    loginView.style.display = "block";
});

// Validar y actualizar contraseña en la vista de recuperación
btnRecover.addEventListener("click", () => {
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const newPasswordError = document.getElementById("new-password-error");
    const confirmPasswordError = document.getElementById("confirm-password-error");

    newPasswordError.textContent = "";
    confirmPasswordError.textContent = "";

    // Validar longitud de la nueva contraseña
    if (newPassword.length < 8) {
        newPasswordError.textContent = "La contraseña debe tener al menos 8 caracteres.";
        return;
    }

    // Validar coincidencia de contraseñas
    if (newPassword !== confirmPassword) {
        confirmPasswordError.textContent = "Las contraseñas no coinciden.";
        return;
    }

    //Actualizar el objeto usuario
    user.password = newPassword;
    alert("Contraseña actualizada con éxito.");
    recoveryView.style.display = "none";
    loginView.style.display = "block";
});
