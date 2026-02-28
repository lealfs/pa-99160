const usuarios = [
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Pedro', idade: 35 }    

]

console.log("exibindo todos os usuários de vetor:")
usuarios.forEach(usuario => {
    console.log(`${usuario.nome} tem: ${usuario.idade} anos`)
})

console.log("Filtrando idade maior que 18: ")
const maioresde18 = usuarios.filter
    (usuario => usuario.idade > 18)

// exibindo todos os elementos do vetor
maioresde18.forEach(usuario => {
    console.log(`${usuario.nome} tem: ${usuario.idade} anos`)
})

console.log("Mostrando apenas nomes: ")
const listanomes = usuarios.map(usuario => usuario.nome)
listanomes.forEach(nome => { nome => console.log(nome) })

console.log("Encontrar um usuario: ")
const usuarioencontrado= listanomes.find(u => u.nome === "Maria")
console.log(usuarioencontrado)
console.log(`Nome ${usuarioencontrado.nome} Idade:  ${usuarioencontrado.idade} anos`)

console.log("Soma as idades de todos os usuarios: ")
// total acumula a soma das idades
// 0 é o valor inicial da contagem
// u é o objeto para acessar a variavel que contem a idade
const somaidades = usuarios.reduce((total, u) => total + u.idade, 0)
console.log(`A soma das idades é: ${somaidades} anos`)