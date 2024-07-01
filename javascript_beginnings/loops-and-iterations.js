// Flow of a program

/* How is a program interpreted?
    – from left to right
    – from top to bottom */

// The top loop statements

/* Loops are used to repeat certain actions several times (till the condition is met)

SYNTAX:

    for( statement 1; statement 2; statement 3 ) {
        // code to be executed
    }
    
    statement 1 – is executed only once
    statement 2 – defines the condition (when true code block will be executed)
    statement 3 – is executed every time AFTER the code block has been executed*/

    // A loop that prints numbers from 0 to 3

for ( let i = 0; i <= 3; i++) {
    console.log(i); // logging the value of the counter
}

// loops will only run if the conditions are met i = increment

/* ROUND 1: i = 0     check condition (TRUE)
            execute the body with console.log(0) 
            we increment 0 + 1
            New value of i = 1*/

/* ROUND 2: i =1       check condition (TRUE)
            we console.log(1) 
            we increment 1 + 1
            new value of i = 2*/

/* ROUND 3: I = 2       check condition (TRUE) 
            we console.log(2)
            we increment 2 + 1
            new value of i = 3*/

/* ROUND 4: i = 3       check condition (FALSE) 
            failed!*/

for ( let i = 6; i <= 38; i++) {
    console.log(i);
}

for (let i = 1; i <= 3; i++){  // i <= 3 Output: 1 2 3 4 || i < 3 Output: 1 2 3
    console.log(i);
}

for (let counter = 8; counter <= 14; counter++){
    console.log(counter);
}

/* let counter;
   for( counter = 1; counter < 5; counter++){
    console.log(counter); 
   }        BEWARE of global scope, cuz it can be accidentally modified*/



// ACCUMULATOR
// In order to do this we need to store the value somewhere
// For that purpose we declare a vavriable outside the loop

/* Imagine we want to sum value from 1 to 5 1+2+3+4+5 */

let sum = 0;

for (let i = 1; i <= 5; i++){
    sum = sum + i;
    /* let sum = 0 || the value will always be  */
    console.log(`Sum = ${sum}`);
}

// Stings are iterable

let myString = "digital";

for (let i = 0; i <= 6; i++) {
    console.log(myString[i]);
}

/* or (let i = 0; i < myString.length -1; i++){
    console.log(myString[i]);
 } 
  
 always use i; in this case: set i to 0, because strings start at 0*/


 //Other way to increment the loop

 for(let i = 42; i <= 90; i+=4){
    console.log(i);
    // the increment happens here AFTER the code block gets executed!!!
 }


