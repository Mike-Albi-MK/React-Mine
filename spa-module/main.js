console.log("Hello from the main.js file");

//Select one element by tag name
const element = document.querySelector("span");

//console.log(element);

//Select muliple elements by tag name
const elements = document.querySelector("span");

//console.log(elements);

//Select an element by id
const director = document.querySelector("#director");
//console.log(director);

//Select an element using class name
const movie = document.querySelector(".movie");
//console.log(movie);

//NOTE! When querying using querySelector & querySelectorAl only the first parameter is recognized
const differentElements = document.querySelectorAll("p", "span");
console.log(differentElements);
console.log(differentElements[1]);

console.log("_____________________________________________");


//-------------------- Manipulating elements ---------------------------//

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(p => {
    p.style.color = "red";
    p.classList.add("additionalClass");
});

director.innerText = "Roy Anderson";
director.innerHTML += "<span>Director: Roy Anderson</span>"; //this will override the previous content of the element


console.log("_____________________________________________");

//---------------------- Adding elements -------------------------------//

//Version 1
const divElement = document.querySelectorAll("div");
const inline = document.createElement("span");
inline.innerText = "I'm a span";
divElement[0].append(inline);

//Version 2
const innerDiv = document.querySelector("div");
const inlineSpan = document.createElement("span");
inline.innerText = "I'm the inline span";
innerDiv.append(inlineSpan);

console.log(inline);


//------------------------ Window object -------------------------------//

/*alert("Hi John");

const number = prompt("Please enter a number");
console.log(parseInt(number));

/* Asynchronous function, it makes the execution wait until input is provided by user */

console.log(window);
