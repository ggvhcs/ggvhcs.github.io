/*  -18- */
/*** DOM ***/
//
const nombre = document.getElementById('nombre');
console.log(nombre);                                    //return the input with name nombre.
console.log(nombre.value);                              //return the input value of nombre.
console.log(nombre.value.length);                       //return the input value of nombre.
//
const title = document.getElementById('title');
console.log(title.textContent);
//
//title.textContent = '!!!Hello from JavaScritp...'     //change the textContent value property.
console.log(title.textContent);                         //return text value on title.
console.log(title.innerHTML);                           //return text value on title and html tag.
//
const paragraph = document.querySelector('.paragraph');
console.log(paragraph);

//querySelector.
const span = paragraph.querySelector("span");
console.log(span);
console.log(span.textContent);

//querySelectorAll.
const paragraphs = document.querySelectorAll('.paragraph');
console.log(paragraphs);
const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'));
//paragraphs[0].style.color = 'red';
paragraphsArray.map(p => p.style.color = 'blue');
