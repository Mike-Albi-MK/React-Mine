// ES6 import 

import readlineSync from `readline-sync`;

let myName = readlineSync.question(`What is your Name?` );
let age = readlineSync.question(`How old? `);

console.log(typeof age);

let number = readlineSync.question(`Power of 2: `);
let result = number + 2;

console.log(`The sum 2 ${number} is ${result}`);

let myString = `The quick brown \n fox jumps over the lazy dog.`;

let html = `<div>\n` + `<h1> Hello\n`;
console.log(html);

// the \\ two back slashes escape itself
let myString1 = `The quick brown \\ fox jumps over the lazy dog.`;

// The backslash is a scape character
// \n adds a new line
let myString2 = `The quick brown \n fox jumps over\n the lazy dog.`;

// Get the size of a string with the method length
let size = myString.length;

console.log(myString[0]);

console.log(myString[size -1]);