const user = {
    name: "John",
    lastName: "Doe",
    age: 20,
    address: {
        street: "Main street 1",
        city: "Berlin"
    },
    hobbies: ['Run', 'Swim', 'Watch TV'],
};

const objSize = (obj) => Object.keys(obj).length;

console.log(objSize(user)); //Output: 5
 
console.log(user.address.street);

console.log(Object.keys(user));

//ITERATION

for (const key of Object.keys(user)) {
    console.log(user[key]);
}


//looping through an array of the key property of an array
for (const key of Object.keys(user)) {
    console.log(user[key]);
};

//looping through an array of the value property of an object
for (const value of Object.values(user)) {
    console.log(user[value]);
};

for (const key in user) {
    console.log(key);
};

/*for (const entry of Object.entries(user)) {
    //console.log(entry);
    let key = entry[0];
    let value = entry[1];
}; 

console.log(key, value); */

const salaries = {
    john: 1200,
    mary: 2500,
    jane: 3000,
};

const sumOfSalary = (obj) => {
    let sum = 0;
    for (const salary of Object.values(obj)) {
        sum += salary;
    }
    return sum;
};

console.log(sumOfSalary(salaries));


/* Task:
Create a function named transformObject that takes an object as input and returns a new object with the following transformations:
Double all numeric values: If a property value is a number, multiply it by 2.
Convert all string values to uppercase: If a property value is a string, convert it to uppercase using toUpperCase().
Remove all non-numeric and non-string properties: If a property value is neither a number nor a string, delete that property from the new object.
 Bonus:
 4. Transform Array values: If the value is an Array, transform the values of the array to be Uppercase (string), or double (number)
// Example usage
const originalObj = {
  name: 'Alice',
  age: 30,
  hobbies: ['reading', 'coding'],
  active: true, // Non-numeric, non-string property
  info: { additionalData: 'ignored' } // Nested object (ignored)
};

const transformedObj = transformObject(originalObj);
console.log(transformedObj); // Output: { name: 'ALICE', age: 60}
// BONUS
console.log(transformedObj); // Output: { name: 'ALICE', age: 60, hobbies: ['READING', 'CODING'] } */




const originalObj = {
    name: 'Alice',
    age: 30,
    hobbies: ['reading', 'coding'],
    active: true, // Non-numeric, non-string property
    info: { additionalData: 'ignored' } // Nested object (ignored)
  };
