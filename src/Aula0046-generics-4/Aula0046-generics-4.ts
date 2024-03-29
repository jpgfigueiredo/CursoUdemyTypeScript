//K é no máximo uma chave(keyof) de O, isso é uma restrição
type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'rosa',
  vacinas: ['Vacina 1', 'VCacina 2'],
  idade: 9,
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor);
