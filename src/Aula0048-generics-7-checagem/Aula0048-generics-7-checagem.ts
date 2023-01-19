export function isNumber(valor: unknown): valor is number {
  return typeof valor === 'number';
}
export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, valor) => {
    if(isNumber(sum) && isNumber(valor)) {
      return sum + valor;
    }
    return sum;
  }, 0);

  return retorno;
}

console.log(soma(1,2,3,4,5,6));
console.log(soma([1, 2, 3, 'a', 'b']));
