// Esperar a que el contenido del DOM se cargue antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar el elemento con la clase "autora"
    const autora = document.querySelector(".autora");

    // Agregar un evento de clic a la autora
    autora.addEventListener("click", function () {
        // Aplicar transiciones y efectos de animación
        autora.style.transition = "clip-path 1.5s ease, background-image 1.5s ease, transform 0.8s ease";
        autora.style.clipPath = "circle(150% at center)";
        autora.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?sky,mountains')";
        autora.style.transform = "scale(1.2)";

        // Redirigir a otra página después de 1.5 segundos
        setTimeout(() => {
            window.location.href = "paginaprincipal.html";
        }, 1500);
    });
});

// Segunda función: Manejo del carrusel de imágenes
document.addEventListener("DOMContentLoaded", function () {
    let index = 0; // Índice de la imagen actual
    const images = document.querySelectorAll(".carousel-container img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const themeButton = document.getElementById("toggle-theme");

    // Función para mostrar la imagen correspondiente
    function showImage(i) {
        images.forEach(img => img.style.display = "none"); // Ocultar todas las imágenes
        images[i].style.display = "block"; // Mostrar solo la imagen actual
    }

    // Evento para avanzar a la siguiente imagen
    nextButton.addEventListener("click", function () {
        index = (index + 1) % images.length;
        showImage(index);
    });

    // Evento para retroceder a la imagen anterior
    prevButton.addEventListener("click", function () {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    });

    // Evento para alternar entre modo oscuro y claro
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
    });

    // Mostrar la primera imagen al cargar la página
    showImage(index);
});

// Tercera función: Cambiar el color de las actividades al pasar el mouse
$(document).ready(function () {
    $("#activity-list li").hover(
        function () { $(this).css("color", "#ff6347"); }, // Cambia el color a naranja al pasar el cursor
        function () { $(this).css("color", ""); } // Restaura el color original al salir
    );
});

// Cuarta función: Botón de cambio de tema (duplicado, puede eliminarse si ya existe arriba)
document.getElementById("themeToggle")?.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});
