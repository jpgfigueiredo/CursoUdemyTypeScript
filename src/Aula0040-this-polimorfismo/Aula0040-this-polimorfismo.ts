export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  div(n: number): this {
    this.numero /= n;
    return this;
  }

  mult(n: number): this {
    this.numero *= n;
    return this;
  }
}

export class subCalculadora extends Calculadora {
  potencia(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calculadora = new subCalculadora(10);
calculadora.add(5).mult(2).potencia(3);
console.log(calculadora);

//Builder - GoF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder(); //Builder
request.setUrl('http://google.com').setMethod('post').send();
console.log(request)
