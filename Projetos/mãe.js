document.getElementById("btnMostrar").addEventListener("click", function() {
    const texto = document.getElementById("textoEscondido");
    
    if (texto.classList.contains("hidden")) {
        texto.classList.remove("hidden"); // Mostra o texto
        this.textContent = "Ocultar poesia"; // Muda o texto do botão
    } else {
        texto.classList.add("hidden"); // Esconde o texto
        this.textContent = "Ver Texto"; // Volta ao texto original
    }
});