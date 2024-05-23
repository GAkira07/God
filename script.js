// Função para exibir uma mensagem de alerta ao clicar no botão
function mostrarAlerta() {
    alert("Você clicou no botão!");
}

// Função para mostrar ou ocultar a galeria de imagens
function alternarGaleria() {
    var galeria = document.getElementById("galeria");
    if (galeria.style.display === "none") {
        galeria.style.display = "block";
    } else {
        galeria.style.display = "none";
    }
}
