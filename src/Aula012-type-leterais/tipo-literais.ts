export default 1;

const pessoa = {
  nome: 'luiz' as const,
  idade: 20 as number,
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(pessoa.idade);
console.log(escolhaCor('Azul'));
