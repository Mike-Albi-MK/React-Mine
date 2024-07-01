//NESTING ARRAYS AND OJECTS

/* 
Objects can allow more than just single values like values, keys or arrays, it can be more complex.

    WHAT IS NESTING?
    Having an array containing another array or an object inside another object etc ...

    WHY DO WE NEED NESTING?
    It allows us to create more complex and better organized data structures.
*/

//NESTING ARRAYS

let myArray = [
    [4,5,6],
    ["a","b","c","d"]
]

//ACCESSING ELEMENTS
/*We use bracket notation to specify the index of the array we want to access */

console.log(myArray[0]); // [4,5,6]
console.log(myArray[0][1]); // 5
console.log(myArray[1]); //
console.log(myArray[1][2]); // c

//ACCESSING ALL ELEMENTS – How to print all of the values

for(let i =0; i < myArray.length; i++){
    console.log(myArray[i]);  // ["a", "b", "c"] first iteration, now we add a second iteration to loop through the two arrays

    //The first iteration stops and we jump back to the inner loop where we cycle until it is completed. It is incremented one more time.

        const currentNested = myArray[i]; // it will be [4,5,6]
        for(let j = 0; j < currentNested.length; j++){
            console.log(currentNested[j]); // 4 5 6 a b c
        }
}

/*Once we get into the inner loop, the outer loop will pause and waits till the inner loop is fully executed. Both loops aren't executed at the same time.
Once the inner loop stops, we get back to the outer loop and this one now loops. */

//STUDENT TASK
/*  let grocery = [
    ["apples", "oranges", "bananas"],
    ["eggs"],
    ["salad", "broccoli"],
];
10:04 Uhr
Print out all values of the above nested array.
Use a nested loop.
apples
oranges
bananas
--------------
eggs
--------------
salad
broccoli */

let grocery = [
    ["apples", "oranges", "bananas"],
    ["eggs"],
    ["salad", "broccoli"],
];


for (let i = 0; i < grocery.length; i++){

        let currentArray = grocery[i];

        for (let j = 0; j < currentArray.length; j++) {
            console.log(currentArray[j]);
        }
        console.log("--------------");
};


//NESTED OBJECTS

let person = {
    name: "John",
    age: 30,
    adress: {
        street: "Kastanienallee 123",
        city: "Berlin",
        country: "Germany"
    }
};

//ACCESSING THE VALUES
//we can use dot or bracket notation

let personName = person.name;
console.log(personName); // John
let streetName = person.adress.street; //Kastanienallee 123
let country = person["adress"]["country"]; // Germany
console.log(streetName, country);

let user = {
    name: "Lisa Smith",
    email: "lisa@gmail.com",
    address: {
        street: "123 kastanienallee",
        city: "Berlin",
        country: "Germany",
    },
};

console.log(`${user.name} lives in ${user.address.city} at the following address: ${user.address.street}`);

for (let key in user.address) {
    console.log(user.address[key]);
};



/* TASK 3
Loop through the object
check if element is an array
if it is an array print out all values like so:
Values in fruits:
apple
banana
orange
-----
Values in colors:
red
green
blue
-----
let myObject = {
    fruits: ["apple", "banana", "orange"],
    colors: ["red","green","blue"],
}; */

let myObject = {
    fruits: ["apple", "banana", "orange"],
    colors: ["red","green","blue"],
}; 

for (let key in myObject) {
    //check if property we access is an array
    if(Array.isArray(myObject[key])) {
        //Print the property value
        console.log(`Values in ${key};`)

        //Now it's time to iterate over the currenty array
        for (let i = 0; i < myObject[key].length; i++){
            console.log(myObject[key][i]);
        }
        console.log("--------------"); 
    }
};


//OBJECTS IN ARRAYS

let books = [
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925},
    {title: "To Kill A Mockingbird", author: "Harper Lee", year: 1960},
    {title: "1984", author: "George Orwell", year: 1949},
];

//To access properties of each object we can use the array index
console.log(books[0].title);
console.log(books[1].author);

/* Loop through the array of objects and print out all values */

for(let i = 0; i < books.length; i++){
    let book = books[i];

    for (let key in book){
    console.log(book[key]);
}
};