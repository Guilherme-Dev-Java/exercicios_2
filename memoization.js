function memoize(fn) {
    const cache = {}

    return function (...args) {
        const chave = JSON.stringify(args)

        if (cache.hasOwnProperty(chave)) {
            console.log("Retornando do cache:", chave)
            return cache[chave]
        }

        const resultado = fn(...args)
        cache[chave] = resultado
        return resultado
    }
}

function fatorial(n) {
    if (n < 0) throw new Error("Negativo não permitido.")
    if (n === 0) return 1
    return n * fatorial(n - 1)
}

const memoFatorial = memoize(fatorial)

console.log(memoFatorial(5))
console.log(memoFatorial(5))
console.log(memoFatorial(6))
