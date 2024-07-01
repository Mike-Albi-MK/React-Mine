const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Mapping Function

const myMap = (arr, callback) => {
const res = [];
for(let item of arr){
    item = callback(item);
    res.push[item];
}
return res;
};



/* const doubleArray = myMap(numbers, function(num) {
    return num * 2;
}); 

console.log(doubleArray); */

const double = (num) => num * 2;

const doubleArray = myMap(numbers, double);
const expArray = myMap(numbers, (num) => num ** 2);

console.log(doubleArray);
console.log(expArray);


//Filtering items from array
const myFilter = (arr, callback) => {
    const result = [];
    for(const item of arr){
        if (callback(item)){
            result.push(item);
        }
    }
        return result;
};

const isOdd = (num) => {
    return num % 2 !== 0;
};

const oddArray = myFilter(numbers, isOdd);

console.log(oddArray);


const evenArray = myFilter(numbers, (num) => num % 2 === 0);

console.log(evenArray);

/* It looks like there are a few issues in the myMap function implementation. You need to apply the callback function to each element of the items array, and then push the result into the result array. Here's the corrected implementation:

javascript

function myMap(items, callback) {
  let result = [];
  for (let i = 0; i < items.length; i++) {
    let transformedItem = callback(items[i]);
    result.push(transformedItem);
  }
  return result;
}

function double(number) {
  return number * 2;
}

function square(number) {
  return number * number;
}

function greet(string) {
  return "Hey " + string;
}

function capitalizeFirstAndLast(string) {
  return (
    string[0].toUpperCase() +
    string.slice(1, string.length - 1) +
    string[string.length - 1].toUpperCase()
  );
}

console.log(myMap([1, 2, 3], double)); // expected output: [2, 4, 6]
console.log(myMap([2, 4, 10], square)); // expected output: [4, 16, 100]
console.log(myMap(["pizza", "broccoli", "ice cream"], capitalizeFirstAndLast)); // expected output: ["PizzA", "BroccolI", "Ice creaM"]
console.log(myMap(["Rufus", "Lisa", "July"], greet)); // expected output: ["Hey Rufus", "Hey Lisa", "Hey July"]

Now, each element of the items array is correctly passed to the callback function, and the result is pushed into the result array. The console.log statements should produce the expected output. */


/* n your myFilter function, you're pushing the result of applying the callback function to the array element onto the result array within the loop. However, this logic is incorrect. Instead, you should push the array element itself if the callback function returns true. Here's the corrected implementation:

javascript

function myFilter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]); // Push the array element itself
    }
  }
  return result;
}

function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return number % 2 === 1;
}

console.log(myFilter([1, 2, 3, 4, 5], isEven)); // expected output: [2, 4]
console.log(myFilter([1, 2, 3, 4, 5], isOdd)); // expected output: [1, 3, 5]
console.log(myFilter(["pizza", "pasta", "ice cream", "potato", "broccoli"], (item) => item.startsWith("p"))); // expected output: ["pizza", "pasta", "potato"]
console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (number) => number > 5)); // expected output: [6, 7, 8, 9, 10]

Now, the myFilter function correctly filters the array based on the condition provided by the callback function, and the console.log statements produce the expected output.
 */