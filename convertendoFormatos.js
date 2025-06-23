function paresParaObjeto(pares) {
  const obj = {}

  for (let i = 0; i < pares.length; i++) {
    const [chave, valor] = pares[i]
    obj[chave] = valor
  }

  return obj;
}

function objetoParaPares(obj) {
  const pares = [];

  for (let chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]])
    }
  }

  return pares
}

const obj = {
  nome: "Guilherme",
  idade: 30,
  profissao: "Eletricista"
}


const pares = [
  ["nome", "Guilherme"],
  ["idade", 30],
  ["profissao", "Eletricista"]
]

console.log(Object.fromEntries(pares))


console.log( Object.entries(obj))

