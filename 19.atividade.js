// solicite ao usuario o nome e duas notas.

const nome = prompt('Digite o nome do aluno:')
const nota1 = parseFloat(prompt('Digite a primeira nota:'))
const nota2 = parseFloat(prompt('Digite a segunda nota:'))

// calcule a media do aluno e mostre uma mensagem com o nome do aluno e a media.

const media = (nota1 + nota2) / 2

console.log(`O aluno ${nome} tem média ${media.toFixed(2)}`)