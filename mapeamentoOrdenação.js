function nomesOrdenadosPorPrecoCrescente(produtos) {
  return produtos
    .slice() 
    .sort((a, b) => a.preco - b.preco) 
    .map(produto => produto.nome)
}

const produtos = [
  { nome: "Teclado Mecânico", preco: 250, quantidade: 5 },
  { nome: "Mouse Gamer", preco: 150, quantidade: 8 },
  { nome: "Monitor 24\"", preco: 900, quantidade: 3 },
  { nome: "Notebook", preco: 3500, quantidade: 2 },
  { nome: "Cabo HDMI", preco: 30, quantidade: 15 },
  { nome: "Webcam Full HD", preco: 300, quantidade: 4 },
  { nome: "Headset", preco: 200, quantidade: 6 },
  { nome: "Mousepad", preco: 60, quantidade: 10 },
]


const nomesOrdenados = nomesOrdenadosPorPrecoCrescente(produtos)
console.log(nomesOrdenados)
