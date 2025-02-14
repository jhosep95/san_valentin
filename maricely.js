// Esperar a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", function () {
    
    // Evento para el botón de reproducir música
    const playMusicButton = document.getElementById("play-music");
    const audio = document.getElementById("musica-romantica");

    if (playMusicButton && audio) {
        playMusicButton.addEventListener("click", playMusic);
    }

    // Función para avanzar en los pasos
    function nextStep(step) {
        const currentStep = document.getElementById(`step${step}`);
        const nextStep = document.getElementById(`step${step + 1}`);

        if (currentStep && nextStep) {
            currentStep.classList.add("hidden");
            nextStep.classList.remove("hidden");

            // Iniciar la música al avanzar en los pasos
            playMusic();
        }
    }

    // Función para reproducir la música
    function playMusic() {
        if (audio) {
            audio.play().then(() => {
                console.log("Música reproduciéndose.");
                if (playMusicButton) {
                    playMusicButton.style.display = "none"; // Ocultar el botón tras iniciar la música
                }
            }).catch(error => {
                console.error("Error al reproducir música:", error);
            });
        }
    }

    // Función cuando intenta presionar "No"
    function reject() {
        alert("No hay opción de 'No' 😜. Intenta de nuevo.");
    }

    // Función para generar corazones flotantes
    function createHeart() {
        const heartContainer = document.getElementById("heart-container");

        if (!heartContainer) return;

        const heart = document.createElement("div");
        heart.innerHTML = "❤️"; // Corazón
        heart.classList.add("heart");

        // Posición y tamaño aleatorios
        heart.style.left = Math.random() * 100 + "vw"; 
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Duración aleatoria
        heart.style.fontSize = (Math.random() * 30 + 10) + "px"; // Tamaño aleatorio

        heartContainer.appendChild(heart);

        // Eliminar el corazón después de la animación
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Crear corazones cada 300ms
    setInterval(createHeart, 300);

    // Hacer accesibles las funciones globalmente
    window.nextStep = nextStep;
    window.reject = reject;
});