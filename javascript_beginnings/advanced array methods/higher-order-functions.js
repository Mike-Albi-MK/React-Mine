//HIGHER ORDER FUNCTIONS

/* 
    We can pass a function as an argument to another function (callback)
    and we can return afunction from another function
    
    
    In JS functions are first class citizens*/


    const number = 23;
    const greet = function() {
        return 'hello';
    };

    // Function that returns another function

    function makeGreet(name) {
        return function(){
            console.log('Hello ' + name);
        };
    };

    const func1 = makeGreet('Jane');
    const func2 = makeGreet('John');
    func1();
    func2();


//a function that accepts another function as an argument (callback)
    function repeat(n, action){
        for(let index = 0; index < n; index++){
            action(index);
        };
    };

    function logNumber(n){
        console.log(`Number: ` + n);
    };

    repeat(5, logNumber);
    /*OUTPUT:
    Number: 1
    Number: 2
    Number: 3
    Number: 4 */

//Function multiplier that returns another function

    function multiplier(factor) {
        return function(x){
            return x * factor;
        };
    };

    const doubler = multiplier(2);
    const tripler = multiplier(3);

    console.log(doubler(5));
    console.log(tripler(5));
 

//RECAP

/*  
    1. A function that takes another function as argument (callback) 
    2. A function that returns another function.
                    – that's a higher order function*/

function myMap1 (array, action) {
    //1. Create an empty array
    const resultArray = [];
    //2. Loop ver the array (do some work)
    for (const item of array) {
        if (action(item)) {
            resultArray.push(item);
        }
    }
    //3. return the new array
    return resultArray;
};