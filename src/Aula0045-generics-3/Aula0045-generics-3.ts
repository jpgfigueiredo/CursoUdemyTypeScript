interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
}
const aluno: PessoaProtocolo2<string, number> = {
  nome: 'Luiz',
  sobrenome: 'Pereira',
  idade: 30,
};

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Vitor',
  sobrenome: 'Pereira',
  idade: 30,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 30,
};
