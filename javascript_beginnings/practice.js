//Create a function that takes an array containing only numbers and return the first element.
//getFirstValue([1, 2, 3]) ➞ 1


const getFirstValue = (array) => array[0];

console.log(getFirstValue([1, 2, 3, 4, 5]));

//Given two arguments, return an array which contains these two arguments.

const makePair = (num1, num2) => "(" + num1 + "," +  num2 + ")";

console.log(makePair(31, 512));

const drop = (array) => array.slice(0);

console.log(drop([1, 2, 3]), 0);

//Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

const getVoteCount = (votes) => votes.upvotes - votes.downvotes;

console.log(getVoteCount({upvotes: 2, downvotes: 33}));

//Write a function to reverse an array.

const reverse = (array) => array.slice().reverse();

console.log(reverse([1, 2, 3, 4]));
console.log(reverse([9, 9, 2, 3, 4]));

//Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

const incrementItems = (array) => array.map((x) => x + 1);

console.log(incrementItems([0, 1, 2, 3]));
console.log(incrementItems([2, 4, 6, 8]));
console.log(incrementItems([-1, -2, -3, -4]));

//Destructuring Arrays

const arr = [1, 2, 3, 4, 5, 6];
const [a, b] = arr;

console.log(a);
console.log(b);

//Create a function that accepts an array and returns the last item in the array.

const getLastItem = function(array){
    return array.pop();
}

console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));

//Create a function that takes an array of numbers or letters and returns a string.

const arrayToString = (array) => array.join('');

console.log(arrayToString([1, 2, 3, 4, 5, 6]));

//Concatenating Two Integer Arrays
//Create a function to concatenate two integer arrays.

const concatArray = (array1, array2) => array1.concat(array2);

console.log(concatArray([1, 3, 5], [2, 6, 8]));
console.log(concatArray([10, 9, 1, 1, 2], [7, 8, 10, 9, 1, 1, 2]));

//Find the Index
//Create a function that takes an array and a string as arguments and returns the index of the string.

const indexFind = (array, item) => array.indexOf(item);

console.log(indexFind(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(indexFind(["Red", "blue", "Blue", "Green"], "blue"));
console.log(indexFind(["a", "g", "y", "d"], "d"));
console.log(indexFind(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));

//Array Indexing
//Given an index and an array, return the value of the array with the given index.

const valueAt = (arr, i) => arr[Math.floor(i)];

console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));

//Buggy Code
//Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

function sumArray(arr) {
	let sum = 0;	
  for (let i = 0; i < arr.length; i++){
	  sum += arr[i]
	}
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray(([-1, 0, 1])));
console.log(sumArray([0, 4, 8, 12]));

//Find the Index (Part#2)
//Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

const search = (arr, item) => arr.indexOf(item);

const searchItem = function(arr, item) {
    if (arr.includes(item)){
        return arr.indexOf(item);
    } else {
        return -1;
    }
}

console.log(search([1, 2, 3, 4], 3));
console.log(search([2, 4, 6, 8, 10], 8));
console.log(search([1, 3, 5, 7, 9], 11));

console.log(searchItem([1, 2, 3, 4], 3));
console.log(searchItem([2, 4, 6, 8, 10], 8));
console.log(searchItem([1, 3, 5, 7, 9], 11));

//Check if an Array Contains a Given Number
//Write a function to check if an array contains a praticular number.

const checkNumber = function(array, number) {
    if (array.includes(number)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkNumber([1, 2, 3, 4, 5], 3));
console.log(checkNumber([1, 1, 2, 1, 1], 3));
console.log(checkNumber([5, 5, 5, 6], 5));
console.log(checkNumber([], 5));

//Less Than, Greater Than
//Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

const arrBetween = function(array, num1, num2) {
    return array.filter(element => element > num1 && element < num2);
}

console.log(arrBetween([1, 5, 95, 0, 4, 7], 3, 8));
console.log(arrBetween([1, 10, 25, 8, 11, 6], 1, 10));
console.log(arrBetween([1, 2, 3, 78], 7, 32));


//The 50-30-20
//The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

//Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

const fiftyThirtyTwenty = function(ati) {
    const needs = ati * 0.5;
    const wants = ati * 0.3;
    const savings = ati * 0.2;
    return {"Needs": needs, "Wants": wants, "Savings": savings}
};

console.log(fiftyThirtyTwenty(10000));
console.log(fiftyThirtyTwenty(50000));
console.log(fiftyThirtyTwenty(13450));

//Similar Bread
//Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

const hasSameBread = function(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] === arr2[i]){
            return true;
        } else {
            return false;
        }
    }
}

console.log(hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
  ));

console.log(hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
  ));

console.log(hasSameBread(
    ["toast", "cheese", "toast"],
    ["brown bread", "cheese", "toast"]
  ));

//Convert All Array Items to String
//Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

const parseArray = function(array){
    return array.map(element => element.toString().split('')).flat();
}

console.log(parseArray([1, 2, "a", "b"]));
console.log(parseArray(["abc", 123, "def", 456]));
console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]));
console.log.apply(parseArray([]));

//======================================================================//

//Conditions

//Is the Number Less than or Equal to Zero?
//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

const lessThanOrEqualToZero = function(num) {
    if (num <= 0){
        return true;
    } else {
        return false;
    }
}
 console.log(lessThanOrEqualToZero(5));
 console.log(lessThanOrEqualToZero(0));
 console.log(lessThanOrEqualToZero(-2));

 //Are the Numbers Equal?
 //Create a function that returns true when num1 is equal to num2; otherwise return false.

 const isSameAs = function (num1, num2) {
    if (num1 === num2){
        return true;
    } else {
        return false;
    }
 }

 console.log(isSameAs(4, 8));
 console.log(isSameAs(2, 2));
 console.log(isSameAs(2, "2"));
 console.log(isSameAs(88, 4));
 console.log(isSameAs(64, 64,));
 console.log(isSameAs(183, 59));


 //Profitable Gamble
 //Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

 const profitableGamble = function(prob, prize, pay) {
    if (prob * prize > pay) {
        return true;
    } else {
        return false;
    }
 }

 console.log(profitableGamble(0.2, 50, 9));
 console.log(profitableGamble(0.9, 1, 2));
 console.log(profitableGamble(0.9, 3, 2));

 //Boolean to String Conversion
 //Create a function that takes a boolean variable flag and returns it as a string.

 const boolToString = function(flag) {
    return flag.toString();
 }

 console.log(boolToString(true));
 console.log(boolToString(false));

 //Buggy Code (Part #4)
 //Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake. Can you help her?

 function greeting(name) {
    if ( name === "Mubashir") {
        return "Hello, my Love!"
    } else {
        return "Hello, " + name + "!";
    }
  }

  console.log(greeting("Matt"));
  console.log(greeting("Mubashir"));
  console.log(greeting("Helen"));


  //Two Makes Ten
  //Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

  const makesTen = function(a, b) {
    if (a === 10 || b === 10 || a + b === 10){
        return true;
    } else {
        return false;
    }
  }

console.log(makesTen(9, 10));
console.log(makesTen(9, 9));
console.log(makesTen(1, 9));

//Compare Strings by Count of Characters
//Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

const compare = function(str1, str2) {
    if (str1.length === str2.length) {
        return true;
    }
    return false;
}

console.log(compare("AB", "CD"));
console.log(compare("ABC", "DE"));
console.log(compare("hello", "edabit"));


//Multiple of 100
//Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

const divisible = function(num) {
    return num % 100 === 0
}

console.log(divisible(1));
console.log(divisible(1000));
console.log(divisible(100));

//Minimal I: If Boolean Then Boolean
//Simplify this code:

/* function isEven(n) {
	if (n % 2 === 0) {
		return true
	}
	else if (n % 2 === 1) {
		return false
	}
} */

function isEven(n) {
    return n % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(9));

//Movie Theatre Admittance
//Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
    //The person is at least 15 years old.
    //They have parental supervision.
//The function accepts two parameters, age and isSupervised. Return a boolean.

const acceptIntoMovie = function(age, isSupervised) {
    if (age >= 15 || isSupervised) {
        return true;
    }
    return false;
}

console.log(acceptIntoMovie(14, true));
console.log(acceptIntoMovie(14, false));
console.log(acceptIntoMovie(16, false));

//Drinks Allowed?
//Drinks served to people 18 and older and when bartender is not on break

const shouldServeDrinks = function(age, onBreak) {
    if (age >= 18 && !onBreak === true) {
        return true;
    }
    return false;
}

console.log(shouldServeDrinks(17, true));
console.log(shouldServeDrinks(19, false));
console.log(shouldServeDrinks(30, true));

//Using Ternary Operators
//Write a function that uses the ternary operator to return "yeah" if bool is true, and "nope" otherwise.

const yeahNope = function(bool) {
    return bool === true ? "yeah" : "nope";
}

console.log(yeahNope(true));
console.log(yeahNope(false));

//Minimal IV: if-else if-else Inferno
//Write a function that returns the boolean true if the given number is zero, the string "positive" if the number is greater than zero or the string "negative" if it's smaller than zero.

/* function equilbrium (x) {
	if (x > 0) {
		return "positive"
	} else if (x < 0) {
		return "negative"
	} else {
		return true
	}
} */

function equilbrium(x) {
    if (x > 0) return "positive";
    if (x < 0) return "negative";
    return true;
}

console.log(equilbrium(2));
console.log(equilbrium(-4));
console.log(equilbrium(0));

//Is the String Odd or Even?
//Given a string, return true if its length is even or false if the length is odd.

const oddOrEven = function(str) {
    if (str.length % 2 === 0) return "true";
    return false;
}

console.log(oddOrEven("apples"));
console.log(oddOrEven("cherry"));
console.log(oddOrEven("pears"));
console.log(oddOrEven("four"));
console.log(oddOrEven("autobahn"));
console.log(oddOrEven("armaturenpflegebedarfsgesetz"));
console.log(oddOrEven("wow"));


//Triangle and Parallelogram Area Finder
//Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.

const areaShape = function(base, height, shape) {
    if (shape === "triangle") {
        return 0.5 * base * height;
    }
    else if (shape === "parallelogram") {
        return base * height;
    } else {
        return "This shape is not valid";
    }
}

console.log(areaShape(2, 3, "triangle"));
console.log(areaShape(8, 6, "parallelogram"));
console.log(areaShape(2.9, 1.3, "parallelogram"));


//Word Numbers!
//Create a function that returns a number, based on the string provided. 

const words = function(str) {
    const wordsToNumbers = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four":	4,
        "five":	5,
        "six":	6,
        "seven": 7,
        "eight": 8,
        "nine":	9,
        "zero":	0
    };
    return wordsToNumbers[str] || NaN;
}

console.log(words("one"));
console.log(words("three"));
console.log(words("nine"));

//Minimal II: Boolean Redundancy

function parity(n) {
	let bool = Boolean(n % 2 === 0);
    if (bool) {
	return "even"; 
	} else {
        return "odd";
    }
}

console.log(parity(4));


//Concatenate First and Last Name on one String

/* concatName("First", "Last") ➞ "Last, First"

concatName("John", "Doe") ➞ "Doe, John"

concatName("Mary", "Jane") ➞ "Jane, Mary" */

const concatName = (firstName, lastName) => `${lastName}, ${firstName}`;

console.log(concatName("First", "Last"));
console.log(concatName("Jane", "Doe"));
console.log(concatName("Mike", "McKnight"));
console.log(concatName("Masamune", "Shirow"));

//Word without First Character
//Create a function that takes a word and returns the new word without including the first character.

const neWord = (str) => str.slice(1);

console.log(neWord("apple"));
console.log(neWord("cherry"));
console.log(neWord("plum"));
console.log(neWord("sugar"));
console.log(neWord("tree"));

//Name greeting
//Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

const helloName = (name) => `Hello ${name}`;

console.log(helloName(`Gerald`));
console.log(helloName(`Tiffany`));
console.log(helloName(`Mike`));
console.log(helloName(`Overlord, Conquerer of all worlds`));
console.log(helloName(`Ed`));

//Luke, I Am Your ...
//Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

const relationToLuke = function(name){
    if (name === "Darth Vader"){
        return "Luke, I am your father.";
    } else if (name === "Leia"){
        return "Luke, I am your sister.";
    } else if (name = "Han"){
        return "Luke, I am your brother in law."
    }
}

console.log(relationToLuke("Darth Vader"));
console.log(relationToLuke("Leia"));
console.log(relationToLuke("Han"));

//Stuttering Function
//Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

const stutter = (word) => {
    const repeatSyl = word.slice(0,2) + "...";
    return repeatSyl + repeatSyl + word + "!";
}

console.log(stutter("incredible"));
console.log(stutter("enthusiastic"));
console.log(stutter("unbelieveable"));
console.log(stutter("outstanding"));
console.log(stutter("ohohmygosh"));

//Reverse Psychology
//For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.

function reversePsychology(string) {
    return `Do not ${string}`;
}

console.log(reversePsychology("wash your dishes"));
console.log(reversePsychology("eat your lunch"));
console.log(reversePsychology("go to school"));
console.log(reversePsychology("trust authority"));


//Space Between Each Character

const spaceMeOut = (string) => string.split(" ");

console.log(spaceMeOut("space"));
console.log(spaceMeOut("far out"));
console.log(spaceMeOut("elongated musk"));

const add = (char, string) => string.split(" ").join(char);

console.log(("R", "javascript is fun"));
console.log(add("#", "hello world!"));
console.log(add("#", " "));

const createID = (firstName, lastName) => {
    const idName = lastName.slice(0,3).toUpperCase() + lastName.slice(3).toLowerCase(); 
    return firstName.charAt(0) + idName;
}

console.log(createID("mary", "lamb"));
console.log(createID("John", "SMITH"));

const toScottishScreaming = (string) => string.replace(/[aeiou]/gi, "e").toUpperCase();

console.log(toScottishScreaming("hello world"));

const wumbo = (words) => words.toUpperCase();

console.log(wumbo("i love making challenges"));
console.log(wumbo("meet me in warsaw"));
console.log(wumbo("wumbology"));

//Buggy Code (Part 6)

function removeNumbers(str) {
	return str.split('').filter(c => !parseInt(c)).join('');
}

console.log(removeNumbers("mubashir1"));

const owofied = (sentence) => sentence.slice(0).replace(/[i]/gi, "wi").replace(/[e]/gi, "we") + " owo";

console.log(owofied("I'm gonna ride 'til I can't no more"));


const wumbology = (words) => words.replace(/[m]/gi, "w" ).toUpperCase();

console.log(wumbology("I LOVE MAKING CHALLENGES"));
console.log(wumbology("MEET ME IN WARSAW"));
console.log(wumbology("WUMBOLOGY"));



const sumEvenNumbers = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
        sum += arr[i]
        }
    }
        return sum
    }

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(sumEvenNumbers([100]));
console.log(sumEvenNumbers([100, 1, 3]));
console.log(sumEvenNumbers([-2, 4, 3]));


const sumEvenOdd = (arr) => {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
        sumEven += arr[i]
        } else {
            sumOdd += arr[i];
        }
    }
        return [sumEven, sumOdd];
    }

    console.log(sumEvenOdd([1, 2, 3, 4, 5, 6]));

    /*const countByColor = (arr) => {
        let count = {};
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "Red")
            let count = arr[i];
        } else if (arr[i] === "Yellow"){
        let count = arr[i];
    } else {
        let count = 1;
    }
    return count;
}*/


// Profit Margin

const profitMargin = (costPrice, salesPrice) => {
    const margin = ((salesPrice - costPrice) / salesPrice) * 100;

    const percentageMargin = margin.toFixed(1) + "%";

    return percentageMargin;
}

console.log(profitMargin(50, 50));
console.log(profitMargin(23, 39));
console.log(profitMargin(33, 84));



function countByColor(objects) {
    // Initialize counters for each color
    let redCount = 0;
    let yellowCount = 0;
    let greenCount = 0;

    // Iterate over each object
    objects.forEach(object => {
        // Convert object string to lowercase for case-insensitive comparison
        const objectLowerCase = object.toLowerCase();

        // Check if the object contains the color
        if (objectLowerCase.includes('red')) {
            redCount++;
        } else if (objectLowerCase.includes('yellow')) {
            yellowCount++;
        } else if (objectLowerCase.includes('green')) {
            greenCount++;
        }
    });

    // Return the counts as an array
    return [redCount, yellowCount, greenCount];
}

// Test case
console.log(countByColor(["Red pen", "Yellow shirt"])); // [1, 1, 0]



function deNest(arr) {
    // If the input is not an array, return it
    if (!Array.isArray(arr)) {
        return arr;
    }
    
    // Continue recursively accessing the nested arrays
    return deNest(arr[0]);
}

// Test cases
console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]])); // ➞ 3
console.log(deNest([[[[[[[true]]]]]]])); // ➞ true
console.log(deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]])); // ➞ "edabit"


//Convert Number to Correspending Month Name

const monthName = function(num) {
    const numbersToMonthName = {
        1: "January",
        2: "february",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12:"December"
    };
    return numbersToMonthName[num];
}

console.log(monthName(3));
console.log(monthName(12));
console.log(monthName(6));
console.log(monthName(2));
console.log(monthName(5));
console.log(monthName(9));


const checkNumber1 = (array, number) => array.includes(number);

console.log(checkNumber1([1, 2, 3, 4, 5], 3));
console.log(checkNumber1([1, 1, 2, 1, 1], 3));
console.log(checkNumber1([5, 5, 5, 6], 5));
console.log(checkNumber1([], 5));


//Corrct the Mistakes

//Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

function squared(a) {
	return a * a
}

console.log(squared(5));

//Basic Variable Assignment

//A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

function nameString(name) {
	let b = "Edabit"
	let result = name + b;
  	return result
}

console.log(nameString("Mubashir"));
console.log(nameString("Matt"));
console.log(nameString("javaScript"));

//Buggy Code (Part 5)
//Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

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

//Buggy Code (Part7)
//Mubashir wants to swap two given numbers!
//It is not returning the right values. Can you help him fix it?

function swap(a, b) {
	return [b, a]
}

console.log(swap(100, 200));
console.log(swap(33, 44));
console.log(swap(12, 21));

//Fix the Expression
//Fix the code in the Code tab so the function returns true if and only if x is equal to 7.


function isSeven(x) {
	return x === 7 ? true : false;
}

console.log(isSeven(4));
console.log(isSeven(9));
console.log(isSeven(7));

//Buggy Code (Part2)
//Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.


function maxNum(n1, n2) {
	if (n1 < n2) {
	  return n2
	}
  else {
	return n1
  }
}


console.log(maxNum(3, 7));
console.log(maxNum(-1, 0));
console.log(maxNum(1000, 400));

//Buggy Code 
//The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.

function hasBugs(buggyCode) {
	if (buggyCode) {
		return "sad days"
	} else  {
		return "it's a good day"
	}
}


console.log(hasBugs(true));
console.log(hasBugs(false));

//Fix the Bug: Simple Array Manipulation
//Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

function incrementItems1(arr) {
	for (let i = 0; i < arr.length; i++)
		arr[i] = arr[i] + 1
	return arr
}

console.log(incrementItems1([0, 1, 2, 3]));
console.log(incrementItems1([2, 4, 6, 8]));
console.log(incrementItems1([-1, -2, -3, -4]));

//Fix the Error: Check Whether a Given Number Is Odd
//Éowyn has written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Help her fix the error.

function isOddNew(num) {
	return num % 2 === 0;
}

console.log(isOddNew(-5));
console.log(isOddNew(25));
console.log(isOddNew(0));

//Buggy Code (Part 3)
//Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

function sumArrays(arr) {
	let sum = 0;	
  for (let i = 0; i < arr.length; i++) {
	  sum += arr[i]
	}
  return sum
}

console.log(sumArrays([1, 2, 3, 4, 5]));
console.log(sumArrays([-1, 0, 1]));
console.log(sumArrays([0, 4, 8, 12]));

//Finding the Bug: Returning the Container
/*The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag.

The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...*/



function getContainer(product) {
	let container;
  switch (product) {
		case "Bread":
			container = "bag";
            break;
		case "Beer":
		case "Milk":
			container = "bottle";
			break;
		case "Cerials":
			container = "box";
			break;
		case "Eggs":
			container = "carton";
			break;
		case "Candy":
			container = "plastic";
            break;
		default:
			container = null;
	}

	return container
}

console.log(getContainer("Bread"));
console.log(getContainer("Beer"));
console.log(getContainer("Candy"));
console.log(getContainer("Cheese"));

//Fix the Broken Code
//A student learning JavaScript was trying to make a function that sorts all the letters of a word, but their code is broken, and they can't figure out why.
//Spot and fix the error(s) in the code to make the function work.

function sortWord(word) {
	return word.split('').sort().join('');
}

console.log(sortWord("dcba"));
console.log(sortWord("Unpredictable"));
console.log(sortWord("pneumonoultramicroscopicsilicovolcanoconiosis"));

//Fix Basic Calculator
/*Mubashir created a function that takes two numbers a and b and an operator o. His function should return the result of the corresponding mathematical function on both numbers. If the operator is not one of the specified characters +, -, /, *, or if there is a division by zero, the function should return null. Help him by fixing the code in the code tab to pass this challenge. */

function basicCalculator(a, o, b) {
    let result = 0;
    if (o === "+") { 
    return a + b;
    }
    else if(o === "-") {
        return a - b;
    }
    else if(o === "/")
    if (b !== 0) { 
    return a / b; 
    }
    else {
        return null; 
        }
    
    else if (o === "*") {
    return a * b;
    }
    return null; 
}

console.log(basicCalculator(2, '+',  4));
console.log(basicCalculator(6, '-',  5));
console.log(basicCalculator(12, '/',  3));
console.log(basicCalculator(3, '*',  4));
console.log(basicCalculator(1, '/',  0));
console.log(basicCalculator(1, 'x',  0));


//Converting Minutes into Seconds
//Write a function that takes an integer minutes and converts it to seconds.

const convertMinutesToSeconds = (minutes) => minutes * 60;

console.log(convertMinutesToSeconds(5));
console.log(convertMinutesToSeconds(3));
console.log(convertMinutesToSeconds(2));


//======================================================================//
//Next Level
//======================================================================//

//Bitwise Operations

const bitWiseAnd = (n1, n2) => n1 & n2;

const bitWiseOr = (n1, n2) => n1 | n2;

const bitWiseXor = (n1, n2) => n1 ^= n2;

console.log(bitWiseAnd(7, 12));
console.log(bitWiseOr(7, 12));
console.log(bitWiseXor(7, 12));


const matchHouses = (step) => {
    if (step === 0){
    return step * 6;
    }
    return 6 + (step -1) * 5;
}

console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));


//Add up the Numbers from a Single Number
//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.


const addUp = (num) => (num * (num + 1)) / 2;

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));
console.log(addUp(91));


//Find the Smallest and Biggest Numbers
//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

const minMax = (arr) => {
    arr.sort((a, b) => a - b);
    return [arr[0], arr[arr.length - 1]];
}


console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));

//Is it Time for Milk and Cookies?
//Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

/*const timeForMilkAndCookies = (year, month, day) => {
    return date.getMonth() === 11 && date.getDate() === 24;
   }

console.log(timeForMilkAndCookies(2013, 11, 24));
console.log(timeForMilkAndCookies(2013, 0, 23));
console.log(timeForMilkAndCookies(3000, 11, 24)); */


//Which Function Returns the Larger Number?

const whichIsLarger = (f, g, n1, n2) => {
    if (f() > g() && f() > n1 && f() > n2) {
        return f();
    } else {
        return g();
    }
}

console.log(whichIsLarger(() => 5, () => 10));


//console.log(timeForMilkAndCookies(newDate(2013, 11, 24)));


const sortDrinkByPrice = (drinks) => {
  return drinks.sort((a,b) => a.price - b.price);
}


const drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
];

console.log(sortDrinkByPrice(drinks));

const detectWord = (str) => {
    let hiddenWord = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char >= 'a' && char <= 'z'){
            hiddenWord += char;
        }
    }
    return hiddenWord;
}

console.log(detectWord("UcUNFYGaFYFYGtNUH"));



//=====================================================================//



//How Much Is True?

//Create a function which returns the number of true values there are in an array.

const countTrue = (arr) => {
    return arr.filter(Boolean).length;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));


//A Redundant Function
//Write a function redundant that takes in a string str and returns a function that returns str.

function redundant(str) {
    return function() {
        return str;
    }
};

const f1 = redundant("apple")
console.log(f1());

const f2 = redundant("pear")
console.log(f2());

const f3 = redundant("")
console.log(f3());


//Rounding In Millions
//Given an array of cities and populations, return an array where all populations are rounded to the nearest million.

//Round to 0 if a population is below 500,000

const millionsRounding = (cities) => {
    return cities.map(([city, population]) => [city, Math.round(population / 1000000) * 1000000]);
};



console.log(millionsRounding([
    ["Nice", 942208],
    ["Abu Dhabi", 1482816],
    ["Naples", 2186853],
    ["Vatican City", 572]
  ]));


  //Tile Teamwork Tactics

  /* In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.
Examples

possibleBonus(3, 7) ➞ true

possibleBonus(1, 9) ➞ false

possibleBonus(5, 3) ➞ false

Notes

    You cannot move backward (which is why example #3 doesn't work).
    If you are already on the same tile, return false, as you would be advancing away.
    Expect only positive integer inputs. 
    
    To determine if it's possible to reach your friend's tile number in the next roll, you need to check if your friend's position is within 1 to 6 tiles ahead of your current position. If it is, then it's possible to reach your friend's tile number in the next roll and earn a bonus. Here's the function to achieve this in JavaScript:
    
    n this function:

    a represents your current position.
    b represents your friend's position.
    We check if b is greater than or equal to a + 1 and less than or equal to a + 6, which indicates whether it's possible to reach your friend's tile number in the next roll.*/

const possibleBonus = (a, b) => b >= a + 1 && b <= a + 6;

console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));

//Find Number of Digits in Number
//Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

const numOfDigits = (num) => {
    return num.toString().length;
}

console.log(numOfDigits(1000));
console.log(numOfDigits(12));
console.log(numOfDigits(1305981031));
console.log(numOfDigits(0));

//Burglary Series(04): Add its Name
//Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).

const addName = (obj, name, value) => {
    return obj = { ...obj, [name]: value};
};

//Your function looks good! It dynamically adds a new property to an object using the provided name and value. Let's test it with your provided examples:

console.log(addName({}, "Brutus", 300));
console.log(addName({piano: 500}, "Brutus", 400));
console.log(addName({piano: 500, stereo: 300}, "Caligula", 440));

//Derivative of a Function
/* Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.
Examples

derivative(1, 4) ➞ 1

derivative(3, -2) ➞ 12

derivative(4, -3) ➞ -108 */

const derivative = (b, m) => b * Math.pow(m, b -1);

console.log(derivative(1, 4));
console.log(derivative(3, -2));
console.log(derivative(4, -3));



function makePlusFunction(baseNum) {
    return function plusFive(newNum) {
        let sum = baseNum + newNum;
        return sum;
    }
};

const plusFive = makePlusFunction(5);

console.log(plusFive(2));
console.log(plusFive(-8));
console.log(plusFive(532));
console.log(plusFive(1200));


function addAdd(n1) {
    return function addTo(n2) {
        let sum = n1 + n2;
        return sum;
    }
}

console.log(addAdd(10)(20));
console.log(addAdd(0)(20));
console.log(addAdd(-30)(80));
console.log(addAdd(1000)(3520));
console.log(addAdd(-10200)(620400));



function toArray(obj) {
    return Object.keys(obj).map(key => [key, obj[key]]);
}

// Test
console.log(toArray({ a: 1, b: 2 }));

/* In this function toArray, we use Object.keys(obj) to get an array of keys from the object. Then, we use map to iterate over each key and create an array containing the key-value pair [key, obj[key]]. Finally, we return the resulting array of key-value pairs. */




function startsWithLosOrNew (string) {
    const lowerCaseString = string.toLowerCase();
    const stringStart = lowerCaseString.slice(0, 3);
    if (stringStart === "los" || stringStart === "new") {
        return true;
    } else {
        return false;
    }
}

//What's the weather?

function isRaining (rainy) {
    return rainy ? "wet day – you need an umbrella" : "dry day – leave your umbrella at home";
}

console.log(isRaining(true));
console.log(isRaining(false));

const powerOf = (num) => {
    return num ** num;
};

console.log(2);

//Task 5 – Range


function range(start, end) {
    const result = [];
    for (let i = 0; i <= end; i++) {
        result.push(i);
    }
    return result;
};

console.log(range(5, 10));



/* function preventChanges(obj) {
  Object.freeze(obj);
  Object.seal(obj);

  obj.noChanges = false;
  obj.signature = "whatever"
  return obj;

};

const obj = { noChanges: true };

console.log(preventChanges({noChanges: true})); */

const volumeOfBox = (sizes) => {
    return sizes.width * sizes.length * sizes.height;
}

console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));
console.log(volumeOfBox({ width: 4, length: 2, height: 2 }));
console.log(volumeOfBox({ width: 2, length: 3, height: 5 }));
console.log(volumeOfBox({ width: 7, length: 18, height: 1 }));


let names1 ={
    person: "Darth Vader",
    relation: `father`,
};

let names2 ={
    person: "Leia",
    relation: `sister`,
};

let names3 ={
    person: "Han",
    relation: `brother in law`,
}

let names4 ={
    person: "R2D2",
    relation: `droid`,
}
const nuRelationToLuke = (names) => {
    return `Luke, I am your ${names.relation}.`

};

console.log(nuRelationToLuke(names1));
console.log(nuRelationToLuke(names3));
console.log(nuRelationToLuke(names2));
console.log(nuRelationToLuke(names4));





let city1 = {
    name: "Paris",
    population: "2,140,526",
    continent: "Europe",
};

let city2 = {
    name: "Tokyo",
  population: "13,929,286",
  continent: "Asia",
}

const cityFacts = (city) => {
    return `${city.name} has a population of ${city.population} and is situated in ${city.continent}.`
};

console.log(cityFacts(city1));
console.log(cityFacts(city2));


//Tuck in Array

function tuckIn(arr1, arr2) {
	return [arr1[0], ...arr2, arr1[1]];
}

console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15,150], [45, 75, 35]));
console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));
console.log(tuckIn(["a", "h"], ["b", "c", "d", "e", "f", "g"]));


function whichIsLarger1(f, g){
    const resultF = f();
    const resultG = g();

    if (resultF > resultG) {
        return "f";
    } else if (resultF < resultG) {
        return "g";
    } else {
        return "neither";
    }
}

console.log(whichIsLarger1(() => 5, () => 10));
console.log(whichIsLarger1(() => 25,  () => 25));
console.log(whichIsLarger1(() => 505050, () => 5050));

//Find the nth Tetrahedral Number

const tetra = (n) => {
    return n * (n + 1) * (n + 2) / 6;
}

console.log(tetra(2));
console.log(tetra(5));
console.log(tetra(6));


const falseyErased = (arr) => {
    let newArr = arr.filter(element => !! element);
    return newArr;
}

console.log(falseyErased([0, 1, false, 2, "", 3]));

const num_of_digits = (num) => String(num).length;
console.log(num_of_digits(1000));
console.log(num_of_digits(12));
console.log(num_of_digits(1305981031));
console.log(num_of_digits(0));

/*you can achieve this without converting the number to a string. Here's a revised version using a mathematical approach:

javascript

const num_of_digits = (num) => {
    if (num === 0) return 1; // Special case for zero
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

console.log(num_of_digits(1000));        // Output: 4
console.log(num_of_digits(12));          // Output: 2
console.log(num_of_digits(1305981031));  // Output: 10
console.log(num_of_digits(0));           // Output: 1

This function calculates the number of digits by taking the logarithm base 10 of the absolute value of the number, then adding 1 to account for the position of the leftmost digit. The Math.floor() function ensures that any decimal part is truncated, providing the correct count of digits. */

