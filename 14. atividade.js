const listadealunos = [
    { nome: "Ana", nota: 5.0},
    { nome: "Bruno", nota: 10.0},
    { nome: "Carla", nota: 2.0},
    { nome: "Andrea", nota: 7.0},
    { nome: "Marta", nota: 6.0},
];

console.log("Encontre a aluna Marta e mostre o nome e a nota dela: ")
const alunamarta = listadealunos.find(aluno => aluno.nome === "Marta")
console.log(`Nome: ${alunamarta.nome} Nota: ${alunamarta.nota}`)

console.log("Mostre a media geral da turma: ")
const media = listadealunos.reduce((total, aluno) => total + aluno.nota, 0) / listadealunos.length
console.log(`A media geral da turma é: ${media}`)

console.log("Mostre o nome e a nota dos alunos com nota abaixo de 7.0: ")
const alunosreprovados = listadealunos.filter(aluno => aluno.nota < 7.0)
alunosreprovados.forEach(aluno => {
    console.log(`Nome: ${aluno.nome} Nota: ${aluno.nota}`)
})

console.log("Mostre apenas o nome do alunos com nota maior ou igual a 7.0: ")
const alunosaprovados = listadealunos.filter(aluno => aluno.nota >= 7.0)
alunosaprovados.forEach(aluno => {
    console.log(`Nome: ${aluno.nome}`)
})