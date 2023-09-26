/*  -1- */

//you can declare the same var many times, thats not good.
var numner = 10;
var number = 20;
console.log(number);

//if I do the same but with let thats not happen because return an error.

/*let edad = 10;
let edad = 20;*/

let edad;
edad = 10;
edad = 20;

if (true) {
    const edad = 15;
    console.log(edad);
}
console.log(edad);

//entero.
let entero;
entero = 5;

//decimal.
let decimal = 5.5;

//negativo.
let negativo = -5;

//string.
let helloWorld = '!Hola Mundo.';

//boolean.
let respuesta = true;

//constants.
const PI = 3.14;
console.log(PI);

const price = 10;
if (true) {
    const price = 15;
    console.log(price);
}
console.log(price);

//print all values.
console.log(entero);
console.log(decimal);
console.log(negativo);
console.log(helloWorld);
console.log(respuesta);