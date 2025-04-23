let numero = Math.floor(Math.random() * 10) + 1;

        function verificar() {
            let palpite = parseInt(document.getElementById("palpite").value);
            let mensagem = document.getElementById("mensagem");

            if (palpite === numero) {
                mensagem.textContent = "🎉 Você acertou!";
            } else if (palpite < numero) {
                mensagem.textContent = "🔼 Tente um número maior.";
            } else {
                mensagem.textContent = "🔽 Tente um número menor.";
            }
        }