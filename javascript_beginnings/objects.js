"use strict"
//OBJECTS – INTRO

//Objects are key value pair data types.

/*{
    key: value;
}; // CSS */

const myObj = { 
    //Object
    name: 'John',
    "first name": "John Smith",
};

console.log(myObj.name);
console.log(myObj['first name']);

// an array = is variable that contains different values

let myArr = ["adst", 1, true, ];

/* An object is a comma-separated list of properties wrapped in curly     braces.
    Properties are key-value pairs.
    Objects are really important in backend, that's how we communicate there
    An object encapsulates data and avoids polluting the global scope */

let user = { // object 
    name: "Mary",  //name, age = these are properties (key values)
    age: 30,
}

//We could place that info into an arry
    let myUser = ["mary", 30];

    //OR

// We couldpackage everything inside an object where we would have a description (key) for what the data responds

    let userA = { // object
        name: "Mary",
        age: 30,
        pet: "parrot",
    }

/*  
    The last property in the list may end with a trailing comma.
    It makes it easier to add new properties.*/

    //ACCESSING VALUES

    console.log(user.name); //Output: Mary

    //ADDING PROPERTIES
    user.nationality = "Brasilian";
    console.log(user); //Output: { name: 'Mary', age: 30, nationality: 'Brasilian' }

    user["language"] = "protugese";
    console.log(user); //{ name: 'Mary', age: 30, nationality: 'Brasilian', language: 'portugese' }

    //MODIFYING PROPERTIES
    user.age = 35;
    console.log(user);

//What if property keys are not 1 word?

    let user2 = {
        name: "John",
        age: 25,
        "likes coding": true, //likesCoding": true,
    }

    //In this specific case in order to retrieve the value of the "likes coding" key I need []

    console.log(user2["likes coding"]);

    //Now can I check if a property exists?

    let user3 = {
        name: "Amanda",
        age: 20,
    }

    console.log(user.nationality === undefined); //true, mine is false

    //We could the "in" operator
    console.log("age" in user3); //true
    console.log("ageasdfasf" in user3); //false

    //or you could use the vuilt in method hasOwnProperty()
    console.log(user3.hasOwnProperty("age")); //true

    //Deleting Properties
    console.log(user3);
    delete user3.admin;
    console.log(user3);

    //How to prevent modifications
    //Object.seal{} prevents deletion of existing properties but you can still modify them
    //Object.freeze() will prevent all sort of changes


    const objFinal = {
        value: 10,
    }

    Object.seal(objFinal);
    objFinal.value = 20;
    console.log(objFinal);

    Object.freeze(objFinal); //now it's frozen
    objFinal.value = 60;
    console.log(objFinal);

    /*STUDENT TASK: // 1. Using a template literal print out the values from the obj below
// E.g "David Rayy is enrolled in class VI and is rollNo 12"
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};


// 2. Update the name to David Mustermann
// console log the object and make sure it has been updated 


// 3. Add the following property to the object:
// student age = 11 


// 4. Now check if the age is 11 and only in that case you should add the prop basicTest = "passed"
// log the object to check.

// 5. Use dot notation to add the following prop
// average = 2.4


// 6. Check if the average is between 1 and 2.5 and in that case add the prop gymnasium = true


// 7. check if the prop gymnasium exists and in that case freeze the object


// 8. Add "use strict" to the top of your file and try to delete prop sclass. 
// What happens when you run your file in the terminal?



// 9. Create an empty object called myPet


// 10. Add the following properties
// name ( contains pet name)
// details ( contains several details about your pet). Which data type could I use to hold multiple values?

 */

let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};

console.log(`${student.name} is enrolled in class ${student.sclass} and isrollNo ${student.rollno}`);
student.name = "David Mustermann";
console.log(student);
student["student.age"] = 11;
console.log(student);
if (student["student age"] === 11){
    student.basicTest = "passed";
}
console.log(student);
student.average = 2.4;
console.log(student);

if (student.average > 1 && student.average < 2.5) {
    student.gymnasium = true;
  } 

console.log(student);

if (student.hasOwnProperty("gymnasium")){
    Object.freeze(student);
}
Object.freeze(student);

console.log(student);
//delete student.sclass;
console.log(student);
//student.new_property = "use strict";


let myPet = {

};

myPet.name = "Husker";
console.log(myPet);
myPet.details = [7, "black", "red-eyed"];
myPet.race = "Hellhound";
myPet.numberOfHeads = 3;
myPet.levelOfAggression = "rabies";
console.log(myPet);