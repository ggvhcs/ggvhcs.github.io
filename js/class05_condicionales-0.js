/*  -5- */
//Condicionales.
/*
&& and
|| or
*/
let num1 = 5; let num2 = 11; console.log(num1); console.log(num2);
/******/
//if num 1 it is greater of 0.
if (num1 > 0) {
    console.log(`${num1} es mayor que 0.`)
    //if num 2 it is greater of 0.
    if (num2 > 0) {
        console.log(`${num1} y ${num2} son mayores que 0.`)
        //if they are between 0 and 10.
        if (num1 < 10 && num2 < 10) {
            console.log(`${num1} y ${num2} estan entre 0 y 10.`)
        } else if (num1 < 10 || num2 < 10) {//if only one are between 0 and 10.
            if (num1 < 10) {
                console.log(`${num1} es menor que 10.`)
            } else console.log(`${num1} no esta entre 0 y 10.`);
            if (num2 < 10) {
                console.log(`${num2} es menor que 10.`)
            } else console.log(`${num2} no esta entre 0 y 10.`);
        } else console.log('!los numeros no estan entre 0 y 10');
        //
    } else console.log(`${num2} es menor que 0.`);
    //
} else console.log(`${num1} es menor que 0.`);
/******/
let word = 'buen dia';
if (word.length > 5) {
    console.log(`${word}, tiene mas de 5 letras`);
} else if (word.length < 5) {
    console.log(`${word}, tiene menos de 5 letras`);
} else console.log(`${word}, tiene 5 letras`);
/******/
let answer = false;
if (answer != false) { console.log('answer tiene el value true.') } else { console.log('el valor de answer es false.') }
if (answer == false) { console.log('answer tiene el value true.') } else { console.log('el valor de answer es false.') }