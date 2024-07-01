"use strict";

/* 
Defines that JavaScript code should be executed in "strict mode".
It helps you to write cleaner code, like preventing you from using undecleared
variables*/

// someVariable = 3; // "use strict" will throw an error

// console.log(someVariable);

// Conditional Statements

/* They allow us to perform different actions based on different decisions*/

/* 
    If
    – executes something only if a condition is true.
    Example: A special discount for new members only
*/

/* let newMember = 1;

if( newMember > 3) { // if this part evaluates to TRUE we jump inside the code block, otherwise we skip it – Output: empty line

    // This is a code block
    console.log(`As a new member you are entitled to a 30% discount`);
} +/

/* newMember is a Boolean */

/* let newMember = true;

if( newMember ) { 

    // This is a code block
    console.log(`As a new member you are entitled to a 30% discount`);
} */

/*
"=" – only used to assign variables
"==" – checks variables without type; checks only if value is same
"===" – checks also the type; checks if value AND type are same

console.log("93" == 93); // true
console.log("93" === 93); // false
*/

/* 
    IF – ELSE
    – executes something if a consiiton is met ... and executes something else if the condition is NOT met
    
    EXAMPLE: When a user enters a password and clicks the "login" button the frontend needs to check if the credentials are correct.
    If not we display an error message.*/

    // let credentialsOK = true;

    /* if ( credentialsOK ){
        console.log(`you will be redirected to the members area`);
    } else {
        console.log(`something went wrong. please check your credentials`);
    } // let credentialsOK = true – if will be printed
      // let credentialsOK = false – else will be printed  */


    const votingAge = 18; // pretend this value is coming from the backend
    let userAge = 12;

    if (votingAge == userAge) {
        console.log(`If you are at least 18, you are free to vote`);
    } else {
        console.log(`If you are under 18 you have to live with the powers that be`);
    }
    
    /*
        IF – ELSE IF – ELSE
        checking multiple conditions
        Example: A product discount based on quantity */

    let quantity = 5;

    if( quantity >= 5){
        console.log(`You get 20% off!`);
    } else if( quantity > 3){
        console.log(`You get 10% off!`);
    } else {
        console.log(`Buy 3 items to get 10% off or 5 to get 20% off!`);
    }

    /* 
    Write a check that determines the grade a student received based on their exam score.
    Use an if else if else statement to check the score and assign a letter grade based on the following criteria:
    90 or above: "A" (Excellent)
    80 or above (but less than 90): "B" (Very Good)
    70 or above (but less than 80): "C" (Good)
    60 or above (but less than 70): "D" (Satisfactory)
    Below 60: "F" (Failing)
    Finally, print (or display) the message "Your grade is [letter grade]" using the assigned letter grade.
    */

/* // Return a float number from 0.0 to 100.00

let grade = Math.random() * 100; */

    let examScore = 38;

    let letterGrade; // by default this variable is going to be undefined

    /* if(examScore >= 90){
        console.log(`Your grade is "A" (Excellent)`);
    } else if(examScore >= 80){
        console.log(`Your grade is "B" (Very Good)`);
    } else if(examScore >= 70){
        console.log(`Your grade is "C" (Good)`);
    } else if(examScore >= 60){
        console.log(`Your grade is "D" (Satisfactory)`);
    } else(examScore <= 60);{
        console.log(`Your grade is "F" (Failing)`);
    } */

    if(examScore >= 90){
        letterGrade = "A (Excellent)"
    } else if(examScore >=80){
        letterGrade = "B (Very Good)"
    } else if (examScore >= 70){
        letterGrade = "C (Good)"
    } else if(examScore >= 60){
        letterGrade = "D (Satisfactory)"
    } else {
        letterGrade = "F Failing"
    }

    console.log(`Your grade is ${letterGrade}`);
    console.log(`Your grade is`, letterGrade);

    // The else if can be repeated multiple times, just like it is needed
