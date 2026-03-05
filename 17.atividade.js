// Atividade

// Crie uma função para calcular media aritmetica

notas = [5, 5 ,5]
const media = (notas) => {
    const soma = notas.reduce((acc, n) => acc + n, 0)
    return soma / notas.length
}

console.log("Media: ", media(notas))