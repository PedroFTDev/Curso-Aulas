function calcMedia (a, b){
  const media = (a + b) / 2
  return media
}

const resultado = calcMedia (7, 2)

console.log(resultado)

function criarProduto(nome, preco) {
  const produto = { nome, preco, estoque: 1 }
  return produto
}

console.log(criarProduto("Notebook Intel Core i3 8GB", 3000))

function areaRetangular(base, altura){
  const area = base * altura
  return area
}

console.log(areaRetangular(3, 5))

// Uma função só pode ter uma saída, depois do return nada é executado
// Repare que o VS Code nos avisa que nosso código não será executado
function olaMundo() {
  let texto = "..."
  return texto
  texto = "Olá, mundo!"
  console.log(texto)
}
console.log(olaMundo())

// No entanto, diferentes ramificações dentro
// da função podem ter diferentes retornos
function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade"
  } else {
    return "Menor de idade"
  }
}
console.log(maioridade(20))
console.log(maioridade(13))