// Truth and falsey Values

/* Javascript data type have a default true and falsey value
"false"*/

let str = '';
let myNum = 0; // -0, 0n
let myUndefined = undefined;
let myNull = null;
let bool = false;
let notNumber = NaN; // everything else will revert to true

if(notNumber){
    console.log(`The condition is truthy`);
} else {
    console.log(`The condition is falsey`);
}

// The difference between loose and strict equality `==` and `===`

// Loose equality comparison
// Checks for datatype, converts whenever possible

console.log(Boolean(10 == `10`)); // true, string converted to same datatype; a number

let loose = Boolean(10 == `10`);
let myStrict = Boolean(10 === `10`); //false
let loose1 = Boolean(0 == ``); // true
let myStrict1 = Boolean(0 === ``); // false, no converting

console.log(loose); // false, string doesn't get converted

// Debug

let num = 0; //= is just a single operator, let is assigned with a value

if((num === 0)) {   // === compares those two values so if is printed; otherwise  num = 0 would print `Not zero`
    console.log(`Number is zero ${num}`);
} else {
    console.log(`Not zero`);
}




