let numero = Math.floor(Math.random() * 10) + 1;

function adivinhar() {
    let palpite = parseInt(document.getElementById("adivinhação").value);
    let resultado = document.getElementById("resultado");

    if (palpite === numero) {
        resultado.textContent = "🎉 Você acertou!";
    } else if (palpite < numero) {
        resultado.textContent = "🔼 Tente um número maior.";
    } else {
        resultado.textContent = "🔽 Tente um número menor.";
    }
}
