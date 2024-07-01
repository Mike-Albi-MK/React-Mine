import readlineSync from "readlineSync";
// const readline = require(`readline-sync`);

const name = readlineSync.question("What is your name?");
const birthYearString = readlineSync.question("In which year were you born?");
const birthPlace = readlineSync.question("In which city you were born?");
const place = readlineSync.question("In which city do live now?");
const currentYearString = readlineSync.question("What is the current year?");
const currentYear = parseInt(currentYearString);
const birthYear = parseInt(birthYearString);

const intro = `Hello My name is ${name}. I was born ${currentYear-birthYear} ago in ${birthPlace}. Now I am living in ${place}.`;

console.log(intro);
