//OBJECTSCOPE

"use strict" //helps us write better js and will throw an error if we try to delete a property from a "frozen" object (among other things)

let myObj = {
    name: "Sandra",
    favColor: "blue",
    //let's nest another object
    address: {
        street: "Kastanienallee 35",
        city: "Berlin",
        zipCode: "10318",
    }
};

console.log(myObj.name);
console.log(myObj.address.city);
delete myObj.favColor;
console.log(myObj);


//ADDING METHODS TO OBJECTS

/* What is a method?
    basically a function stored as property within an object (simplified: a function inside an object) */

    const newObj = {
        hello: "world",

        myFunction: function() {
            console.log("hello world");
        }
    };

    //TRIGGERING A METHOD
    //myfunction(); this won't work because the function does not exist on the global scope

    newObj.myFunction(); //hello world

    /*
        Adding an object as a prefix is rather common and we have seen it previously when using the Math object */
        Math.max(1, 2, 3);
        Math.ceil(1.57);

        //We can add as many methods as needed
        const myLibrary = {
            sayHello: function() {
                console.log("hi, there!");
            },
            //Another syntax to add a method
            sayGoodbye() {
                console.log("have a nice day!");
            }
        }

        myLibrary.sayGoodbye(); //"have a nice day!"
        myLibrary.sayHello(); //"hi, there!"

    //Date object
    /* It is built in js and is used to retrieve time7date related info */

        //How do we use this obj?
        const today = new Date(); //turning "today" into a date object will allow me to play with some magic with it ...

        console.log(today.getFullYear()); //2024
        console.log(today.getMonth()); //3 even it's April, JS starts with 0, zero based value

        //USING METHODS WITH PARAMETERS
        const personOne = {
            name: "John",

            //Creating a method to log year of birth
            birthYear(currentAge){
                //we can treat this as a regular function and add variables and whatever we need
                const today = new Date(); //I create a date object
                const currentYear = today.getFullYear(); //I retrieve the current year
                const yearOfBirth = currentYear - currentAge; //I substract age (passed on function call) from current year
                console.log(yearOfBirth);
            }
        };

        personOne.birthYear(20);


        //STUDENT TASK: Create an object called "mathTricks" containing a method that takes 1 number (as a param) and logs the number multiplied by itself to the terminal

        const mathTricks = {
            multiplyBySelf(n){
                console.log(n * n);
            }
        };

        mathTricks.multiplyBySelf(4);
        mathTricks.multiplyBySelf(255);
        mathTricks.multiplyBySelf(64);
        mathTricks.multiplyBySelf(81);

        //Create an obj called "mathStuff" containing a function that accepts any number of params ( numbers ) and returns their sum

        const mathStuff = {
            sum: function(...args){  //rest operator
                //console.log(args);   //array containing all arguments passed on function call
                let res = 0;
                for (let i = 0; i < args.length; i++){
                    //console.log(args[i]);
                    res = res + args[i];
                }
                return res;
            }
        }

     


        let returnedSum = mathStuff.sum(2, 4, 4);
        console.log(returnedSum);
      

        //USING PROPERTIES INSIDE OUR METHODS (THIS)

        const person2 = {
            name: "Lilian",
            currentAge: 20,

            printDetails(){
                //In order to grab obj properties we need to use "this"
                //"this" is a keyword and refers to the object
                //Its value will differ (depending on the situation) but in this context it will point to the obj

                console.log(this); //points to current object

                console.log(`${this.name} is ${this.currentAge}`);
            }
        }

        person2.printDetails();



        //CALLING A METHOD FROM ANOTHER METHOD
        const calling = {
            func1: function(){
                console.log("func1");
                this.func2;
            },
            func2: function(){
                console.log("func2");
            }
        };

        calling.func1();

        /*STUDENT TASK: */