export interface Pessoa {
  nome: string;
  readonly sobrenome: string;
}

export interface Pessoa {
  readonly enderecos: string[];
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Joao',
  sobrenome: 'Pedro',
  enderecos: ['Av. Brasil'],
  idade: 40,
};

pessoa.enderecos.push('Rua nova');
console.log(pessoa);
