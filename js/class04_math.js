/*  -4- */
//***Math.
//Imprime euler y pi.
console.log('Euler. ' + Math.E);
console.log('PI. ' + Math.PI);
//valor absoluto.
let absoluto = 5;
console.log('Absoluto. ' + Math.abs(absoluto));
//redondeo al mas grande.
let intG = 5.6;
console.log('Big int. ' + Math.ceil(intG));
//redondeo al mas pequeño.
let intP = 5.6;
console.log('Short int. ' + Math.floor(intP));
//redondeo.
let int = 5.4;
console.log('Redondeo int. ' + Math.round(int));
//potencia.
let base = 2;
let exponente = 3;
console.log('potencia. ' + Math.pow(base, exponente));
//no aleatorio entre 0 y 1.
console.log('aleatorio entre 0 y 1. ' + Math.random());
//no aleatorio entre 0 y 50.
console.log('aleatorio entre 0 y 50. ' + Math.random() * 50);
//entero entre 0 y 100.
console.log('entero entre 0 y 50. ' + Math.round(Math.random() * 50));
//no aleatorio entre max y min.
//console.log('aleatorio entre max y min. '+Math.random()*(max-min)+min);
//decimal aleatorio entre max y min.
console.log('decimal entre 10 y 5. ' + Math.random() * (10 - 5) + 5);
//entero aleatorio entre max y min.
console.log('entero entre 10 y 5. ' + Math.round(Math.random() * (10 - 5) + 5));
//Devuelve 0 1 -1, para conocer el signo.
console.log('0 1 y -1. ' + Math.sign(0));//devuelve 0 por no tener signo.
console.log('0 1 y -1. ' + Math.sign(5));//devuelve 1 por ser positivo.
console.log('0 1 y -1. ' + Math.sign(-5));//devuelve -1 por ser negativo.
//raiz cuadrada de un #.
console.log('raiz cuadrada. ' + Math.sqrt(50));