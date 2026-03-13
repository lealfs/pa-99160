// considerando a media 7,0 para aprovação, mostre uma mensagem indicando se o aluno foi aprovado ou reprovado.

const nome = prompt('Digite o nome do aluno:')
const nota1 = parseFloat(prompt('Digite a primeira nota:'))
const nota2 = parseFloat(prompt('Digite a segunda nota:'))

const media = (nota1 + nota2) / 2

if (media >= 7.0) {
    console.log(`Parabéns, ${nome}! Você foi aprovado com média ${media.toFixed(2)}.`)
} else {
    console.log(`Infelizmente, ${nome}, você foi reprovado com média ${media.toFixed(2)}.`)
}