function add(a: unknown, b: unknown) {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 4));
console.log(add('a', 'b'));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; raca: string; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

export class AnimalEstimacao implements Animal {
  tipo: 'animal' = 'animal';
  constructor(public raca: string, public cor: string) {}
}

function mostrarNome(obj: PessoaOuAnimal) {
  // if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  // if (obj instanceof AnimalEstimacao) console.log(obj.raca);

  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log(`Isso é um animal da raça ${obj.raca} da cor ${obj.cor}`);
      return;
  }
}

mostrarNome(new Aluno('João'));
mostrarNome(new AnimalEstimacao('Labrador', 'black'));
