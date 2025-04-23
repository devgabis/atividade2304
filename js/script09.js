function converterHoras() {
    let horas = document.getElementById("horas").value;

    if (horas == "") {
        document.getElementById("resultado").innerText = "Por favor, digite um número de horas.";
        return;
    }

    let minutos = horas * 60;
    let segundos = horas * 3600;

    document.getElementById("resultado").innerText = 
        horas + " hora(s) = " + minutos + " minuto(s) e " + segundos + " segundo(s)";
}
