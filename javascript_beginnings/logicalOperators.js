// LOGICAL OPERATORS

// always evaluate to a Boolean

/* 
    && – "and" (true only when all conditions are true)
    || – "or" (true when at least 1 condition is true)
    ! – "not" (turns a truthy val into a falsey and vice versa)

*/

let firstVar = 10;
let secondVar = 15;

let thirdVar = 20;
let fourthVar = 20;

// basic

console.log(firstVar < secondVar); //true

console.clear();
// when we need to test multiple conditions we use the logical operators && and ||

console.log(firstVar < secondVar && firstVar === thirdVar); // 10 < 15 && 10 === 20 false => Output is FALSE because true only applies when all conditions are met

console.log(firstVar < secondVar && thirdVar === fourthVar); // 10 < 15 &&20 === 20 TRUE

// || "or"

console.log(firstVar < secondVar || firstVar === thirdVar); // TRUE
console.log(10 < 5 || 100 < 1); // FALSE

// LOGICAL NOT "!" (turns a truthy value into a falsey one and vice versa)
console.log(!(10 === 10)); // false !

console.clear();

// STUDENT TASK: check if a number is between 5 and 10

let valCheck = 7;

console.log(5 < valCheck && valCheck < 10); // TRUE
console.log(5 < valCheck && valCheck > 10);
console.log(5 < valCheck || valCheck > 10); // TRUE becaue first condition is true
console.log(5 > valCheck || valCheck > 10); // FALSE
console.log(!(5 < valCheck && valCheck < 10)); // FALSE
console.log(!(5 > valCheck && valCheck > 10)); // TRUE

console.clear();

/* IF - ELSE IF - ELSE IF - ELSE
    Create a program that greets the user based on time of the day
    Untill noon the program should print "Good morning!".
    between noon and 5pm "Good afternoon!".
    between 6pm and 9pm "Good evening!".
    If time doesn't fall into any of the above ranges, greeting is set to "Good night!". */

    const time = 13;
    let greeting;

    if(time <= 12){
        greeting = "Good Morning!"
    } else if( (time > 12) && (time <= 17)){
        greeting = "Good Afternoon!"
    } else if( ( time >= 18) && (time <= 21)){
        greeting = "Good Evening!"
    } else {
        greeting = "Good Night!"
    }

    console.log(greeting);