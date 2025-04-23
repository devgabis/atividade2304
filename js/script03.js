function classificarIdade() {
    const idade = Number(document.getElementById("idade").value);
    let classificacao = "";

    if (isNaN(idade) || idade < 0) {
        classificacao = "Por favor, digite uma idade válida.";
    } else if (idade <= 12) {
        classificacao = "Você é uma criança.";
    } else if (idade <= 17) {
        classificacao = "Você é um adolescente.";
    } else if (idade <= 59) {
        classificacao = "Você é um adulto.";
    } else {
        classificacao = "Você é um idoso.";
    }

    document.getElementById("resultado").innerText = classificacao;
}
