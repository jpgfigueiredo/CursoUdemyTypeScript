export class Empresa {
  readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador) {
    this.colaboradores.push(colaborador);
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('John John', '111.111.111.0001-2');
const empresa2 = new Empresa('Cacau Show', '111.111.111.0001-4');

const colaborador1 = new Colaborador('João', 'Figueiredo');
console.log(empresa1.nome);
console.log(empresa1.adicionaColaborador(colaborador1));
console.log(colaborador1.nome);
console.log(colaborador1.sobrenome);
