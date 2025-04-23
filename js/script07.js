function mostrarPrimos() {
    const inicio = parseInt(document.getElementById("inicio").value);
    const fim = parseInt(document.getElementById("fim").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(inicio) || isNaN(fim) || inicio > fim) {
        resultado.textContent = "Digite valores válidos (inicial menor que final).";
        return;
    }

    let primos = [];

    for (let num = inicio; num <= fim; num++) {
        if (ehPrimo(num)) {
            primos.push(num);
        }
    }

    if (primos.length > 0) {
        resultado.textContent = `Números primos entre ${inicio} e ${fim}: ${primos.join(", ")}`;
    } else {
        resultado.textContent = `Nenhum número primo encontrado entre ${inicio} e ${fim}.`;
    }
}

function ehPrimo(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}
