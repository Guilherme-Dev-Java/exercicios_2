function palavrasUnicas(frase) {
    // Remove pontuação e converte para minúsculas
    frase = frase.replace(/[.,!?;:]/g, "").toLowerCase();

    const palavras = frase.split(" ");
    const unicas = []

    for (let i = 0; i < palavras.length; i++) {
        let contador = 0;

        for (let j = 0; j < palavras.length; j++) {
            if (palavras[i] === palavras[j]) {
                contador++
            }
        }

        if (contador === 1) {
            let jaExiste = false;
            for (let k = 0; k < unicas.length; k++) {
                if (unicas[k] === palavras[i]) {
                    jaExiste = true
                    break;
                }
            }

            if (!jaExiste) {
                unicas.push(palavras[i])
            }
        }
    }

    return unicas;
}

// Exemplo com vírgula
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma frase: ", function(entrada) {
    const resultado = palavrasUnicas(entrada)
    console.log("Palavras únicas:", resultado)
    rl.close();
})
