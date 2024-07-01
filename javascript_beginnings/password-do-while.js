import readlineSync from 'readline-sync';

/* Another version of while loop is the do ... while 

In the do ... while loop:
    – first the code block is executed
    – the condition is checked

    This guarantees that code is run at least once
    */

const password = "fwZrg2pk!M"

let input = null;

do {
    input = readlineSync.question('Please enter a password\n');
    console.clear();
} while (input !== password);

