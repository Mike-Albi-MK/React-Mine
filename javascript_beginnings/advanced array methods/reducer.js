//REDUCER an advanced array method

/*
    Reducer is a bit different than the other methods. It doesn't return a new array but reduces the original array to a single value.    
*/

const numbers = [1, 2, 3];

let sum = 0;
for (const num of numbers) {
    sum += num;
}

console.log(sum); //Output 15

//New modern usage

const initialValue = 0;

const total = numbers.reduce((accumulator, item) => {
    return accumulator + item;
}, initialValue);

console.log(total); //Output 6

//no initial value passed, so it's by default the first item of the array (1)
const total2 = numbers.reduce((acc, item) => acc + item);
console.log(total2); //6


//Things more complicated

const shoppingBasket = [
    {product: 'candy', price: 1.09, quantity: 2},
    {product: 'bread', price: 0.99, quantity: 1},
    {product: 'tea', price: 3.99, quantity: 1},
    {product: 'chips', price: 2.99, quantity: 1},
    {product: 'peanuts', price: 1.99, quantity: 3},
];


/*const totalPrice = shoppingBasket.reduce((accumulator, item) => {
    temp = item.price * item.quantity;
    return accumulator + temp;
}, 0); */

const totalPrice = shoppingBasket.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
}, 0);

//One line:
/*const totalPrice = shoppingBasket.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);*/

console.log(totalPrice); //Output 16.12

//Let's complicate things even further

const mostExpansive = shoppingBasket.reduce((accumulator, item) => {
    //if the accumulator is null, return item
    if(!accumulator){
        return item;
    }
    //if the accumulator has an item with a higher price, return accumulator
    if(accumulator.price > item.price) {
        return accumulator;
    }
    //if the item has a higher price return the item
    return item;

}, null);

console.log(mostExpansive);

const lessExpansive = shoppingBasket.reduce((accumulator, item) => {
    if(!accumulator){
        return item;
    }
    if(accumulator.price < item.price){
        return accumulator;
    }
    return item;
}, null);

console.log(lessExpansive);

//"candy,bread,tea ..." return as a single value

const productNameCSV = shoppingBasket.reduce((accumulator, item) => {
    if(accumulator === ''){
        return item.product;
    }
    else{
        return accumulator + ',' + item.product;
    }
}, '');

/*const productNameCSV = shoppingBasket.reduce((accumulator, item) => {
  return accumulator + ',' + item.product; '').slice(1); */

  /* const productNameCSV = shoppingBasket.reduce((accumulator, item) => {
    return accumulator ? `${accumulator},${item.price}` : item.product;
   
}, '');*/

console.log(productNameCSV);



 const numero = [1,2,3];

 const totale = numero.reduce((accumulator, num) => accumulator + num);

 console.log(totale);

 const concati = numero.reduce((accumulator, num) => {
    return `${accumulator}${num}`; 
 });

 console.log(concati);

 const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const totalVotes = voters.reduce((total, voter) => {
    return voter.voted ? total + 1 : total;
    }, 0);

    console.log(totalVotes);

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const shoppingSpree = wishlist.reduce((accumulator, item) => {
    return accumulator + item.price}, 0);

    console.log(shoppingSpree);

const votePeople = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voterResulted = votePeople.reduce((accumulator, voter) => {
    if (voter.age >= 18 && voter.age < 25) {
        accumulator.numYoungPeople++;
        if (voter.voted) {
            accumulator.numYoungVotes++;
        }
    } else if (voter.age >= 25 && voter.age < 36) {
        accumulator.numMidPeople++;
        if (voter.voted) {
            accumulator.numMidVotes++;
        }
    } else if (voter.age >= 36 && voter.age <= 55) {
        accumulator.numOldPeople++;
        if (voter.voted) {
            accumulator.numOldVotes++;
        }
    }
    return accumulator;
}, {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotes: 0,
    numMidPeople: 0,
    numOldVotes: 0,
    numOldPeople: 0
});

console.log(voterResulted);

/* 
    const jeansProductsCount = products.reduce((acc, item) => {
  if (item.type === 'jeans') {
    acc++; // Increment the count for each jeans product
  }
  return acc;
}, 0); // Initialize the accumulator with 0

console.log("Number of jeans products:", jeansProductsCount);


const redProductsTotalPrice = products.reduce((acc, item) => {
  const productColor = 'red';
  if (item.color === productColor){
    acc += item.price; // Accumulate the price of red products
  }
  return acc;
}, 0); // Initialize the accumulator with 0

console.log("Total price of red products:", redProductsTotalPrice);
*/

const people = [
    {name: "Sigi Müller", born: 1874},
    {name: "Rob Reimer", born: 2003},
    {name: "Marianne Siegenheim", born: 1904},
    {name: "Angelica Dacosta", born: 1899},
    {name: "Jebby Harlington", born: 2000},
    {name: "Malongus Anarchious", born: 1953},
    {name: "Hentje Domfringsburg", born: 1860},
    {name: "Check Eymadas", born: 2012},
    {name: "Baron Sigi von Fürstenhof III", born: 1969},
    {name: "Karanido Fabulous", born: 2024},
];

const deadPeople = people.reduce((acc, person) => {
    if (person.born < 1900) {
        acc++;
    }
    return acc;
}, 0);

console.log(deadPeople);

const sortedByLetter = people.sort((a, b) => {
    const firstLetterA = a.name[0].toLowerCase();
    const firstLetterB = b.name[0].toLowerCase();
    if(firstLetterA < firstLetterB){
        return -1;
    }
    if(firstLetterA > firstLetterB){
        return 1;
    }
        return 0;
});

console.log(sortedByLetter);

const sortByAge = people.sort((a, b) => a.born - b.born);
console.log(sortByAge);


const findMax = (arr) => {
    return Math.max(...arr) 
};

console.log(findMax([1, 2, 3, 4, 5]));


const hourTracking = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
];

const calculateHours = hourTracking.reduce((acc, hour) => {
    return acc + hour.end - hour.start;}, 0);

    console.log(calculateHours);