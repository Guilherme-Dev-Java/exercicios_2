const readline = require('readline');

// Interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função de validação de data
function ehDataValida(dia, mes, ano) {
  if (
    !Number.isInteger(dia) ||
    !Number.isInteger(mes) ||
    !Number.isInteger(ano) ||
    dia <= 0 || mes <= 0 || ano <= 0
  ) {
    return false;
  }

  const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Ajuste para ano bissexto
  if (mes === 2 && ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0)) {
    diasPorMes[1] = 29;
  }

  if (mes < 1 || mes > 12) return false;

  return dia <= diasPorMes[mes - 1];
}

// Solicita a data em formato único
rl.question('Digite a data no formato dd/mm/aaaa: ', (dataStr) => {
  const partes = dataStr.split('/');

  if (partes.length !== 3) {
    console.log('Formato inválido. Use dd/mm/aaaa.');
    rl.close();
    return;
  }

  const [diaStr, mesStr, anoStr] = partes;
  const dia = parseInt(diaStr, 10);
  const mes = parseInt(mesStr, 10);
  const ano = parseInt(anoStr, 10);

  if (ehDataValida(dia, mes, ano)) {
    console.log('A data informada '+ dataStr +' é válida!');
  } else {
    console.log('A data informada '+ dataStr + ' é inválida.');
  }

  rl.close();
});
