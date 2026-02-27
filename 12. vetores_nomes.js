// criando um vetor

const listanomes = ["Maria", "João", "Pedro"]

console.log("exibindo todos os elemento:")
console.log(listanomes)

console.log("exibindo o primeiro elemento:")
console.log(listanomes[0])

console.log("exibindo o segundo elemento:")
console.log(listanomes[1])

console.log("adicionar um elemento: ")
listanomes.push("Felipe")
console.log(listanomes)

console.log("removendo o primeiro elemento: ")
listanomes.shift()
console.log(listanomes)

console.log("removendo o ultimo elemento: ")
listanomes.pop()
console.log(listanomes)

console.log("removendo um elemento específico: ")
listanomes.splice(1, 1)
console.log(listanomes)