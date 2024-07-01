// SORT

/*  
    It allows us to sort the elements of an array in place.
    It iterates over the array elements and applies an algorithm.
    Syntax: array.sort(compareFunction)
    The compareFunction defines the sort of order and is optional.
    If omitted the array elements are converted to string and sorted alphabetically. */

    const dogs = ["Pluto", "Lassie", "Charlie"];

    dogs.sort();
    console.log(dogs); // [ 'Charlie', 'Lassie', 'Pluto' ]

    const nums = [50, 2, 1, 150];
    nums.sort();
    console.log(nums); // [ 1, 150, 2, 50]

    /*
        The problem above happens because numbers are turned into strings (utf-16) and sorted alphabetically. In UTF-16 it is represented by 0<0031*/


    /*
        HOW TO SOLVE THIS PROBLEM:
        We need to pass a comparing function to sort()
        The function we are going to pass takes an A and B value (when A n B are numbers)
        
        While comparing 2 number 3 thing could happen:
        if the returnedvalue of A – B is:
            < 0 .. it means that A is smaller than B hence A must come BEFORE B in the array

            0 .. it means both numbers are equal .. sp we do nothing
            
            > 0 ... it means that B is smaller than A hence B must come BEFORE A in the array*/

    //let's build our compare function that we will then pass to sort()

    function compare(a, b){
        return a - b; //[1, 2, 50, 150] ascending
        //return b - a [150, 50, 2, 1] descending
    };

    let nums2 = [1, 150, 2, 50];
    nums2.sort(compare);
    console.log(nums2);



    //Let's rewrite the above using a callback

    let nums3 = [3, 90, 2]

    let sortedArr = nums3.sort(function(a, b){
            return a - b;
    });

    console.log(sortedArr); // [ 2, 3, 90 ]

    //TASK:
    // Write a function to sort an array of strings in descending order of their lengths.
    // Output: ['banana', 'orange', 'kiwi', 'grape']

    const fruits = ['banana', 'kiwi', 'orange', 'grape'];

    let sortFruitsLength = fruits.sort((a, b) => {
        return b.length - a.length;
    });

    console.log(sortFruitsLength);

    const fruit = ['banana', 'kiwi', 'orange', 'grape'];

    let sortFruitLength = fruits.sort((a, b) => a.length - b.length);
        

    console.log(sortFruitLength);

    //TASK:
// Sort the following array by value
const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

    const sortedByValue = items.sort((a, b) => a.value - b.value);
    console.log(sortedByValue);

    const sortedByLetter = items.sort((a, b) => b.name.length - a.name.length);
    console.log(sortedByLetter);

    const sortedByFirstLetter = items.sort((a, b) => b.name[0] - a.name[0]);
    console.log(sortedByFirstLetter);