// é tipo um any só que mais seguro, pois vc vai
// ter que chegar o tipo para fazer uma operação com ele
let x: unknown;
const y = 900;

x = 100;
x = 'Luiz';
x = '21';
x = 22;

if (typeof x === 'number') console.log(x + y);
