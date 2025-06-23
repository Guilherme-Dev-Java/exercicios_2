function debounce(fn, delay) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId) 
        timerId = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

function mostrarMensagem(msg) {
    console.log("Executando:", msg)
}

const debouncedMostrarMensagem = debounce(mostrarMensagem, 250)


debouncedMostrarMensagem("Olá Mundo");
setTimeout(() => debouncedMostrarMensagem("Guilherme"), 300);
setTimeout(() => debouncedMostrarMensagem("Dev. Full Stack"), 600);
setTimeout(() => debouncedMostrarMensagem("Ultima mensagem"), 900);
