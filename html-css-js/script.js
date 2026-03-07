function gerartabuada() {
    // pegar o valor do input no Html.
    const numeroinput = document.getElementById("numeroinput");
    let numero = parseInt(numeroinput.value);

    // pegar o elemento HTML onde a tabuada será exibida.
    const resultadoDiv = document.getElementById("resultadotabuada");
    resultadoDiv.innerHTML = "";

    // verificar se a entrada é um numero válido
    if (isNaN(numero) || numero === null || numero === "") {
        resultadoDiv.innerHTML = "<p>Por favor, digite um número...</p>";
        return;
    }

    // adiciona um titulo para tabuada.
    resultadoDiv.innerHTML += `<h2>Tabuada do número: ${numero}</h2>`;

    // laço de repeticão para gerar a tabuada de 1 até 10.
    for(let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }

}

const gerarBotao = document.getElementById("gerarBotao");
gerarBotao.addEventListener("click", gerartabuada);