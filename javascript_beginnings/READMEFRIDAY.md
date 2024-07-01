## Basic String Methods

// Checking your node: node --version

// Creating a new file touch app.js

/* console.log("Hello World!");  ==> in code
$node app.js command in terminal to run*/

// const a = 0;  I'm assigning a to 0; it's a number

const b = "0";
console.log(typeof b);

output in terminal: string

const b = [];
console.log(typeof b);

terminal: object

// const a = 5;
console.log("This is 5 without quotes: ", typeof a);

const b = "5";
console.log("This 5 with quotes: ", typeof b);

terminal: a: number
b: string

const c = a + b // 5 + "5" = ??
console.log("Output: ", typeof c);

terminal: string 55

/* The number is converted to a string | logically not right to conconate numbers and strings*/

const a = "Hello";
const b = "World!";
// let c = a + b;

let c = a.concat(" ", b);

// let c = a.concat(b);
console.log(c);

Output: HelloWorld! – no space

let c = a.concat(" ", b); – now three strings in brackets (a, " ", b),
console.log(c);

Output: Hello World!

let c = a.concat(" ",b, " Patrick");

Output: Hello World! Patrick

let c = a.concat(" ", b.toUpperCase(), " Mike");
Output: Hello WORLD! Mike

let c = a.concat(" ", b.toUpperCase();)
Output: Hello MIKE!

const d = b[0].toUpperCase() + b.slice(1).toLowerCase();
let c = a.concat(" ", d);

// nodemon: nodemon app.js
Savings shows you only output

// Conditionals

const user = true;
/* (Boolean = true or false) */
//console.log(typeof user);

// Conditional Expression ===> ternary operator
user ? console.log("Hello Mike!") : console.log("Login first!");

const user = "Bob";

user ? console.log(`Hello ${user}`) : console.log("Login first!");

const user = "";
//console.log(typeof user);
// undefined, null, "", 0 ==> false
// ""

but: const user = 1;
console.log(`Hello ${user}`), Output: Hello 1

!user ? console.log(`Hello ${user}`) : console.log("Login first!");
logic reversed Output: Hello false!

!!user ? console.log(`Hello ${user}`) : console.log("Login first!");
Output: Login first!

// Installing nodemon

$ nodemon --version

$ npm install -g nodemon





/* // const = 8/6;

x > 7 ? console.log("Correct!"); : console.log("Wrong!!); */