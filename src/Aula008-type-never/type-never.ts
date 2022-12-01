//Lança erro, ou trava a aplicação
function criaErro(): never {
  throw new Error('Erro Qualquer');
}

criaErro();
