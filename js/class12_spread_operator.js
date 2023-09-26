/*  -12- */
//***spread operator***.//
/*const first = [1,2,3];
const second = [4,5,6];

//const combined = first.concat(second);
const clone = [...first];
console.log(first);
console.log(clone);*/

//the same with object.
const first = { name: 'Mosh' };
const second = { job: 'Instructor' };

const combined = { ...first, ...second, location: "Autralia" };
console.log(combined);