/*  -14- */
//***herencia classes***.//
class Person {
    constructor(name) {

    }
    walk() {
        console.log("walk");
    }
}
//
class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("teach");
    }
}
//
const teacher = new Teacher("Mosh", "MSc");