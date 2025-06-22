const readline = require('readline')

function fatorial(n) {
    if (n < 0) {
        throw new Error("O fatorial não está definido para números negativos.")
    }
    if (n === 0) {
        return 1
    }
    return n * fatorial(n - 1)
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite um número para calcular o fatorial: ", function(resposta) {
    const numero = parseInt(resposta)

    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.")
        rl.close()
        return
    }

    try {
        const resultado = fatorial(numero)
        console.log(`O fatorial de ${numero} é: ${resultado}`)
    } catch (erro) {
        console.error("Erro:", erro.message)
    }

    rl.close()
})
