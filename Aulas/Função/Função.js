function dobro(x) {
  alert("O dobro de " + x + " é: " + (x * 2))
}

//dobro(5)
//dobro(7)

function dizerOla(nome = 'mundo') {
  alert ("Olá, " + nome + "!")
}

//dizerOla("Pedro")
//dizerOla()

function soma (a, b, c, d, e) {
  alert("O resultado da soma é: " + (a + b + c + d + e))
}

//soma(7, 6, 4, 1, 9)

function criarUsuario(nome, email, senha, tipo){
  const usuario = {
    nome,
    email,
    senha,
    tipo
  }

  console.log(usuario)
}

function novoUsuario(nome, tipo = "admin", email, senha,) {
  const usuario2 = {
    nome,
    email,
    senha,
    tipo
  }
  console.log(usuario2)
}

criarUsuario("Pedro", "pedrooofreitas@gmail.com", "1234", "admin")
novoUsuario("Isaac", "admin", "pedrooofreitas@gmail.com", "1234")

function parametros(usuario){
  usuario.nome
  usuario.email
  usuario.telefone
}

const dados = {
  nome: "",
  email: "",
  telefone: ""
}

parametros(dados)
