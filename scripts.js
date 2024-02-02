document.addEventListener("DOMContentLoaded", function() {
    var paletaElement = document.getElementById("paleta");
    adicionarCoresVariadas(paletaElement, 1012);
});

function adicionarCoresVariadas(paletaElement, quantidade) {
    for (var i = 0; i < quantidade; i++) {
        var corHexadecimal = gerarCorVariada();
        var corElement = criarElementoCor(corHexadecimal);
        paletaElement.appendChild(corElement);
    }
}

function gerarCorVariada() {
    var letras = "0123456789ABCDEF";
    var cor = "#";

    for (var i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }

    return cor;
}

function criarElementoCor(cor) {
    var corElement = document.createElement("div");
    corElement.className = "cor";
    corElement.style.backgroundColor = cor;
    corElement.setAttribute("onclick", "mostrarDemonstracao('" + cor + "')");

    return corElement;
}

function mostrarCor() {
    var inputCor = document.getElementById("color-input").value;
    var corDemonstracao = document.getElementById("cor-demonstracao");

    corDemonstracao.style.backgroundColor = inputCor;
}

function mostrarDemonstracao(cor) {
    var corDemonstracao = document.getElementById("cor-demonstracao");
    
    corDemonstracao.style.backgroundColor = cor;
    document.getElementById("color-input").value = cor;
}

function atualizarPaleta() {
    var paletaElement = document.getElementById("paleta");
    paletaElement.innerHTML = ""; // Limpa a paleta existente

    adicionarCoresVariadas(paletaElement, 1012); // Adiciona novas cores
}

// Adiciona função para verificar e mostrar cor digitada pelo usuário
function mostrarCorDigitada() {
    var inputCor = document.getElementById("color-input").value;
    var corDemonstracao = document.getElementById("cor-demonstracao");

    corDemonstracao.style.backgroundColor = inputCor;
}
