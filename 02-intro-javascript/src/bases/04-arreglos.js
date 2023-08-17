const arreglo = [1,2,3,4];

let arreglo2 = [arreglo, 5];
//(4) [1, 2, 3, 4]
//(2) [Array(4), 5]
let arreglo3 = [...arreglo, 5];
//(4) [1, 2, 3, 4]
//(2) [Array(4), 5]
//(5) [1, 2, 3, 4, 5]
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

const arreglo4 = arreglo3.map(function(valor){return valor});
console.log(arreglo3);


const arreglo5 = arreglo3.map(function(valor){return 2*valor});

const arreglo6 = arreglo3.map(function(){return 'hola'});

console.log(arreglo4);
console.log(arreglo5);
console.log(arreglo6);
