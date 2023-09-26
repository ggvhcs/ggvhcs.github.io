/*  -3- */
//***string.
let Cadena = '!Metodos y Propiedades de las Cadenas.';
//***return longitud de la Cadena.
console.log('Longitud de la variable..' + Cadena.length);
//***return var to upper case.
console.log('Variable to upper case..' + Cadena.toUpperCase());
//***return var to lower case.
console.log('Variable to lower case..' + Cadena.toLowerCase());
//***IndexOf find a character and return the position, !devuelve -1 sino encuentra nada.
console.log('Find a character..' + Cadena.indexOf('M'));
//***LastIndexOf find the last character and return the position.
console.log('Find the last character..' + Cadena.lastIndexOf('o'));
//***Includes find a character and return true or false.
console.log('Find a character..' + Cadena.includes('o'));
console.log('Find a character..' + Cadena.includes('o', 2));
//***Replace in the string.
console.log('Replace in the string..' + Cadena.replace('Cadenas', 'strings'));
//***SubString.
console.log('Imprime de la posicion 1 ala 7..' + Cadena.substring(1, 7));
console.log('Imprime apartir de la 1..' + Cadena.substring(1));
//***Slice = SubString, pero admite (-).
console.log('Imprime 6 primeros caracteres..' + Cadena.slice(6));
console.log('Imprime 6 últimos caracteres..' + Cadena.slice(-6));
console.log('Imprime el 1 e ignora los 6 últimos caracteres..' + Cadena.slice(1, -6));
//***Trim erase los espacios in the begining and the end de un string.
let String = '    La esclavitud, que vivimos desde que nacemos       .';
console.log('erase spaces..' + String.trim());
//***!Devuelve true si una cadena comienza con el caracter especificado, sino false.
console.log('!valida si una cadena comienza con el caracter especificado.' + Cadena.startsWith('!'));
console.log('!valida si una cadena comienza con el caracter especificado.' + Cadena.startsWith('M', 1));
//***!Devuelve true si una cadena termina con el caracter especificado, sino false.
console.log('!valida si una cadena termina con el caracter especificado.' + Cadena.endsWith('.'));
console.log('!valida si una cadena termina con el caracter especificado.' + Cadena.endsWith('Cadenas.'));
console.log('!valida si una cadena termina con el caracter especificado.' + Cadena.endsWith('o', 5));
//***!Repite una cadena la cantidad de vecez especificada.
let Repeat = 'repeat again...';
console.log('!Repite una cadena la cantidad de vecez especificada.' + Repeat.repeat(3));
console.log('!Repite una cadena la cantidad de vecez especificada.' + 'Repite.'.repeat(3));
//***Templates String.
let name1 = 'Angelica';
let name2 = 'Coral';
let name3 = 'Geiser';
console.log(`Hola, ${name1} y ${name2} son mis hijas; mi nombre es ${name3}`);