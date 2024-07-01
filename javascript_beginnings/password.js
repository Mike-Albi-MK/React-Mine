import readlineSync from 'readline-sync';

// Normally a password is saved on a database

const password = `letmein`;

// before: let input = readlineSync.question('Please enter the password\n ');
// improvised:

let input = null;

let count = 1;


while (input !== password) {
    input = readlineSync.question('Please enter the password\n');
    count++;
    if (count > 3) {
        console.log(' Too many tries');
        break;
    }
}