import readlineSync from 'readlineSync';

const array = [];
let input = null;

do {
    input = readlineSync.question('Type something to add to the array. STOP to the end\n');
    if (input !== 'STOP') {
        array.push(input);
    }
    console.clear();
    console.log(array);
} while (input !== 'STOP');

console.log(array);