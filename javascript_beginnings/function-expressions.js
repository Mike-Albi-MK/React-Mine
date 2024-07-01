// FUNCTION EXPRESSIONS

/*
    There is another syntax for creating a function that is called function expression.
    The function is created and assigned to a variable */

    const sayHi = function(){ // it is a just an anonymous function assigned
        console.log("Hello");
    }

    sayHi();
    console.log( typeof sayHi ); // Output: function

    // I can also pass the function sayHi further along ...

    let useSayHi = sayHi;
    console.log(useSayHi); // Output: [FUnction: sayHi]

//TASK: let's write a function "square" that calculates and returns the square of a number (4 * 4)

const square = function(number) {
    return number * number;
}

const retNumber = square(9);
console.log(retNumber);



const multiply = function(number) {
    return number * 2;
}

const multiNumber = multiply(4);
console.log(multiNumber);
