// Mapping of a value of an array

const ages = [12, 40, 10, 20, 99, 50];
let sumAges = 0;

for (const age of ages){
    sumAges += age;
}

const doubles = [];

for (const age of ages) {
    // double the value
    let double = age * 2;
    doubles.push(double);
}

console.log(doubles);