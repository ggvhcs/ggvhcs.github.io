/*  -11- */
//
const person = { nombre: 'juanito', edad: '20' }

person.edad = 25;                //chande a property value.
person.country = 'mexico';       //add a new property.
person["talk"] = 'spanish';      //add a new property.
person["live"] = 'texas';        //add a new property.

console.log(person);
console.log(person["edad"]);
console.log(person["country"]);
console.log(person.talk);

console.log(person.live);       //live is texas.
delete person.live;             //delete.
console.log(person.live);       //live is undefined.

console.log(person.hasOwnProperty("origen"));       //define is a object has a property.

//***objects destruc***.//
const address = {
    street: '',
    city: '',
    country: ''
}
//
const street = address.street;
const city = address.city;
const country = address.country;

//
const dog = {
    nombre: 'ashiii',
    pelage: ['negro', 'peludo']
}
//
const nombreMascota = dog.nombre
console.log(nombreMascota);
//
const { pelage } = dog;
console.log(pelage);
//
console.log(dog.pelage[0]);
console.log(dog.pelage[1]);
//
const web = {
    nombre: 'la falle',
    link: {
        enlace: 'www.lafalle.com'
    },
    socialnetworks: {
        facebook: {
            nombre: 'facebook',
            link: 'facebook/lafalle'
        },
        youtube: {
            nombre: 'youtube',
            link: 'youtube/lacube'
        }
    },

}
//
console.log(web.socialnetworks.facebook);
console.log(web.socialnetworks.youtube.link);