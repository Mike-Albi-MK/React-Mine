// Pure functions

/*
    1. Do not cause side effects */

    let sum = 0;
    function add(a, b) {
        sum = a + b;
    }

    add(2, 2);
    console.log(sum);


    /* This is a pure function as it doesn#t cause side effects */
    function addPure(a, b){
        return a + b;
    }

    const result = addPure(9, 2);
    console.log(result);

/*  
    2. Always returns the same output given the same input (code is predictable)
     */

    //A function that doesn't return the same output

    function returnRandom(num){
        return Math.floor(Math.random() * num) + 1;
    }

    console.log(returnRandom(100));

    //it is by defintion not a pure function because the output is always a different random number

    