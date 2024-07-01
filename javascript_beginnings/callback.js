const shoppingBasket = [
    { id: 1, offer: false, product: 'Oranges', price: 1.2, quantity: 2 },
    { id: 2, offer: false, product: 'Apples', price: 0.9, quantity: 6 },
    { id: 3, offer: true, product: 'Bananas', price: 0.5, quantity: 3 },
    { id: 4, offer: false, product: 'Cat food', price: 1.0, quantity: 12 },
];

const convertArray = (array, converter) => {
    const convertedArray = [];
    for (const item of array) {
        convertedArray.push(converter(item));
    }

    return convertedArray;
};

const getProductPrice = ({price, quantity}) => price * quantity;
const prices = convertArray(shoppingBasket, getProductPrice);

console.log(prices);

/* Your code looks good! You have successfully defined a function convertArray that transforms an array based on some conversion logic provided by a converter function. In this case, you're using it to calculate the total price of each item in the shopping basket.

You define a getProductPrice function which takes an item object as input, destructures its price and quantity properties, and returns the total price by multiplying the price with the quantity.

Then, you use the convertArray function to apply this getProductPrice function to each item in the shoppingBasket, resulting in an array of total prices for each item.

Finally, you log the prices array to the console, which should contain the total price of each product in the shopping basket.

Your code looks good to go! If you have any further questions or need additional assistance, feel free to ask! */