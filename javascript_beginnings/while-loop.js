// WHILEELOOPS

/* Use when you don't know in advance the number of iterations needed */
/* Use when the conidtion is not numerical */

// comparing for loop with wire loop


for (let i = 0; i < 10; i++){
    console.log(i);
}

// Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

/* While (condition)
        // code to be executed repeatedly */

let index = 0;

while (index < 10) {
    console.log(index);
    index++; // this line is important, loop runs forever without it `crash`
}

let ind = 0;

while (ind < 50) {
    console.log(ind);
    ind++;
}

/* Reading from file until the end
Asking for user input until a valid response
Generating a random number (password*/

