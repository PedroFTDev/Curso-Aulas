let velocidade = prompt("Digite a velocidade do veículo: ")

do {
  alert("A velocidade do veículo é: " + velocidade + " hm/h")
  velocidade -= 20
} while (velocidade > 0)

alert("Velocidade final: " + velocidade + " hm/h")