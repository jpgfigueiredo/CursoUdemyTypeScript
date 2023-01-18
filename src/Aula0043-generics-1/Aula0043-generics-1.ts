type FilterCallback<T> = (value: T, index?: number, array?: T[]) => boolean;

export function meuFilter(array: unknown[], callbackfn: FilterCallback<T>): unknown {
  const novoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filtra valores menores q 5
const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

// filtra valores menores q 7
const arrayFiltrado = meuFilter(array, (value) => value < 7);
console.log(arrayFiltrado);

