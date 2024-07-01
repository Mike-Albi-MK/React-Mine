/* 
Scope in JavaScript is crucial for writing clean, efficient and bugfree code.
If you use scope your variables will only be accessible where needed.
You will avoid namespace collisions.
It will dave memory because the block variables will stop exisiting after the block finishes running.*/

/* 
    What is scope?
    It is the place where our variables "exist" where they can be accessed
*/

 /*
    What is a block?
    It is whatever is inside { }
 */

/* 
    SCOPE

    GLOBAL SCOPE = can be accessed by any line of code, including from inside blocks
    LOCAL SCOPE = can be accessed only from withing that specific block {}
*/

const globalScope = `Hello global scope`; // global variable

/* 
    LET and CONST are locally scoped
    VAR is globally soped
*/

let age = 18;
let someValue;

if(age >= 18) {
    let = messageLet = "admitted to the club (block scoped)"
    console.log( messageLet);
    var messageVar = "I am always global (globally scoped)" // it works
    someValue = 5;
}

// From inside the block I can access its surroundings

console.log(age); // does not work because it is only accessible within its own block

//console.log( messageLet ); does not work because it is only accessible within its block

console.log( messageVar );
console.log( someValue );

//=======================================================================//

// SCOPE RECAP

/* Scope – The place where a variable exists ... where we can access them.
   Code block – Whatever is specified within { } 
   
   GLOBAL SCOPE (outside { } and (within{})
   LET + CONST – locally scoped
   VAR – always global (legacy code only!!!)*/

   let someVar = "Mike"; // Global

    // We can always access what is outside the block – its surroundings

   if(true){
    //console.log(someVar);
    let someNumber = 4;
   let someVar = "Maya";
    console.log(someVar); // targets variable line 67 ("Maya")
   }

   console.log(someVar); // targets variable line 60 ("Mike")

   //console.log(someNumber); // Error: someNumber is not defined! (when using LET and CONST)

   // But what will work is: var someNumber = 4; | console.log(someNumber);