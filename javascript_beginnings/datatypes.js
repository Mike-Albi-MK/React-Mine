/*
    JS divides datatypes in two groups:
    PRIMITIVES (string, boolean, undefined, null and few more)
    OBJECTS (objects, arrays, functions)
*/

// STRING
// A string is a value surrounded by "" ''

let myString = "Hey there";
console.log( myString );

// TYPEOF
// typeof to find out variable type
// it is an operator that returns a string indicating the type of value we are dealing with

console.log( typeof myString );

// I can access individual letters using bracket notation []
// strings have a 0 based index, they start at zero
// spaces also hold an index
console.log( myString[0] ); // h
console.log( myString[1] ); // e
console.log( myString[4] ); // t
console.log( myString[3] ); // empty space

// LENGTH
// It is a built in property that tells us the number of characters and spaces in a string
// lengths uses dot notation

let myString2 = "tes t"
// I want to find out how many chars are in myString2
console.log( myString2.length ); // 5

/* A string could also be disguised as a number */
let myString3 = "25" // string.. notice the quotes!!
console.log( typeof myString3 ); // string

// NUMBERS
/* 
A number can be 
    Integer – a whole number (90, 2, 34)
    float – a number with a decimal point (4,5, 2.54)
    NaN – "not a number" A warning that shows up when performing operations between numbers andnon-numbers
*/

let myNum = 50; // no quotes
console.log( "test" * myNum ); // NaN trying to mmulitply a string with a number
console.log( "90" - myNum ); // 4o js performs type coercion behind the scenes .. NOT GOOD PRACTOCE!!!

// BOOLEANS
/*
    booleans can only have  a value of true or false
    falsely values (false, 0, -0, empty string, undefined, null, NaN)
    All other values evaluate to true
*/

let bool1 = true;
let bool2 = false;
let undefinedVar; // If I declare a variable but do not assign any value to it, it will be undefined
console.log( undefinedVar ); //undefined

// We can check the boolean value of a variable using the built in function Booleand()
console.log( Boolean( bool1) ); // true
console.log( Boolean( bool2) ); // false
console.log( Boolean( undefinedVar ) ); //false
console.log( Boolean( NaN) ); //false
console.log( Boolean( 0 ) ); // false
console.log( Boolean(5) ); // true
console.log( Boolean("") ); // false
console.log( Boolean(" ") ); // true;

// UNDEFINED
// A variable default value is undefined unless you specify something different
let profile;
console.log( profile ); // undefined

// NULL
/*
    Represents the absence of something
    If something returns null it usually means an object was expected but could not be created or delivered
*/

// ARRAY
/*
    An container for multiple values
    0 indexed ( strats from zero )
*/

let myArray = [1,2,3, "hello", false];
console.log( myArray[3] ); // hello

// OBJECTS {}
/*
    A container for separated key:value pairs
*/

let person = {
    name: "Dave",
    age: 32,
    pets: ["dog", "cat"],
    returningCutomer: true,
    address: {
        street: "kastanienallee",
        houseNo: 43,
        city: "Berlin"
    }
}

console.log( person );

let isNaN = "hello";

console.log(isNaN);