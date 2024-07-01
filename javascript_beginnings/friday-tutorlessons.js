let user = true; // when entering website: is user logged in or not


user = true ? console.log("Welcome to our website!") : console.log("Please login first!");

if (user) {
    console.log(`Welcome!`);
    console.log(1 + 2);        // console.log doesn't affecr your code!!
} else if (user === "Mike") {
    console.log(`Welcome Mike!`);
} else {
    console.log(`Please login first!`);
    console.log(`Mamma Mia!`);
}

/*user
    ? (<button>Get products!</button>)
    : (
    <div>
        <h2>Please login first!</h2>
    <button onClick={}>Login</button>
    </div>);*/

//ARRAYS

const users = ["Mike", "Trail", "Donovan"]; //an array of strings
const user1 = {name: "Mike",
                age: 39,
                city: "Berlin",
                hobbies: ["music", "movies", "art"],
                address: {
                    city: "Berlin",
                    street: "Candystreet",
                    houseNumber: 4568,
                },};
const user2 = "Trail"; 
const user3 = "Donovan";
const couples = user1 + user2 + user3;
users.pop();
users.push("Klingon");

console.log(user1.hobbies);

// ARRAY OF OBJECTS

[{},{},{}];

//=====================================================================//

//log is a function / method

const profitMargin = (costPrice, salesPrice) => {
    const margin = ((salesPrice - costPrice) / salesPrice) * 100;

    const percentageMargin = margin.toFixed(1) + "%";

    return percentageMargin;
}

console.log(profitMargin(50, 50));
console.log(profitMargin(23, 39));
console.log(profitMargin(33, 84));


function myFunc(a, b) {
    return a + b;
}

console.log(myFunc(2, 3));

function myFunc1(a, b) {
    if (a > b) {
        return a - b;
    }
    return "Wrong parameters!";
}

console.log(myFunc1(4, 9));

function screenSize(a, b) {
    if (a === b) {
        return "Desktop screen size!";
    } else if (a > b) {
        return "Laptop or tablet screen size.";
    } else if (a < b) {
        return "Mobile screen";
    }
    return "Wrong parameters!";
}

console.log(screenSize(768, 264));


const usera = ["Bob", "Tom", "Madonna", "Lola"];

//Add "Jr." to elements of usera array


/* for (let i = 0; i < arrayToString.length; i++) {
    //console.log(usera[i]);
    //add "Jr." in front of each element
    usera[i] = "Jr." + usera[i];
    console.log(usera);
} */


let a = 5;

function nameF() {
    let math = a + 1;
    console.log("Inner func", math);
    //let b = 6; not returning because no return
    return math;
}

console.log(nameF);


const durationHours = (minutes) => minutes.map(duration => Math.floor(duration / 60));

console.log(durationHours([120, 60, 80, 90, 100]));

//Write a JS code to print ven numbers in given array

const arr = [13, 12, 45, 22, 48, 50, 100, 99];
const anotherArr = [1, 2, 3, 4, 5, 6];
const myName = "123456";

function printEven (array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array === "number" && array[i] % 2 === 0) {
            console.log(array[i]);
        } else {
            console.log("Wrong input type");
        }
    }
}

printEven(arr);
printEven(anotherArr);
printEven(myName);

//Write a JS code to delete all occurrence of element in given array using splice() method

let arr1 = [23, 56, 4, 8, 78, 56, 63, 99, 210, 56];

function deleteElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element){
            arr.splice(i, 1);
        }
    }
    return arr;

}

console.log(deleteElement(arr1, 56));




//=====================================================================//



//JavaScript Objects



/* const users1 = [mike, sad]

const mike = {
    firstName: "Mike",
    lastName: "Albrecht",
    age: 12,
    city: "Berlin",
    hobbies: ["slipknot", "korn", "deftones", "system of a down", "hed p.e.", "soulfly", "lamb of god"]
};

const sad = {
    firstName: "sad",
    lastName: "clown",
    age: 69,
    city: "Armagetto",
    hobbies: ["slipknot", "korn", "deftones", "system of a down", "hed p.e.", "soulfly", "lamb of god"]
};

console.log(mike.city); */


function myF(a, b = 0) {
    return a + b;
}

console.log(myF(2));



//REST

const myArray = [1, 2, 3, 4, 5, 6,];

const nextArr = [...myArray];

console.log(nextArr);



//MAPPING

const userB = {
    userName: "John", //string
    age: 25, //number
    city: "Berlin", //string
    hobbies: ["reading", "TV"], //object ==> ["ada","ada"]
};

function getUserInfo(obj){
    for (const key in obj) {
        //console.log(key);
        if(typeof obj[key] !== "object") {
            console.log(`${key}: ${obj[key]}`);
        } else {
            console.log(`hobbies`);
            for (let i = 0; i < obj[key].length; i++) {
                console.log(` – ${obj.hobbies[i]}`);
            }
        }
    }

}; 

getUserInfo(userB);



// Example usage
/* const originalObj = {
    name: 'Alice',
    age: 30,
    hobbies: ['reading', 'coding'],
    active: true, // Non-numeric, non-string property
    info: { additionalData: 'ignored' } // Nested object (ignored)
  }; */

  function transformObject(obj) {
    const transformed = {};
    for (const key in obj){
        const value = obj[key];
        if (typeof value === "number"){
            transformed[key] = value * 2;
         } else if (typeof value === "string") {
            transformed[key] = value.toUpperCase();
         } else if (Array.isArray(value)){ //const value = ["reading", "coding", 30]
            transformed[key] = value.map((item) => { //{"READING", "CODING", 60}
                if (typeof item === "number") {
                        return item * 2;
                } else if (typeof item === "string") {
                        return item.toUpperCase();
                }
                    return item;
            });
         } else {
            transformed[key] = value;
         }
        }
         return transformed;
  };

  const originalObj = {
    name: 'Alice',
    age: 30,
    hobbies: ['reading', 'coding'],
    active: true, // Non-numeric, non-string property
    info: { additionalData: 'ignored' } // Nested object (ignored)
  };


  console.log(transformObject(originalObj));

  /* const transformedObj = transformObject(originalObj);
  console.log(transformedObj); // Output: { name: 'ALICE', age: 60}
  // BONUS
  console.log(transformedObj); // Output: { name: 'ALICE', age: 60, hobbies: ['READING', 'CODING'] } */


  //RECAP CALLBACK / MAP / FILTER

  function params() {
    console.log("Hey, I am a callback function!");
    callback();
  }

  function myFuncC(callback) {
    console.log("Hello World!");
    //callback();
  }

  /*myFuncD(() => {
    console.log("Banana!");
  } ); */

  myFuncC(params); //Output: "Hello World!"



  //function to calculate area of the circle

  const radius = [1, 2, 3];

  const calculateArea = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
  }

  const area = function(radius){
    return Math.PI * radius * radius;
  }

  const calculateDiameter = function(radius){
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output;
  }
//=================================================================//
//BETTER
//=================================================================//

  const diameter = function(radius){
    return 2 * radius;
  }

  const calculate = function(radius, logic){
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
  }
  
  console.log(calculate(radius, diameter));

  console.log(calculateDiameter(radius));


  const arra = [1, 2, 3, 4];

  const output = arra.map((elem) => (elem += 10));

  console.log(arra);
  console.log(output);

  const userrange =[
    {firstName: "John", lastName: "Doe", age: 25},
    {firstName: "Jane", lastName: "Doe", age: 30},
    {firstName: "Jack", lastName: "Doe", age: 35},
    {firstName: "Jill", lastName: "Doe", age: 40},
    {firstName: "Joe", lastName: "Doe", age: 45},
  ];

  const result = userrange.map((elem) => {
    return `${elem.firstName} ${elem.lastName}`;
  });

  console.log(result);

  const userAge = userrange.filter((elem) => elem.age > 30);

  console.log(userAge);


  const arram = [1, 2, 3, 4, 5, 6, 7];

  const output1 = arram.filter((elem) => {
    return elem % 2;
  });

  console.log(output1);

  //--------------------------------------------------------------------//

  //RECAP REDUCE AND SORT

  const items1 = [
    {name: "Apple", price: 100},
    {name: "Orange", price: 15},
    {name: "Mango", price: 10},
    {name: "Banana", price: 5},
  ];

  let totalPrice = 0;

  items1.forEach((item) => {
    totalPrice += item.price;
  });

  console.log("total price: ", totalPrice); //130

  //reduce

  const totalFruitPrice = items1.reduce((total, item) => {
    console.log(`Total: ${total}`);
    console.log(`Item: ${item.price}`);
    
    return total + item.price;
  }, 0);


  const peopleFolderObject = [
    {name: "Kyle", age: 26},
    {name: "Jane", age: 34},
    {name: "Alice", age: 42},
    {name: "Bob", age: 42},
  ];

  let person = {
    name: "Mike",
    age: 39,
  };

  let {name, age} = person;

  if(age > 44);

  console.log(name, age)
;

const resultPeople = peopleFolderObject.reduce((groupedPeople, person) => {
    const age = person.age; 

    if (groupedPeople[age] == null) groupedPeople[age] = [];
    groupedPeople[age].push[person];
    return groupedPeople;
}, {});

console.log(resultPeople);

const someNumbers = [5, 15, 35];

const sum1 = someNumbers.reduce((total, number, index, array) => {
    return total + number;
}, 0);

console.log(sum1);

const numbersAB = [5, 2, 7, 21, 100, 44, 24];

numbersAB.sort();


function compareFunction(a, b) {
    return a -b;
};

console.log(numbersAB);

const compuProd =  [
    {name: "laptop", price: 1000},
    {name: "deskop", price: 1500},
    {name: "phone", price: 500},
];

compuProd.sort((a, b) => {
    return b.price - a.price;
});

console.log(compuProd);

//CLASSES

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    calculateTotal(salesTax){
        
    }
}

const product1 = new Product("Lasagne", 3.95);
const product2 = new Product("Maccaroni", 16.95);
product1.displayProduct();
product2.displayProduct();

