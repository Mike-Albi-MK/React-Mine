// RECAP 

// JavaScript Expressions

// Declaring a variable

let greet; /* means that the sentence is over */
/*  variable undefinded in this current state, default value is undefined */
console.log(greet);

// variable value assignment

greet = 'Good Day';

// declaration and value assignment at once

let firstName = "Mario";

// const is a 'variable' constant

const secret = 'let me in';

// camelCase start with lowercase letter, words joined together with Uppercase

let lastName;
let myVariable;
let someValueThatHasMeaning;
let x; // obscure, not a good value name, purpose of value is not clear

// funcrions have log(arguments)""
// functions need to be ***called***
console.log(1000);

// JavaScript Data Type

// Strings
// values within quoatation "", '',
let string = 'a word';
/*string*/

// Numbers,whole, float or negative
let number = 10;
let float = 14.3;
let negative = -500;
let nonNumber = NaN;
/* number */

// Boolean true or false
let isDay = true;
let isAdmin = false;
let hasPW = true;
/* Boolean */

//Null and undefined
let example = undefined;
let users = null; // absecnce of value

// **Objects Data**
// Array [] a collection of things
let numbers = [2, 4, 6, 8];

// Object {} key value data type, similar to dictionaries
let user = {
    key: 'value',
    name: 'Mario',
    age: 20,
};

console.log([numbers]);

// RECAP II

// Short Hand Operator

let total = 0;

let coins = 10;

// long way to write: let coinsPerPerson = coins / 3;

// SHORT HAND:

coins /= 3;

coins++;

console.log(coins);

// Math Class

let round = Math.round(10.5);

console.log(`round`, round);

let floor = Math.floor(2.99999999999);
console.log(`floor`, floor);

let ceil = Math.ceil(2.0000000000000001);

console.log(`ceil`, ceil);

let random = Math.random() * 100 + 1;

console.log(`random`, random);

// loose equality

console.log(2 == `2`);

/* buggy stuff: console.log(0 == false);
console.log(`` == 0); */

// ! NOT

console.log(5 !== 6);

let bool = true;
console.log(bool);
console.log(!bool);
