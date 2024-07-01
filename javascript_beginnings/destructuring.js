//DESTRUCTURING


/*
    A feature that allows us to extract values from arrays/objects and store them into variables in order to have a more readible code. 
    */

    let arr = ["Pam", "Jim"];

    //In order to grab just 1 single value I can use bracket notation (not destructuring, just the normal approach)

    let someName = arr[0]; //Pam
    let someName2 = arr[1]; //accessing the index

    //Using Destructuring

    let [name1, name2] = arr; //square bracket cuz I'm dealing with an array

    //creating two variables, we are substating values with variables holding the values from the array arr

    console.log(name1, name2); //Output: Pam Jim


    //ARRAY 2 EXAMPLE (skipping values) ----------------------------------

    let arr2 = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

    let [firstName, , title] = arr2; //skipping value by not declaring a varibale , ,
    console.log(firstName, title); //Julius Consul

    //DESTRUCTURING OBJECTS

    let hero = {
        heroName: "Batman",
        realName: "Bruce Wayne",
    }

    //How do I grab values from the obj? || fot notation

    console.log(hero.heroName);
    console.log(hero.realName);

    //Using destructuring
    //When using destructuring an object we need to use {}
    //The variable name MUST match property key or you will get undefined

    let {heroName, realName} = hero;
    console.log(heroName, realName); //Batman Bruce Wayne

    heroName = "Milly";
    console.log(heroName); //Milly
    console.log(hero); //{heroname: "Batman", realName: "Bruce Wayne"}



    //ALIAS
    //If you want a variable name different from the obj keys you need an alias

    let hero2 = {
        a: "Batman",
        b: "Bruce Wayne",
    };


    //In order to add an alias we use the : symbol
    let {a:superHero, b:realPerson} = hero2;

    console.log(hero2); //{a: 'Batman', b: 'Bruce Wayne}
    console.log(superHero, realPerson); // Batman Bruce Wayne

    //IN A NESTED OBJECT

    let finalObj = {
        fName: "Mary",
        lName: "Smith",
        address: {
            city: "Berlin",
            street: "Kastanienallee 34",
        },
    };

    console.log(finalObj.address.city); //Berlin

    //DRESTRUCTURING

    let {
        fName,
        lName,
        address: {city, street}
    } = finalObj;

    console.log(city); //Berlin!!!

    //DESTRUCTURING WITHIN A FUNCTION

    function destrFunc(arr){
        let [num1, num2, num3] = arr;
        console.log(num1, num2, num3);  // Output: 2 3 4
    };

    destrFunc( [2,3,4]);

    //--------------------------------------

    function someFunc(obj){
        console.log(obj.name); //Jim
        let {name, age} = obj;
        console.log(name, age);
    };

    someFunc( {name: "Jim", age: 35});

    //Destructuring while receiving the object

    function someFunc2( {name, age}){
        console.log(name, age); //Mary 20
    };

    const person = {
        name: "Mary",
        age: 20,
    };

