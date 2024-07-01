//INHERITANCE

/*
    Class inheritance is a way for a class to extend another one.
    That way we can add new functionality  */

    class Person {
        constructor (name) {
            this.name = name;
        }

        walk(){
            console.log(`${this.name} is walking`);
        }

        eat(){
            console.log(`${this.name} is eating`);
        }
    }

    let person1 = new Person("Luigi");
    person1.walk(); //Luigi is walking

    /*
        Let's create a new class called Teacher
        A teacher is still a person but with extra "features"
        How can we inherit from Person? Using "extends" */

        class Teacher extends Person {
            /*we are inherating the constructor from Person cos we ware using the keyword "extends". Doing so we will inherit all existing props and methods. */
            teach(){
                console.log(`${this.name} is teaching`)
            }
        }

        const teacher1 = new Teacher("Jill");
        teacher1.teach(); //Jill is teaching

        //What if we need to add more properties?

        /*We can use "super" to refer to the first parent!
        1. super(...) to call a property from a parent constructor
        2. super.method(...) to call a parent method
         */

        class Teacher2 extends Person {
            constructor (name, degree){
                super(name); //"super" makes it clear that we are receiving "name" property from the Person class
                this.degree = degree;
            }
            tutoring(){
                console.log(`${this.name} has a ${this.degree} and is allowed to do tutoring`);
            }

            //Building on top of inherited method
            eating(){
                super.eat(); //this method comes from th Person class
                console.log(`${this.name} is done eating`);
            }
        }

        const mary = new Teacher2("Mary", "Phd");
        mary.tutoring();
        mary.eating();

/* Instructions:
Create a base class called Shape. It should have the following properties:
name (string): Name of the shape.
color (string): Color of the shape.
Add a method getDescription() to the Shape class. This method should return a string describing the shape's name and color.
Create two subclasses: Circle and Rectangle.
Circle should inherit from Shape. It should have an additional property radius (number).
Rectangle should also inherit from Shape. It should have additional properties width and height (both numbers).
Override the getDescription() method in both Circle and Rectangle classes to include additional information specific to each shape. For example, the description for a circle might include its radius, and the description for a rectangle might include its width and height.
Create instances of Circle and Rectangle and call the getDescription() method on each to ensure that it displays the correct information. */

class Shape {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    getDescription(){
        return `This shape is called ${this.name} and is ${this.color}`
    }
}

class Circle extends Shape {
    constructor(name, color, radius){
        super(name, color);
        this.radius = radius;
    }
    getDescription(){
        return `This is a circle with a radius of ${this.radius}`
    }
}

class Rectangle extends Shape {
    constructor(name, color, width, height){
        super(name, color);
        this.width = width;
        this.height = height;
    }
    getDescription(){
        return `This is a ${this.color} rectangle with a width of ${this.width} cm and a height of ${this.height} cm`
    }
}

const circle1 = new Circle ("circle", "blue", 12);
console.log(circle1.getDescription());

const rectangle1 = new Rectangle ("rectangle", "green", 24, 28);
console.log(rectangle1.getDescription());


//======================================================================//

//RECAP

class Personality {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.isAdult = this.checkAge();
        //this.isAdult = () => ${this.name};
    }
    //Public method
    greet(){
        return `Hello ${this.name}!`;
    }

    checkAge(){
        return this.age >= 18;
    }
}

class Student extends Personality {
    constructor(id, ...args) {
        super(...args);
        this.id = id;
    }
}

const p1 = new Personality('Mario', 20);
const p2 = new Personality('Luigi', 15);

console.log(p1);
console.log(p2);

const s1 = new Student(191292393, 'Jane', 30);


console.log(s1);