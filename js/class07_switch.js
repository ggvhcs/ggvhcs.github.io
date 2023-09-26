/*  -7- */
//switch.
/**/
let num = 3;
//
switch (num) {
    case 1: console.log('var num have the value 1');
        break;
    case 2: console.log('var num have the value 2');
        break;
    default: console.log('num no  vale ni 1, ni 2.');
}
//
switch (num) {
    case 1:
    case 3:
    case 5:
        console.log(`${num} es impar.`);
        break;
    case 2:
    case 4:
        console.log(`${num} es par.`);
        break;
}
//
const selectLanguage = (l) => {
    let language = l;
    switch (language) {
        case "es": console.log('!espanish.');
            break;
        case "en": console.log('!english.');
            break;
        default: console.log('!italian.');
            break;
    }
}

console.log(selectLanguage());
console.log(selectLanguage("en"));