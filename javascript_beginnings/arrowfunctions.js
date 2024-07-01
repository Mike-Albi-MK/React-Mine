//ARROW FUNCTIONS

/* 
    Arrow functions use =>
    They come in two flavors:
    
    Multiline
    1 line*/

//function expression:

const sum = function(num1, num2){
    return num1 + num2;
}

const retVal = sum(3,5);
console.log(retVal);

// Let's turn the above into an arrow function:

const sumArrow = (num1, num2) => {
    return num1 + num2;
}


const retValArrow = sumArrow(3,5);
console.log(retValArrow);

// Let's make it 1 line

const sumArrow2 = (num1, num2) => num1 + num2; // the code on the right side of the => gets automatically returned
const retValArrow2 = sumArrow2(4,4);
console.log(retValArrow2);

/* NOTICE:

    THe function keyword is gone
    We have no {} (in the 1 line version)
    The code after the "=>" gets evaluated and returned automatically*/

    // Special case – No parameters | paranthesis should be empty but they should be there

    const sayHi = () => console.log("Hello!");
    sayHi();  //Output: Hello!

    //Task: 
    /* Write a function "convert" Celsius to Fahrenheit using an arrow function */

    const convertCelsius = (number) => (number * 9) /5 + 32;
    const retFahrenheit = convertCelsius(14);
    console.log(retFahrenheit);

//===========one==line==================================================//
    
    const convert = (number) => console.log((number * 1.8) + 32);
    convert(24);

    const convert1 = (cel) => console.log((cel * 1.8) + 32);

//======================================================================//