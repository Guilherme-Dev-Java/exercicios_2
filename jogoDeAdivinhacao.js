const readline = require('readline')

// Interface de entrada/saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Gera um número aleatório de 1 a 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1
let tentativas = 0

// Função que pede um palpite ao usuário
function pedirPalpite() {
  rl.question('Digite um número entre 1 e 100: ', (input) => {
    const palpite = parseInt(input, 10)
    tentativas++;

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
      console.log('Entrada inválida. Tente um número entre 1 e 100.')
      pedirPalpite()
      return
    }

    if (palpite === numeroSecreto) {
      console.log(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativa(s)!`)
      rl.close()
    } else if (palpite < numeroSecreto) {
      console.log('O número é mais alto!')
      pedirPalpite()
    } else {
      console.log('O número é mais baixo!')
      pedirPalpite()
    }
  })
}

// Início do jogo
console.log('Bem-vindo ao Jogo de Adivinhação!')
pedirPalpite()
