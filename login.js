document.addEventListener("DOMContentLoaded", function () {
    let registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirm-password").value;

            // Validar campos vacíos
            if (!name || !email || !password || !confirmPassword) {
                alert("Todos los campos son obligatorios.");
                return;
            }

            // Validar email con una expresión regular
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Ingrese un correo electrónico válido.");
                return;
            }

            // Verificar que las contraseñas coincidan
            if (password !== confirmPassword) {
                alert("Las contraseñas no coinciden.");
                return;
            }

            // Obtener usuarios guardados en LocalStorage o inicializar lista vacía
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Verificar si el usuario ya está registrado
            if (users.some(user => user.email === email)) {
                alert("Este correo ya está registrado. Intenta iniciar sesión.");
                return;
            }

            // Guardar el nuevo usuario (con codificación de la contraseña)
            let newUser = { name, email, password: btoa(password) }; // btoa() codifica en base64
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));

            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            window.location.href = "login.html"; // Redirigir al login
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value;

            if (!email || !password) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            // Obtener la lista de usuarios desde LocalStorage
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Buscar el usuario en la lista
            let validUser = users.find(user => user.email === email && user.password === btoa(password));

            if (!validUser) {
                alert("Correo o contraseña incorrectos.");
                return;
            }

            alert(`Bienvenido, ${validUser.name}`);
            window.location.href = "paginaprincpial.html"; // Redirigir a la página principal
        });
    }
});

