//Buggy Code (Part 5)
/* 
    Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.*/

function printArray(number) {
    let newArray = [];
  
    for(let i = 1; i <= number; i++) {
      newArray.push(i);
    }
  
    return newArray;
  }

  console.log(printArray(1));
  console.log(printArray(3));
  console.log(printArray(6));
  console.log(printArray(12));

//----------------------------------------------------------------------//

  //Buggy Code (Part7)
  /*
    Mubashir wants to swap two given numbers!

It is not returning the right values. Can you help him fix it?

a = 100
b = 200
a, b = swap(a, b)
print(a, b) // Should print out "200, 100", but the function prints out "100, 100" */

function swap(a, b) {
	let temp = b;
    b = a;
    a = temp;
	return [a, b]
}

console.log(swap(100, 200));
console.log(swap(44, 33));
console.log(swap(21, 12));

//----------------------------------------------------------------------//

//The Farm Problem
/* In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

    chickens = 2 legs
    cows = 4 legs
    pigs = 4 legs

The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
Examples

animals(2, 3, 5) ➞ 36

animals(1, 2, 3) ➞ 22

animals(5, 2, 8) ➞ 50
     */

function animals(chickens, cows, pigs) {
	let legsTotal = (chickens *2) + (cows * 4) + (pigs * 4);
    return legsTotal;
}

console.log(animals(2, 3, 5));
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8));
console.log(animals(12, 34, 52));

//----------------------------------------------------------------------//

//Using the "&&" Operator
/*
   JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

Consider a && b:

    a is checked if it is true or false.
    If a is false, false is returned.
    b is checked if it is true or false.
    If b is false, false is returned.
    Otherwise, true is returned (as both a and b are therefore true ).

The && operator will only return true for true && true.

Make a function using the && operator.
Examples

and(true, false) ➞ false

and(true, true) ➞ true

and(false, true) ➞ false

and(false, false) ➞ false  */

function and(a, b) {
	return a && b;
}

console.log(and(true, false));
console.log(and(true, true));
console.log(and(false, true));
console.log(and(false, false));



//----------------------------------------------------------------------//


//Are the Numbers Equal?
/* 
    Create a function that returns true when num1 is equal to num2; otherwise return false.
Examples

isSameNum(4, 8) ➞ false

isSameNum(2, 2) ➞  true

isSameNum(2, "2") ➞ false */

function isSameNum(num1, num2) {
	if (num1 === num2){
    return true;
     } else {
        return false;
     } 
}

console.log(isSameNum(4, 8));
console.log(isSameNum(2, 2));
console.log(isSameNum(2, "2"));


//----------------------------------------------------------------------//

//Football Points
/*
    Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

    wins get 3 points
    draws get 1 point
    losses get 0 points

Examples

footballPoints(3, 4, 2) ➞ 13

footballPoints(5, 0, 2) ➞ 15

footballPoints(0, 0, 1) ➞ 0 */

function footballPoints(wins, draws, losses) {
	let pointsByWins = wins * 3;
    let pointsByDraws = draws * 1;
    let pointsTotal = pointsByWins + pointsByDraws;
    return pointsTotal;
}

console.log(footballPoints(3, 4, 2));
console.log(footballPoints(5, 0, 2));
console.log(footballPoints(0, 0, 1));

//----------------------------------------------------------------------//


/*
    Object exercise

- Build an object called "myDay" with the following structure:
- Include your name as a property
- Include an empty array called "activities"
- Create a method "getDayOfWeek" to get the current day of the week.
- Create a method "addActivity" to add new activities to the array "activities" (waking up, eating, working - you can use emojis)
- Implement a method "printDailyRoutine" to print a message displaying your name, the current day, and your activities using emojis.
- Now add some activities like this:
    myDay.addActivity("⏰ Waking up");
    myDay.addActivity("🍳 Eating breakfast");
    myDay.addActivity("💻 Working");
- Execute your program to see your daily routine printed out.
OUTPUT: Hi, my name is Paola and this is how my Thursday looked like: ⏰ Waking up 🍳 Eating breakfast 💻 Working */

const myDay = {
    name: "Mike Albrecht",
    activities: [],
    getDayOfWeek: function() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayIndex = currentDate.getDay();
        return daysOfWeek[dayIndex];
    },
    addActivity: function(activity) {
        this.activities.push(activity);
    },
    printDailyRoutine: function() {
        const dayOfWeek = this.getDayOfWeek();
        const activitiesAdded = this.activities.join(" ");
        return `Hi, my name is ${this.name} and this is how my ${dayOfWeek} looked like: ${activitiesAdded}`;
    }
};

myDay.addActivity("Waking Up");
myDay.addActivity("Eating breakfast");
myDay.addActivity("Working");
myDay.addActivity("Relaxing");

myDay.printDailyRoutine();



//----------------------------------------------------------------------//


function isSeven(x) {
	return x === 7 ? true : false;
}; 

console.log(isSeven(4));
console.log(isSeven(9));
console.log(isSeven(7));


//----------------------------------------------------------------------//


//Equality Check
/*
   In this challenge, you must verify the equality of two different values given the parameters a and b.

Both the value and type of the parameters need to be equal. The possible types of the given parameters are:

    Numbers
    Strings
    Booleans (false or true)
    Special values: undefined, null and NaN

What have you learned so far that will permit you to do two different checks (value and type) with a single statement?

Implement a function that returns true if the parameters are equal, and false if they are not.
Examples

checkEquality(1, true) ➞ false
// A number and a boolean: the value and type are different.

checkEquality(0, "0") ➞ false
// A number and a string: the type is different.

checkEquality(1,  1) ➞ true
// A number and a number: the type and value are equal.  */

function checkEquality(a, b) {
  if (typeof a === typeof b) {
    return true;
  } else {
        return false;
    }
}

console.log(checkEquality(1, true));
console.log(checkEquality(0, "0"));
console.log(checkEquality(1, 1));


//----------------------------------------------------------------------//


const profitableGamble = (prob, prize, pay) => {
    return prob * prize > pay;
}
    /*if (prob * prize > pay) {
        return true;
    } else {
        return false;
    }
}*/

console.log(profitableGamble(0.2, 50, 9));
console.log(profitableGamble(0.9, 1, 2));
console.log(profitableGamble(0.9, 3, 2));


//----------------------------------------------------------------------//

//Boolean to String Conversion
//Create a function that takes a boolean variable flag and returns it as a string.

const boolToString = (flag) => flag.toString();

console.log(boolToString(true));
console.log(boolToString(false));

//Frames Per Second
const frames = (minutes, fps) => minutes * fps * 60;

console.log(frames(1, 1));
console.log(frames(10, 1));
console.log(frames(10, 25));

const calculateFuel = (n) => {
    let fuel = n * 10
    return fuel < 100 ? 100 : fuel; 
}
console.log(calculateFuel(15));
console.log(calculateFuel(23.5));
console.log(calculateFuel(3));

const makePair = (n1, n2) => " (" + n1 + " "+" "+ n2 +")";

let letters = ["a", "b", "c", "d"];
for (let item of letters) {
    console.log(item);
}

const fn = () => {};
console.log(typeof fn);

class Vehicle {
    constructor(model, color, year, country) {
        this.model = model;
        this.color = color;
        this.year = year;
        this.country = country;
    }
}
let car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

const animal = {
    type: "cat",
    name: "Ruphus",
    color: "orange",
};

console.log(Object.keys(animal));
console.log(animal.age);