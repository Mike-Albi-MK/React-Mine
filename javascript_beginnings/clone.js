//CLONING AND DESTRUCTURING

/*
Primitive Values (string, bool, number, etc ...)

Objects (objects, arrays etc ...)

Primitive values are copied by their value
Objects are copied by reference*/


//let's define 2 primitive values

let x = "initial value";

//creating a new variable and setting its value = x

let y = x;

//Now I will change the value of x

x = "reassigned value";

//What is the value of y?

console.log(y); //initial value

/*This happens because x and y are INDEPENDENT variables. With primitives, I put things in a box; store the variable inside the primitive object.*/

//Let's see what happens with OBJECTS

let firstObj = {value: "initial value"};

let secondObj = firstObj;

firstObj.value = "reassigned";

//What ist the value of secondObj.value?

console.log(secondObj);

//The two objects point to each other.

/*The information stored in objects is actually located somewhere else in memory and the objects are pointing to that location. Which means that if the value is changing both objects will be affected.
The value is not stored in object but somewhere in memory. And they point to that location. */

/*
SHALLOW COPIES
The properties of the copy will share the same reference of the source object. As a result when we change some value you may also cause the other object to change.*/

let customer = {
    name: "John",
    age: 23,
};

//we create a copy of customer

let customShallowCopy = {...customer}; //shallow copying using spread
console.log(customShallowCopy);

customShallowCopy.name = "Lilly";

console.log(customer);
console.log(customShallowCopy);

//WHAT IF WE ARE DEALING WITH A NESTED OBJECT?

const studentNested = {
    name: "Leon",
    age: 18,

    city: {
        address: "Berlin 1234",

    },
};

const studentNestedCopy = {...studentNested}; //shallow copy only works on the first level
console.log(studentNestedCopy);

studentNestedCopy.name = "Anna";

console.log(studentNested); //original object not modified
console.log(studentNestedCopy);
//modifying the nested object
studentNestedCopy.city.address = "Paris 987";

console.log(studentNested); 
console.log(studentNestedCopy); //both Leon and Anna are living in Paris now, the nested object is not protected

//CREATING A DEEP COPY ( using structuredClone() )

let animalObj = {
    name: "Tweety",
    details: {
        species: "bird"
    }
};

//Deep clone using structuredClone()
let copyOne = structuredClone(animalObj);
console.log(animalObj);
console.log(copyOne);

//Changing first level
copyOne.name = "Tom";
copyOne.details.species = "cat";

console.log(animalObj); //{name: "Tweety", details: {species: "bird"}}
console.log(copyOne); //{name: "Tom", details: {species: "cat"}}


//be careful with handling objects

/*
    function addProduct(cart, productToAdd) {
  // Create a new array by spreading the original cart and adding the new product
  const updatedCart = [...cart, productToAdd];
  return updatedCart;
}

// Example usage:
const updatedCart = addProduct(cart, hatProduct);
console.log(updatedCart); // This will log the updated cart with the hat product added
console.log(cart); // This will log the original cart, which remains unchanged

This function creates a new array (updatedCart) by spreading the original cart array and adding the productToAdd to the end. The original cart array remains unmodified. */


/* const applyDiscount = (products, discount) => {
  // Create a new array to store the updated products
  const updatedProducts = [];
  
  // Loop through each product in the original array
  for (const product of products) {
    // Calculate the discounted price for the current product
    const discountedPrice = product.price - (product.price * discount / 100);
    
    // Create a new object with the updated price and other properties unchanged
    const updatedProduct = {
      ...product,
      price: discountedPrice
    };
    
    // Add the updated product to the new array
    updatedProducts.push(updatedProduct);
  }
  
  // Return the array with discounted prices
  return updatedProducts;
};

// Example usage:
const products = [
  {
    type: "t-shirt",
    price: 19,
    color: "green",
  },
  {
    type: "jeans",
    price: 27,
    color: "blue",
  },
  {
    type: "shirt",
    price: 32,
    color: "white",
  }
];

const discount = 20; // 20% discount

const updatedProducts = applyDiscount(products, discount);
console.log(updatedProducts); // This will log the updated array with discounted prices
console.log(products); // This will log the original array, which remains unchanged
 */


//RECAP

//Shallow cloning (copy) of objects and arrays


let x1 = 12;

let y1 = x1; //x => 12

x1 = 16;

console.log(y1); // Output: still 12, x and y are primitives, y1 stores just the values of first definition of x1

//NON PRIMITIVE VALUES

const arrA = [1, 2, 3]; //the actual values that are stored in array are reference values

const arrB = arrA; //arrB doesn't evaluate to the same content of arrA; they both point to the same reference im memory alocation (on your computer, in the cloud)

arrA.push('cat'),

console.log(arrB); //[1, 2, 3, 'cat'] arrA pushes new item, so arrB gets modified



function addOne(x1) { //local scope
  x1++;
  console.log(x1);
};

addOne(x1); //17
console.log(x1); //16


const obj = {
  num: 12,
};


function add1(obj) { 
  const newObj = {...obj}; //shallow copy
  newObj.num++;

  console.log(obj); //12
  console.log(newObj); //13
};

const user1 = {
  name: "Mario",
  age: 30,
  pet: "Yoshi",
  address: {
    street: "Mainst 31",
    city: "Berlin",
  },
};

const user2 = {
  ...user1,
  name: "Luigi",
  last: "bros"
};

const user3 = structuredClone(user1);

user1.age = 31;
user1.address.city = "Hamburg";

console.log(user1); //"Mario" age: 31; Hamburg
console.log(user2); // "Luigi" age: 30; Hamburg
console.log(user3);





//Destructuring


const arrAn = [1, 2, 3, 4, 5, 6];
//const f = arrAn[0]; //1
//const s = arrAn[1]; //2
//const rest = arrAn.splice(2); //3, 4, 5, 6

//console.log(rest);  //those are the 'old' ways of retrieving the values

//Now we take another look at deconstructuring

const [f, s, ...rest] = arrAn;

console.log(f, s); //1, 2
console.log(rest); //3, 4, 5, 6

//with objects

const animal = {
  group: 'dog',
  breed: 'poodle',
};

const {breed} = animal;
//console.log(breed);

function printBreed({breed}) {
  //const {breed} = animal;
  console.log(breed);
};

printBreed(animal);
