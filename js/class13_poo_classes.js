/*  -13- */
//*** classes ***.//
class Person {
    constructor(name) {

    }
    walk() {
        console.log("walk");
    }
}
//
//const person = new Person("Mosh");
//persona
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    //
    saludar() {
        return (`!hola soy ${this.nombre} ${this.apellido}, y tengo ${this.edad} years`);
    }
}
//
//const persona = new Persona("juanita", "garcia", 21);
//
//console.log(persona);
//console.log(persona.saludar());
//book
class Book {
    constructor(title, autor, year, gender) {
        this.title = title;
        this.autor = autor;
        this.year = year;
        this.genero = gender;
    }
    //
    info() {
        return (`!the ${this.title} of ${this.autor} of ${this.year}, is a book of gender ${this.genero}.`);
    }
    //
    author() {
        return (this.autor);
    }
    //
    gender() {
        return (this.genero);
    }
}
//
let books = [];
while (books.length < 3) {
    let title = prompt('Introduce the title.');
    let author = prompt('Introduce the author.');
    let year = prompt('Introduce the year.');
    let gender = prompt('Introduce the gender.').toLowerCase();
    //
    if (title != '' &&
        author != '' &&
        !isNaN(year) &&
        year.length == 4 &&
        (gender == 'aventura' || gender == 'terror' || gender == 'fantasia')) {
        //
        books.push(new Book(title, author, year, gender))
    }
}
//const book = new Book("fifty shadows", "ggvhcs", 1997, "fiction");
//
const showBooks = () => {
    console.log(books);
}
//
//showBooks();
//
const showAuthor = () => {
    let autores = [];
    for (const book of books) {
        author.push(book.author());
    }
    console.log(autores.sort());
}
//
//showAuthor();
//
const showGender = () => {
    let gender = prompt('Introduce the Gender to find.');
    for (const book of books) {
        if (book.gender() == gender) {
            console.log(book.info());
        }
    }
    console.log(autores.sort());
}
//
showGender();