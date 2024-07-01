// Hoisting

/*What is hoisting?

    – It pushes "up" the function declaration before it is used*/

    let res = add(2, 2);
    console.log(res);

    function add(a, b){
        return a + b;
    };

    //Output is 4 because the function has been pushed up to top

    const main = function() {
        let res = mult(2, 2);

        let res1 = div(2, 4);

        console.log(res, res1);
    };

    

    const mult = function(a, b) {
        return a * b;
    };

    const div = function(a, b){
        return a / b;
    };

    main();