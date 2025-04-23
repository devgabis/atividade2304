function somarPares() {
    const inputNumero = document.getElementById("numero").value;
    const limite = parseInt(inputNumero);
    let soma = 0;

    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }

    document.getElementById("resultado").textContent = `A soma dos pares de 1 até ${limite} é: ${soma}`;
}
