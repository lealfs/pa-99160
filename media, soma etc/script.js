function calcular() {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const display = document.getElementById('resultado');

    if (isNaN(n1) || isNaN(n2)) {
        display.innerHTML = "<p style='color:red;'>Por favor, insira dois números válidos.</p>";
        return;
    }

    const soma = n1 + n2;
    const media = soma / 2;
    const produto = n1 * n2;
    const maior = Math.max(n1, n2);
    const menor = Math.min(n1, n2);

    display.innerHTML = `
        <div class="result-line"><strong>Soma:</strong> ${soma}</div>
        <div class="result-line"><strong>Média:</strong> ${media}</div>
        <div class="result-line"><strong>Produto:</strong> ${produto}</div>
        <div class="result-line"><strong>Maior número:</strong> ${maior}</div>
        <div class="result-line"><strong>Menor número:</strong> ${menor}</div>
    `;
}