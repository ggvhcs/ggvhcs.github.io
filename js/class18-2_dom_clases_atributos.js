/*  -18- */
/*** DOM ***/
const title = document.getElementById('title');
const nombre = document.getElementById('nombre');
console.log(title);
console.log(nombre);
//
console.log(title.getAttribute('class'));           //return the value del atributo class.
console.log(nombre.getAttribute('type'));           //return the value del atributo type.
//modify the value of atribute.
nombre.setAttribute('type', 'number');
console.log(nombre.getAttribute('type'));           //return the value del atributo type.
//
nombre.setAttribute('type', 'radio');
console.log(nombre.getAttribute('type'));           //return the value del atributo type.
//
nombre.setAttribute('type', 'date');
console.log(nombre.getAttribute('type'));           //return the value del atributo type.
//
title.classList.add('main-title', 'other-title');   //add a new class css to title.
console.log(title);                                 //.
title.classList.remove('main-title', 'other-title'); //add a new class css to title.
console.log(title);                                 //.
//
if (title.classList.contains('title')) {            //check if title have a class with name value.
    console.log("!tiene la clase.")
} else {
    console.log("!no tiene la clase.")
}
//
title.classList.replace('title', 'main-title'); //replace a class css to main-title.
console.log(title);                             //.