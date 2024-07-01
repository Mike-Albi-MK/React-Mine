// Global Scope

/* 
    Variables and fucntions available everywhere
     */

    let sum = 0;

    

// Local Scope  || variable only accessible within {}

   /* {
        let sum1 = 0;
        console.log(sum1);
        console.log(sum);
    } */

   /* console.log(sum1);
        console.log(sum); || outside {} will throw an error */

        function add(a, b){
            sum = a + b;
        }

        add(4, 9);

        

        //There's a problem let sum = 0 can be found above, so we changed a globally accessible value


        //This function call has a side effect, as it modifies variables everwhere

        add(2, 2);

        //Preferred way of writing code
        //Doesn't change variables everywhere
        function addLocal(a, b) {
            let sum = 0;
            sum = a + b;

            return sum;
            //return a + b
        }

        const result = addLocal(3, 5);
        console.log(result);

        console.log(sum);

        /* Functions that cause side effects
            1. console.log()
            2. changing variables on the global scope
            3. modifying file on file system
            4. http request
            5. DOM event listeners */