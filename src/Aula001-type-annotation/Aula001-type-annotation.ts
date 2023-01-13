/* eslint-disable */
const nome: string = 'luis';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');

// arrays
let arraysDeNumeros: Array<number> = [1, 3, 4, 5];
let arraysDeString: Array<string> = ['a', 'b'];

// Objetos
export let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'jp'
};

console.log(pessoa.nome);

// Funções
//          tipagem dos parametros / tipagem da função
function soma(x: number, y: number): number {
  return x + y;
};

console.log(soma(1,3));
