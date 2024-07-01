import readlineSync from 'readline-sync';

let number = Math.floor(Math.random() * 100) +1; 

let guess = null;
let counter = 20;



do {
    counter++;
    guess = readlineSync.question(`Guess a number between 1 and 100\n`);
    guess = Number(guess);


    if (number === guess) {
    console.log(`Congratulations, you've guessed the right number!\n`);
    // break;
    } else if (guess > number) {
    console.log(`Try with a lower number\n`);
    } else {
    console.log(`Try with a bigger number\n`);
    }

    console.log(`You have ${counter} tries left`)

} while (number !== guess);