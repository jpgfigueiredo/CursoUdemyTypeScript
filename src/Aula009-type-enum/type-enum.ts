enum Cores {
  VERMELHO,
  AZUL = 20,
  AMARELO,
  ROXO = 'Roxo',
}

export function escolhaCor(cor: Cores): void {
  console.log(Cores[0]);
}

escolhaCor(Cores.AMARELO);

// console.log(Cores.VERMELHO);
// console.log(Cores[0]);
// console.log(Cores[20]);
// console.log(Cores[21]); /* AMARELO */
// console.log(Cores.ROXO);
