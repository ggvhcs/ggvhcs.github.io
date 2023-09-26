/*  -9- */

//*** functions ***//.
function greet() {
    console.log("hello javascript.");
}
greet();

function greetWithParamater(greet) {
    console.log(greet);
}
greetWithParamater("hello javascript.");

function number(n) {
    console.log(n);
}
number(10);

const anothernumber = n => {
    console.log(n);
}
anothernumber(25);

const sumar = (n1, n2) => {
    console.log(n1 + n2);
}
sumar(25, 5);

//cuadrado area.
const ca1 = function (number) {
    return number * number
};

console.log(ca1(6));

const ca2 = number => number * number;

console.log(ca2(5));

//template string.
const greetarrow = (nombre = "new user") => `!welcome, ${nombre}`;
//const greetarrow = ( nombre = "new user") => '!welcome, '+ nombre;

console.log(greetarrow("silvia"))
console.log(greetarrow())

const mas3 = (n = 0) => n + 3;

console.log(mas3(6))
console.log(mas3())

//***arrow function***.//
/**/
//1
/*const person = {
    talk(){
      console.log("this",this);
    }
};*/
/*const person = {
    talk(){
        setTimeout(function(){
            console.log("this",this);
        },1000);
    }
};*/

//
/*const person = {
    talk(){
        var self = this;
        setTimeout(function(){
            console.log("self",self);
        },1000);
    }
};*/

//arrow function.
/*const person = {
    talk(){
        //var self = this;
        setTimeout(()=>{
            console.log("this",this);
        },1000);
    }
};

person.talk();*/

//
const nextOnRows = (arreglo, element) => {
    arreglo.push(element);      //add an element to the end.
    return arreglo.shift();     //remove the first element.
}
//
let myarray = [1, 2, 3, 4, 5, 6]
//
console.log("before " + JSON.stringify(myarray));
console.log(nextOnRows(myarray, 7));
console.log("after " + JSON.stringify(myarray));