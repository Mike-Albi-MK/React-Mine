/* 

    TERNARY OPERATOR

    The ternary operator is represented by a "?".
    We can use the ternary operator to evaluate single conditions (if else)

    Syntax: condition ? value1 : value2

    The condition is evaluated: If TRUE value1 is executed, returned;
    otherwise is value2

*/

// EXAMPLE 1:
let age = 8;
let accessAllowed = (age >= 18) ? "yes" : "no";

console.log(accessAllowed);



//EXAMPLE 2:
let firstVar = 50;
let secondVar = 20;

(firstVar > secondVar ) ? console.log(secondVar) : console.log("blah");

console.clear();

//TASK: 
/* 
Check if the name of the company is Netscape.
If true, print 'Netscape created JavaScript'
If false, print 'No contributions known'.
Store the output in a variable called 'contribution'
let company = 'Netscape';
let language = 'JavaScript'
*/

/*let company= 'Netscape';
let language = 'JavaScript';

let contribution = 'Netscape created JavaScript';
let contribution1 = 'No contributions known';

(company != language) ? console.log(contribution) : console.log(contribution1); */


let company = 'Netscape';
let language = 'JavaScript';


let contribution = ( company === "Netscape") ? `${company} created ${language}` : `No contributions known`;
console.log( contribution );