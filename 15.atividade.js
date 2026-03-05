// Vetor
const numeros = [1, 2, 3, 4, 5]

//usando o map, crie um vetor com os numeros
//do vetor 'numeros' cada um multiplicado por 2.
const dobrados = numeros.map(n => n * 2)
console.log("vetor de numeros: ", numeros)
console.log("Dobrados :", dobrados)

//Filtre os elementos do vetor 'numeros' para criar um novo vetor
//que contenha apenas os números pares.
const pares = numeros.filter(n => n % 2 === 0)
console.log("Pares: ", pares)

//Use o reduce para calcular a soma de todos os elementos do vetor 'numeros'.
const soma = numeros.reduce((acc, n) => acc + n, 0)
console.log("Soma: ", soma)
