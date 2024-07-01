// VARIABLES SCOPE

const bookPrice = 12;
const discount = 0.5;

if(true) {
    let discounted = bookPrice * discount;
    console.log(`discounted`, discounted);
    //bookPrice = bookPrice * discount;
}

console.log(`bookPrice`, bookPrice);

/* Output: discounted 6; bookPrice 12 – both consoles apply, code block {}
and what is outside*/

/* if you want to display let discounted = bookPrice * discount globally,
outside the code block {}; you have to 

const bookPrice = 12;
const discount = 0.5;
let discounted; // undefined

console.log(`discounted`, discounted);
console.log(`bookPrice`, bookPrice);
*/