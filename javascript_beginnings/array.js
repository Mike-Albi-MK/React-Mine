// ARRAYS

/* The purpose of arrays is to save multiple values in one value
Array literals `sample = []`
– accessing items within arrays with square brackets 
– re-assigning arrays with square brackets `sample[index]`*/

/* single values:
let a1 = "cat";
let a2 = "fish";
let a3 = "bird";

now as an array:*/

const animals = [`cat`, `fish`, `bird`];

const names = [];

names[0] = `John`;
names[1] = `Mary`; // console.log(names); => [`John`, `Mary`]

console.log(animals);

console.table(animals);

// Working with arrays – items are retrieved using the index(position);

let firstItem = animals[0];

animals[1] = `dog`;

console.log(names); // now it's `cat`, `dog`, `bird`

const animala = [];

// push method adds items to the last position

animala.push(`cat`);
animala.push(`fish`);
animala.push(`leopard`);
animala.push(`lion`);
animala.push(`bear`);



// add items to the first position

animala.unshift(`dog`);
animala.unshift(`shark`);

// method to remove items – last item via: 

animala.pop(`bear`);

// method to remove first item:

animala.shift(`shark`);

console.table(animala);

console.log(animala.length);

if(animala.length){
    console.log(`true`);
}


const brands = [];

brands.push(`fender`);
brands.unshift(`gibson`);
brands.unshift(`ibanez`);

console.table(brands);

const cars =[];

cars.push(`Mercedes`);
cars.push(`Ferrari`);
cars.push(`Maserati`);
cars.push(`Lamborghini`);
cars.push(`Bentley`);
cars.push(`Porsche`);

console.table(cars);

/* Returning the last item: */

// let last = animala.length - 1;

// console.log(animala[last]);
//console.log(animala.at(-1));

console.table(animala);
const sliced = animala.slice(1, 3);

console.log(sliced);

// includes method

// tests if a particular element exisconst array


if(animala.includes(`leopard`)){
    console.log(`The array has leopards`);
} else {
    console.log(`No`)
}

console.table(animala);


const numbers = [1, 2, 3, 4];

let numString = numbers.toString();
let joined = numbers.join(' '); // ('-'); ('');

console.log(joined);

let password = `letmein`;
let greeting = `Good morning to the class`;

//let strArray = password.split('');
let strArray = greeting.split('-');

console.log(strArray);

const arguments = process.argv;

const animalan = arguments.slice(2);

console.table(animalan);

//More Array methods

const args = process.argv;

const house = args.slice(2);

house.push(`windows`);
house.push(`doors`);
house.push(`keys`);
house.push(`locks`);

console.table(house);

const fruits = [`apple`, `orange`, `mango`, `banana`, `pineapple`];

let indexOfMango = fruits.indexOf(`mango`);
let indexOfLime = fruits.indexOf(`lime`);

console.log(indexOfLime);

let str = `Hello`;
let strArr = str.split(``);

let reversedArr = strArr.reverse();

console.log(reversedArr);

// removes elements from an array returning the deleted elements
// modifies the original array console.table(spliced, fruits)!!!
const spliced = fruits.splice(2, 4);

console.table(spliced);
