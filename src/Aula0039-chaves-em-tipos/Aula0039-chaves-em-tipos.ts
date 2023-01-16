type Veiculo = {
  marca: string;
  ano: string;
}

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string,
}

const carro: Car = {
  brand: 'Ford',
  year: '2000',
  name: 'Nome',
}

console.log(carro);


