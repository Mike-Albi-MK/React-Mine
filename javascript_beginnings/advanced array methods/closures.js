//CLOSURES

/*
    A function that has access to the parent scope even after the function  has returned (is done executing).
    The purpose is to create a safe space for our variables. */

    //Setting and a calling a funciton within a function
    function inhit(){
        let name = "Mozilla";

        function displayName(){
            console.log(name);
        }
        displayName();
    }

    inhit(); //Output: Mozilla


//Returning a function

    function myTest(){

        return function(){  //IMPORTANT: here we're returning the entire function, not just the console.log
            console.log("whatever");
        }
    }

    let holdMyTest = myTest(); 
    /*here we create a variable and trigger func myTest() in order to store the returned anonymous func into "holdMyTest" */
    console.log(holdMyTest); // [Function (anonymous)]
    //since holdMyTest is a function I can go ahead and trigger it
    holdMyTest(); //whatever


    //------------------------------------------------------------------//


    function makeAdder(x){ //PARENT

        function add(y){ //CHILD, kinda the closure
            console.log( x + y);
        }

        return add;
    }

    let sum = makeAdder(1);
    console.log(sum);  //[Function: add], where x holds the value of 1
    //sum is actually add in disguise ... that means we can trigger it and pass a value to y
    sum(4); // 5


    //------------------------------------------------------------------//


    //TASK
    /*Using a closure to create a function makeTitler accepting a string (Mr. Miss etc.)
    Now trigger the inner function and pass a name
    Please refer to the function above
    When triggering the inner function you should use a message like "Dr. Smith" "Miss Linda" */

    /*function makeTitler(str){

        function addTitle(a){
            console.log(a + str);
        }
        return addTitle;
    }

    let title = makeTitler("Hamilton");
    title("Dr. ");

    let title1 = makeTitler("Clarkette");
    title1("Nurse ");

    let title2 = makeTitler("Smith");
    title2("Agent ");

    let title3 = makeTitler("Ghost");
    title3("Holy ");

    let title4 = makeTitler("Richard");
    title4("King "); */

    function makeTitle(x){

        function addTitle(y){
            console.log(x, y);
        }
        return addTitle;
    }

    let title = makeTitle("Dr");
    title("Hamilton");

    let title1 = makeTitle("Nurse");
    title1("Clarkette");

    let title2 = makeTitle("Agent");
    title2("Smith");

    let title3 = makeTitle("King");
    title3("Richard");


    //IIFE immediately invoked function expression

    const add = (function(){
        console.log("Immediately invoked");
    })();

//TASK
//create a function counter using IIFE and a closure

const count = (function(){
    let counter = 0;

    return function(){
            console.log(++counter);
        }
})();

count();
count();
count();

