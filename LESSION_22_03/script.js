const squared = (x) => x * x;

const myFunct = () => {
    console.log(this);
}

function toSquare() {
    document.getElementById("rezults").innerText = squared(document.getElementById("value").value);
    myFunction();
    
}

class Animal {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }

    makeSound(){
        console.log(this.name + "is making the sound");
    }
}

function onInit() {
    let dog = new Animal("jacky", 3);
    console.log(dog);
    dog.makeSaound();
    Animal.sayHello();
    // Animal.makeSound(); <-- this triggers the error
    // dog.sayHello(); <-- this triggers the errorgfbZ
}
