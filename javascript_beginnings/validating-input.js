import readlineSync from 'readlineSync';

let input = readlineSync.question('What is your name? \n');
let inputConfirm = null;

const options = [`yes`, `no`]



do {inputConfirm = readlineSync.question(
    `Your name is ${input} Is this correct? {yes/no}\n`);
} while (inputConfirm !== `yes` && inputConfirm !== `no`)

