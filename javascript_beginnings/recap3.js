//THIS IS AFTER THE EASTER HOLIDAYS

//RECAP EXTRAS:


function whatIsMyName () {
    console.log(`Hi, my name is Mike :-)`);
}

whatIsMyName();

// function declaration

function first() {
    console.log("I am function first");
    second();
}

// function execution

first();

function second() {
    console.log("I am function second");
}
first();
second();

/*  RETURN
    It determines the value being returned to the function.
    It stops the function execution. */


function sum (num1, num2) {
    return num1 + num2;      //return is just returning the value to the function; so we need to define
}

const result = sum(2, 3); //arguments being passed
console.log(result);

function add (a, b) {
    return sum = a + b;
}

add(4, 5);
console.log(sum);

function getRandomNumber() {

    let string = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let randomNumber = Math.floor(Math.random() * string.length);

    return string[randomNumber];
}

console.log(getRandomNumber());

/* function returnNothing() {
    return;
}

const nothingVal = returnNothing();
console.log(nothingVal);   ||  `undefined` because we are not returning anything*/

//Return statement stops function execution

function returnStop() {
    console.log("before return");
    return true; // the function stops executing here
    console.log("after return"); // this line will never be reached
}

returnStop();

// MULTIPLE RETURNS
/* Sometimes you want to return a value based on a condition.
   In this case you will see multiple return statements but only 1 will be executed*/

   function checkAge(age) {
    if (age >= 18){
        return true;
    } else {
        return false;
    }
   }

   const grabReturn = checkAge(7);
   console.log(grabReturn);

   /* Write a function that takes a parameter (number)
      If the number is = 10 return "ten" otherwise return the number being passed */

      function parameterTen(number) {
        if (number === 10){
            return `ten`
        } else {
            return number
        }
      }

      let seeNumber = parameterTen(97);
      console.log(seeNumber);

//====================================================================//

      function salary(position) {
        if (position === 10.000){
            return `you are a boss!`
        } else {
            return `you are a worker bee`
        }
      }

      let moneyMade = salary(5490);
      console.log(moneyMade);

//=====================================================================//

/*
    So far we have been returning only 1 single value ... what if we want
    to return multiple ones?
    We could pack the values in array or object */

// Given the following array, write a function returning a new array containing only values below 50

const myArr = [23, 42, 16, 32, 48, 87, 11, 92, 43, 56];

function extractNumber(arr) {
  let reducedArray = [];
  //we need to loop over each array element:
  for (let i = 0; i < arr.length; i++){
  //we need to check if each element is < 50
    if (arr[i] < 50) {
  //if that's the case we need to push the value to reducedArray
        reducedArray.push(arr[i]);
    }
  }
  //once we are done we return reducedArray
  return reducedArray;

}

const reducedArray = extractNumber(myArr);
console.log(reducedArray);

//For of

let testArr = [3, 6, 7];

for (const item of testArr){
    console.log(item);
}


//MONDAY RECAP forEach, filter, map

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//forEach
//iterates (loop) through the elements
//returns void (undefined)

numbers.forEach(number => {
    //do some work
    //double.push(number * 2);
    console.log(number);
});
//console.log(double);

//Map
//Loop through element
//Each iteration it returns/pushes a new modified copy of the item
//finally returns noew array with equal length to the original

const doubles = numbers.map((number) => number * 2);
console.log(doubles);





//Filter
//used to filter through the original array
//callback function has to return a boolean (true or false)
//return a new array with the filtered values

const evenNumbers = numbers.filter((numbers) => numbers % 2 === 0);
console.log(evenNumbers);

const biggerThanFive = numbers.filter((number) => number > 5);
console.log(biggerThanFive);

//Array containing the triple of the odd numbers

const tripleOddArray = numbers.filter((numbers) => numbers % 2 !== 0).map(
    (number) => number * 3
);
console.log(tripleOddArray);
