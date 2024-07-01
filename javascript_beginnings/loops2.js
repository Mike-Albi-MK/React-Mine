// Loops and Arrarys

let fruits = ["apple", "bananas", "orange", "melon"];
console.log(fruits.length); // 4

// I want to console.log all array elements 

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

/* apple | bananas | orange | melon */

console.table(fruits);

/* TASK ******************************
15min
Given the following array calculate the sum of all even numbers and log it to the console
const nums = [2, 5, 10, 15]; */

const nums = [2, 5, 10, 15];
let sumEven = 0;

for (let i = 0; i < nums.length; i++){
    if (nums[i] % 2 === 0){            // number is even, cuz divided by 2 no remains
        sumEven = sumEven += nums[i];
    }
}

console.log(sumEven);

// SOLUTION:

const nums1 = [2, 5, 10, 15];
let evenSum = 0;

for (let i = 0; i < nums1.length; i++){
    if (nums1[i] % 2 === 0){
        evenSum = evenSum + nums1[i];} // evenSum += nums[1]
}

console.log(`Sum of even numbers is ${evenSum}`);

// BREAK STATEMENT

/* You can prematurely exit a loop using the "break" statement */

for (let i = 0; i <= 5; i++){
    console.log(i);

    if ( i === 2) {       // stop the loop once the condition is met
        console.log("stop!");
        break;
    }
}

console.clear();
/* TASK:
Scenario: loop until you find a specific name/item
comsole.log if the name was found OR not */

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const targetName = "Charlie";
let found = false;

for (let i = 0; i < names.length; i++){
    if (names[i] === targetName){
        console.log(`${targetName} found`);
        found = true;
        //console.log(`${targetName} found at ${[i]}`);
        break; // exit the loop
    } 
}

    if (!found) {console.log(`${found}, ${targetName} not found`)
}


// CONTINUE STATEMENT

// It skips an iteration if the condition is met
// The "continue" statement will skip a specific iteration and continue till the end of the loop

for (let i = 0; i <= 5; i++){
    if ( i === 3){
        continue; // as in "skip"
    }
    console.log(i);
}

console.clear();
// Output: 0, 1, 2, 4, 5 we skipped number 3

// Sceanrio: Print values above a certain value

let arrPrices = [10, 5, 7, 1, 43];

for (let i = 0; i < arrPrices.length; i++){
    if (arrPrices[i] <= 7){
        continue;
    }
    console.log(arrPrices[i]);
}

console.clear();

// FOR ... OF
// allows us to iterate over an array

const array1 = ["Mary", "Jill", "Jule"];

for ( let element of array1){
    console.log(element);
}

/* Why would I use a regular loop over a FOR ... OF?

    – Index access: in a traditional loop you have immediate access to the index
    – Performance: traditional loops can be faster espacially when dealing with large arrays, however the difference is usually not that massive
    – Control: wih traditional loops you have mor control. You can increment the index by more than 1, you can also decrement

The choice between a for loop and a for OF loop boils down to specific requirements and personal preference    */