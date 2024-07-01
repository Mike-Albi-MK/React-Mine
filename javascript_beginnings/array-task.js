const arguments = process.argv;
const animals = arguments.slice(2);

animals.push('fish');

console.table(animals);

animals.push('fish');
animals.push('leopard');

console.table(animals);

if(!animals.includes(`snakes`)){
    animals.push(`snakes`);
}

console.table(animals);

