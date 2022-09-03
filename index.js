let quebrada = false;

function acendeLampada() {
    if (!quebrada) {
        const imagem = document.getElementById("lampada");
        imagem.src = "/images/lampada_acessa.jpg";
    }
}

function apagaLampada() {
    if (!quebrada) {
        const imagem = document.getElementById("lampada");
        imagem.src = "/images/lampada_apagada.jpg";
    }
}

function quebraLampada() {
    const imagem = document.getElementById("lampada");
    imagem.src = "/images/lampada_quebrada.jpg";
    quebrada = true;

    const button =
        '<button onclick="restaurarLampada()">Restaurar Lâmpada</button>';
}

function restaurarLampada() {
    // const imagem = document.getElementById("lampada");
    // imagem.src = "/images/lampada_apagada.jpg";
    quebrada = false;
    apagaLampada();
}
