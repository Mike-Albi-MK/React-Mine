/*const arguments = process.argv;

const animala = arguments.slice(2);
console.table(animala);

if(!animala.length) {
    console.log(`program requires arguments`);
    process.exit();
}

let user = process.argv[2] || `Mike`;

console.log(`Welcome ${user}`);

console.log(`The program works correctly`);*/

const args = process.argv;

const house = [args.slice(2)];

house.push(`windows`);
house.push(`doors`);
house.push(`keys`);
house.push(`locks`);

console.table(house);

