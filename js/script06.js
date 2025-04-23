function calcularFatorial() {
    const input = document.getElementById("numero");
    const resultado = document.getElementById("resultado");
    const num = parseInt(input.value);

    if (isNaN(num) || num < 0) {
        resultado.textContent = "Por favor, digite um número inteiro não negativo.";
        return;
    }

    let fatorial = 1;
    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }

    resultado.textContent = `O fatorial de ${num} é: ${fatorial}`;
}
