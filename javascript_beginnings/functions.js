// FUNCTIONS

    /* – Functions are a fundamental block in JavaScript 
       – they are a set of statements that perform a task or calculate
       a value
       – Functions are "_first class objects_"; 
        they can be:
            – passed to other functions
            – returned from functions
            – assigned to variables and properties
        Benefits of using functions:
        – perform a similar action in many places
        – allow the code to be calles many times without repetition
        – Review of functions we used so far:
            parseInt();
            pop();
            array(); */

// What functions did we use so far and how?
    /* – console.log(`Hello World!`); 
    
        log() (The name of the function)*/

        console.log(`Hello Mike!`);

        // Math.floor(number)

        parseInt(`12px`); // this function has a return value; but we have something to do wih it

        let num = parseInt(`12px`);
        console.log(num);

        // CREATING A FUNCTION ONLY WORKS WHEN YOU CALL IT; CREATING ALONE DOESN'T DO THE JOB!!!

        // function functionName(`name of the function`) {`code that wil be executed`};

        // DECLARING A FUNCTION:
        /*      Function keyword
                Name
                Place for parameter (arguments) – within the paranthesis
                Code block – anything with the curly brackets {} 
                Return value (default is undefined (void))
                */
        function functionName() {
            console.log(`I ran!!!1`);
        }

        // CALLING A FUNCTION:
        /*      
                Use the function name with the paranthesis "()"
                Within the paranthesis we pass arguments
                */
        functionName();
        functionName();
        functionName();

        function alarm() {
            console.log(`Alarm! You've been robbed! Call the police!!!`)
        }

        alarm();
        alarm();
        alarm();

        function workNow() {
            console.log(`Let's get back to work now`)
        }

        workNow();
        workNow();
        workNow();

        function workLater() {
            console.log(`... or later. Fine with me`)
        }

        workLater();

        function sayHello(name, age) {
            //sayHello(name) is the same as: let name = `Mike`;
            //console.log(`Hello ${name}! You're a > ${age} ;-)`);
            console.log(`Do you see me?`);
            return `Hello ${name}! You're a > ${age} ;-)`;
        }

        /* console.log(`Do you see me?`); after return would not be printed on console */

       //sayHello('Mike!', 18);
       let temp = sayHello('Mike!', 18); 
       console.log(temp);
       // or only: console.log(sayHello('Mike!', 18));

       // console.log(sayHello('Mike!', 18)); will output undefined; so you would have to use: let temp = sayHello('Mike!', 18); console.log(temp);


        function plus(number) {
            console.log(`A tough one, right?`);
            console.log(`2 + 3 = ${number}`);
        }

        plus(`5`);

        // SCOPE:

        let sum = 0; // Global scope

        function add(a, b) {  // local scope
            sum = a + b;
            console.log(`inner`, sum);
        }

        console.log(`outer`, sum); // Output: 0 cuz we console.log() before callign the function!!!
        add(4, 4);
        console.log(`outer`, sum);

        // Output: inner: 8 || outer: 8

        //**************************************************************//

        function sum1(a, b) {
            return Number(a) + Number(b); //Number(a + b) Output: 22!!!
        }

        const result = sum1(2, `2`); // 4
        console.log(result);

        

        function sum2(a, b) {
            if(typeof a !== "number" || typeof b !== "number"){
                console.log(`Arguments must be numbers`);
                return NaN;
            }

            return a + b;
        }

        const result1 = sum2(2, `Hello`);
        console.log(result1);



        function sumOfArray(arr) {
            let res= 0;

            for (const num of arr) {
                res += num; 
            }
             return res;

        }

        let res = sumOfArray([1, 3, 5, 6]);

        console.log(res);

        //function sayHelloTo(name) {
            /*
            if (name ) {
                return `Hello ${name}!`;
        } else {
            return `Hello World!`
        }
        }*/

        function sayHelloTo(name) {
            
            if (name) {
                return `Hello ${name}!`;
        } else {
            return `Hello World!`;
        }
    }



        console.log(sayHelloTo(`Mario`));
        console.log(sayHelloTo(``));

