function somarTotaisPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const { cliente, total } = venda

    if (!acumulador[cliente]) {
      acumulador[cliente] = 0
    }

    acumulador[cliente] += total
    return acumulador
  }, {})
}

const vendas = [
  { cliente: "Guilherme", total: 150 },
  { cliente: "Ana", total: 200 },
  { cliente: "Guilherme", total: 100 },
  { cliente: "João", total: 80 },
  { cliente: "Ana", total: 50 },
]

const resultado = somarTotaisPorCliente(vendas)
console.log(resultado)
