//Review of module

/* JavaScript is an interpreted programming language
    We use Node V8 engine 
    JS is a single threaded and asynchronous*/

    console.log(`Hello`);

    let sum = 1 + 1; //1 + 1 is a statement, the whole line a sentence

/*  JavaScript Datatypes
    – Primitives are inmutable: 
        string, number, Boolean, undefined, null */

        //Strings are iterable, similar to an array
        let str = 'hello';
        str = str[0].toUpperCase() + str.slice(1);
        console.log(str);

        //Number
        let w = 12;
        let neg = -12;
        let float = 1.4;
        let not = NaN;

        console.log(Number.isInteger(float));
        console.log(Number.isNaN(not));

        //Boolean
        true, false;

        //Falsey values
        /* NaN, undefined, 0, "", null, false, -0
        an ampty array is not falsey */

        //Undefined
        let person;
        console.log(person);

        //null
        let data = null;

    // – Objects

        const arr = ["a", "b", "c"];
        const user = {
            key: "Value"
        };

    //Operators

        /* Assignment

        + (concatenation)
        -
        * (multiplication)
        / divison
        % module (remainder)
        ** exponation similar to Math.pow()
        
        
        
            Comparison – evaluates to true or false
            
        ==, === equality (=== strict)
        !=, !==     not and not equals to
        >, <, >=, <=*/

        /* if (age > 18) {
            isAdult = true;
        } */

        // Shorthand operators

        let num = 1;
        num = num + 1;

        //short:
        num += 1;
        //or
        num++; //incement by 1, only adds one

        console.log(num); //output: 4

        //Convert a string to a number
        let strN = "1123";
        

        console.log(+strN); //+ conversion
        //console.log(parseIn(strN)); or console.log(Number(strN));


        //String Methods

        /* length
            includes() checks colection of characters, returns Boolean true or false
            trim()  removes white space before and after */
            let format = '     Hello';
            console.log(format.trim());
            /* slice(start, end index) returns a string */

        //Condition statement

        let age = 12;

        if (age > 18) {
            // code block run if true
        } else if (age === 18){
            //code runs if false
        } else {
            // default
        }

        //let isAdult = condition ? if true : if false;

        let isAdult = age >= 18 ? 'Admitted' : 'Denied';

        console.log(isAdult);

        let sum1 = 0;
        const pass = 'letmein';

        const PORT = 8080;
        Number.MAX_VALUE;

        //Variables naming convention
        //Camel case
        //snake case

        let camelCase = 123;
        let snake_case = 'blah';

        let sumOfEven;

        //Logical Operators
        // AND &&
        // OR ||
        // NOT !

        let t = true && true;
        let o = false || true;
        let n = !true; //reverted operation

        let greeting = greet || "Hello";

        //Arrays
        //list, collection, iterable
        //accessed by index

        const games = ["Mario Bros", "Mine Sweeper", "Sonic", "PacMan"];
        let first = games[0]; // first item
        let last = games[games.length -1]; //last item

        //Basic Methods

        games.push('CoD');
        games.pop(); //added and removed
        console.table(games);

        let pacIndex = games.indexOf("PacMan");

        console.log(games.reverse()); //

        for (let i = 0; i < games.length; i++) {
            console.log(games[i].toLocaleUpperCase());
        }

        for (const game of games) {
            console.log(games.toLocaleUpperCase());
        }

        //Functions

        function sayHello() {
            return `Hello`;
        }

        function sayHelloTo(name){
            return `Hello ${name}`;
        }

        console.log(sayHelloTo(`Mario`));


        //Arrow Functions

        const sayHi = (name) => `Hi ${name}`;

        console.log(sayHi(`Luigi`));

