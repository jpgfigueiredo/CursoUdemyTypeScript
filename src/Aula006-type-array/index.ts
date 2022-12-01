//Tuple diz que ele é imutável
const dadosCliente1: readonly [number, string] = [1, 'Joao'];
const dadosCliente2: [number, string, string] = [1, 'Joao', 'Pedro'];
const dadosCliente3: [number, string, string?] = [1, 'Joao'];

//Rest operator ...string[] diz que o resto deve ser tudo string
const dadosCliente4: [number, string, ...string[]] = [1, 'Joao'];

// dadosCliente2[0] = 100;
// dadosCliente2[1] = 'Vitor';
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// Readonly array
const array1: readonly string[] = [];
const array2: ReadonlyArray<string> = ['Luiz', 'Otavio'];
