//Algorithms – 01: Complexity

/*
    Algorithms theory
    Big O Notation
    Overview of a few sorting algorithms */


//ALGORITHMS AGAIN?

    /*
    How can we define `algorithm?`
    
    A step-by-step procedure designed to solve a class of problems.
    A class of problems can be for example `sort this array of numbers`
    It's a "class of problems" instead of a specific problem
    Because there can be SO many different inputs
    '[2,1]', '[1,2,4,3,5]', '[6,0,-7,2,1,9812,52,3,1,9991325123689732557]'
    
    
    Could you name a specific algorithm?
    Today you will learn a few specific algorithms
    And how to compare algorithms*/


    //Print even numbers from 0 to 20

    for(let i = 0; i <= 20; i++){
        if(i % 2 === 0){
            //console.log(i);
        }
    }

    //Print even numbers from 0 to 20 method 2
    for(let i = 0; i <= 20; i += 2) {
        console.log(i);
    }

    const addUp = (num) => {
        let sum = 0;
        for(let i = 0; i < num; i++){
            sum += i;
        }
        return sum;
    };

    console.log(addUp(10));

    const addUp2 = (num) => {
        return (num * (num + 1)) / 2;
    };

    console.log(addUp2(10));

    //Let's look at `Bubble sort`
    // the earliest description of the Bubble sort algorithm was in 1956
    /* In pseudo code
    loop through array of numbers
    compare current number and next number
    if current number is larger than next number
    swap numbers around
    
    repeat loop until array is sorted*/

//BUBBLE SORT

const unsortedArray = [5, 2, 9, 1, 7, 3];

function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // Code here
            if(array[j] > array[j + 1]){
                //swap elements 5 and 2
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }

            }
          
    
    }

    return array;
} 

console.log(bubbleSort(unsortedArray));


/*let nums3 = [5, 2, 9, 1, 7, 3]

let sortedArr = nums3.sort(function(a, b){
        return a - b;
});

console.log(sortedArr); */