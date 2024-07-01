// Process is NODE.js object

//console.log(process.argv);

// argv is an array

let flag3 = process.argv[2];
const args = process.argv.slice(2);

/* console.log(flag3); // Output: hello */

console.log(args);

console.clear();

// 'slice' returns a value at a certain position || 'splice' modifies the string by removing a value (from a collection of characters; because that is what a string is)

const numbers = [1, 2, 3, 4];

// add numbers:



console.log(numbers.concat(5));

// numbers.push(5) => modifies the current array and `adds` a new value; while numbers.concat(5) `creates` a new array with: [1, 2, 3, 4, 5]

const items = [12, "words", true, [1, 2], {}];
// arrays can store than just numbers

// let can be `empty`, the default value is "undefined"

const myString = `Hello`;

console.log(myString[0]); // Output: H

console.log(myString.charAt(0)); // Output: H

console.log(myString.at(-1)); // Output: o

let last = myString[myString.length -1];



// Loop for let: Initial; condition; updating the initial value

/*for (let i = 0; i <= 10; i++){
    console.log(i);
}*/

// REMINDER: i < 10 prints: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9; while i <= 10 prints: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

const names = ['Mario', 'Luigi', 'Yoshi'];

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// Output: Mario, Luigi, Yoshi

for (let i = 0; i < myString.length; i++){
    console.log(myString[i]);
}

// FOR OF LOOP

for (const name of names){
    console.log(name);
} // we loose the ability to manipulate the index

for (const char of myString){
    console.log(char);
}

// Reduce Array Values to a single Value

const ages = [12, 40, 10, 20, 99, 50];
let sumAges = 0;


for (const age of ages){
    sumAges += age;
}

console.log(sumAges);

// Filtering values of an array

const adults = [];

for (const age of ages){
    if(age >= 18){
    adults.push(age)
    }
}

console.log(adults);  // Output_ 40, 20, 99, 50

