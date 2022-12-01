export { pessoa };

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Guilherme',

  exibirNome(): void {
    console.log(this.nome + '' + this.sobrenome);
  },
};

semRetorno('Hugo', 'Pereira');
pessoa.exibirNome();
