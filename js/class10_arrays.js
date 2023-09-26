/*  -10- */
/*
arreglo: [10,20,30]
indices:   0  1  2
*/
let arreglo = [10, 20, 30];
//modifing the item.
arreglo[2] = 10;
let sumaArray = arreglo[0] + arreglo[1] + arreglo[2];

let stringAndNumber = [10, 20, 30];
//modifing the item.
stringAndNumber[1] = "Suman:";
let sumaStringAndNumber = arreglo[0] + arreglo[2];

console.log(sumaArray);
console.log(stringAndNumber[1] + " " + sumaStringAndNumber);

/*              
external array: [[1,2,3],[4,5,6],[7,8,9]]
external index:     0       1       2
internal index:   0,1,2   0,1,2   0,1,2
*/
let arrayanidado = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arrayanidado[0]);
console.log(arrayanidado[1]);
console.log(arrayanidado[2]);
//
console.log(arrayanidado[2][1]);
//
let arregloanidado = [1, 2, 3];
console.log(arregloanidado);

arregloanidado[0] = [10, 20, 30];
arregloanidado[1] = [40, 50, 60];
arregloanidado[2] = [70, 80, 90];
console.log(arregloanidado);

//*** BIG ERROR ***//
var arraynumber1 = [10, 20, 30]
var arraynumber1 = [10, 20, 30, 40]

console.log(arraynumber1);

let arraynumber2 = [10, 20, 30]
arraynumber2 = [10, 20, 30, 40]

console.log(arraynumber2);

//*** THATS WORK ***//
const arraynumber3 = [10, 20, 30]
arraynumber3.push(40);

console.log(arraynumber3);

//*** array map ***.//
//
const colors = ['red', 'green', 'blue'];
//classic function.
/*const items = colors.map(
    function(color){
        return '<li>'+color+'</li>';
    }
);*/
//the same with arrow function.
//const items = colors.map(color => '<li>'+color+'</li>');
const items = colors.map(color => `<li>${color}</li>`);

console.log(items);

//push.
let estaciones = ["invierno", "otoño", "primavera"];
console.log(estaciones);
estaciones.push("verano");
console.log(estaciones);

//remove the last item.
let estasiones = ["invierno", "otoño", "primavera", "verano"];
let estasion;
estacion = estasiones.pop();
console.log(estasiones);
console.log(estasion);

//add new item at begin.
let newstation = ["invierno", "otoño", "primavera", "verano"];
newstation.unshift("newstation");
console.log(newstation);
//lista de compras.
let listaDeCompras = [["cereal", 3], ["leche", 2], ["galletas", 4], ["pan", 5], ["refresco", 7], ["pollo", 7]]
//cereal
console.log(`Voy a comprar ${listaDeCompras[0][1]} unidades de ${listaDeCompras[0][0]}`);
//leche
console.log(`Voy a comprar ${listaDeCompras[1][1]} unidades de ${listaDeCompras[1][0]}`);