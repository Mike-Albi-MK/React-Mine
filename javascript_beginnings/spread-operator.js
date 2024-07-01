//Spread Operator

/*  Spread operator works with array and "spreads" its values in place
 */

console.log(Math.max(2, 3, 45, 4, 3)); //Output: 45


//const numbers = [2, 3, 45, 4, 3];


//console.log(Math.max(numbers));


//======================================================================//

const numbers = [2, 3, 45, 4, 3];
console.log(numbers); //Output: [ 2, 3, 45, 4, 3] array
console.log(...numbers); //Output: 2 3 45 4 3 not an array anymore, spread out, individual items

console.log(Math.max(...numbers)); //Output: 45


    //convert the argument values into an array
    function findMax(...numbers) {
        //Spread the values from the array
        return Math.max(...numbers);
    }

    //TASK

    const feline = ["Cat", "Lion", "Tiger"];
    const canine = ["Dog", "Wolf", "Fox"];

    const animals = [...canine, ...feline, "Parrot", "Sparrow"];

    console.log(animals); // [ 'Dog', 'Wolf', 'Fox', 'Cat', 'Lion', 'Tiger' ] two arrays spread and combined into one

    const [d, w, f] = canine;

    console.log(d, w, f);