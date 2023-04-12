const arr = ["Pedro", "Gabriel", "João", "Guilherme"]
console.log(arr)

//adicionar Elementos no final
//push

let tamanho = arr.push('Miguel')
console.log(arr)

//adicionar Elementos no começo 
//unshift

tamanho = arr.unshift("Luan")
console.log(arr)

//Remover o último elemento
//pop

let ultimoelemento = arr.pop()
console.log(arr)
console.log ("O elemento retirado foi: " + ultimoelemento)

//remover o primeiro elemento
//shift

ultimoelemento = arr.shift()
console.log(arr)
console.log(ultimoelemento)

//Pesquisar por um elemento
//includes

const inclui = arr.includes("Gabriel")
console.log(inclui)

//indexOf

const indice = arr.indexOf("João")
console.log(indice)

//Cortar e Concatenar(Juntar)
// slice

const nomes = arr.slice(0, 3)
const outros = arr.slice(-2)
console.log(nomes)
console.log(outros)

//concat

const concatenar = nomes.concat(outros)
console.log(concatenar)

// Substituição dos Elementos
// splice

const elementosRemovidos = concatenar.splice(indice, 1, "Noah") 
console.log(concatenar)
console.log(elementosRemovidos)

// Iterar sobre os elementos
//for

for (let indice = 0; indice < concatenar.length; indice++) {
  const elemento = concatenar[indice]
  console.log(elemento + " se encontra na posição: " + indice)
}