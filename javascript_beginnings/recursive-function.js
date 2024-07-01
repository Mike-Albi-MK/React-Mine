//RECURSIVE FUNCTION

/* A function that calls itself 

function rec() {
    rec();
}

rec();

Function will call itself again indefinitely until memory overstacks

*/

function rec() {
    rec();
}

function countDown(num) {

    //base case
    if (num < 1){
        return; 
    }

    console.log(num);
    return countDown(num - 1);
}

countDown(4);

//Task

function factorial(n) {
    //factorial 5 * 4 * 3 * 2 * 1
    //base case
    if (n === 1 || n === 0){
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

/*
    // Task:
// 1. Create a function that return a shallow clone of an object
////// use a loop method
// 2. Modify so that it the function deep clone objects with a recursive function

// Bonus
// 3. Allow the function to deep clone both objects and arrays.

const deepCloning = (obj) => {
    //base case
   
    return;
}; */

//MY SOLUTION:

const deepCloning = (obj) => {
    if (typeof obj !== 'object' || obj === null){
        return obj;
    }

    let cloneObj = {};

    for (let key in obj) {
        if(typeof obj[key] === 'object' && obj[key] !== null) {
            cloneObj[key] = deepCloning(obj[key]);
        } else {
            cloneObj[key] = obj[key];
    }
}
    return cloneObj;
};


/*  const deepCloning = (obj) => {
    // Base case: if obj is not an object or is null, return it
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    // Initialize cloneObj as an empty object
    let cloneObj = {};

    // Loop through each key in the object
    for (let key in obj) {
        // Check if the value is an object or array
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Recursively clone nested objects or arrays
            cloneObj[key] = deepCloning(obj[key]);
        } else {
            // For non-object values, simply assign the value
            cloneObj[key] = obj[key];
        }
    }
   
    return cloneObj;
};

// Example usage:
const originalObject = { a: 1, b: { c: 2 }, d: [3, 4] };
const clonedObject = deepCloning(originalObject);
console.log(clonedObject); // Output: { a: 1, b: { c: 2 }, d: [3, 4] }

// Modify the cloned object to see that the original remains unaffected
clonedObject.b.c = 5;
console.log(originalObject); // Output: { a: 1, b: { c: 2 }, d: [3, 4] }
console.log(clonedObject); // Output: { a: 1, b: { c: 5 }, d: [3, 4] }
 */


//LIVE CODE SOLUTIION


const myObj = {
    name: "Mario",
    last: "bros",
    age: 21,
    hobby: {food: "Pizza", friends: ["Ligi", "Yoshi"]},
}

const deepCloning1 = (obj) => {

    //base case
    if (typeof obj !== 'object' && !Array.isArray(obj)){
        return obj;
    };

    if (Array.isArray(obj)) {
        return obj.map(item => deepCloning1(obj[key]));
    };

    const clone = {};

    for (const key of Object.keys(obj)) {
        clone[key] = obj[key];
    };

    return clone;
}

const newObj = deepCloning1(myObj);
myObj.hobby.food = 'Salad';
myObj.hobby.friends.push('Bowser');

console.log(newObj);
console.log(myObj);

