/*  -6- */
//Ordenamiento.
/**/
const numbers = document.getElementById('numbers');
const results = document.getElementById('results');

let a = prompt('Introduce el 1er numero.');
let b = prompt('Introduce el 2do numero.');
let c = prompt('Introduce el 3er numero.');

numbers.textContent = `!the numbers introduced are.${a},${b},${c}`;

if (a > b && a > c) {
    if (b > c) {
        console.log(`!el orden de los numbers is, ${a},${b},${c}`);
    } else {
        console.log(`!el orden de los numbers is, ${a},${c},${b}`);
    }
} else if (b > a && b > c) {
    if (a > c) {
        console.log(`!el orden de los numbers is, ${b},${a},${c}`);
    } else {
        console.log(`!el orden de los numbers is, ${b},${c},${a}`);
    }
} else if (c > a && c > b) {
    if (a > b) {
        console.log(`!el orden de los numbers is, ${c},${a},${b}`);
    } else {
        console.log(`!el orden de los numbers is, ${c},${b},${a}`);
    }
}