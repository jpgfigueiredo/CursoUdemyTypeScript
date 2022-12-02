export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getidade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `O nome do ser é ${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    const result = super.getNomeCompleto();
    return result + 'Heyyyy';
  }
}
