//returns an object
const target = document.querySelector('#red');

//returns an "Array like" object
const paras = document.querySelectorAll('p');

//paras.forEach((e) => console.log(e));

//console.log(target);
console.log(paras);

//console.dir(target);
console.log(target.nodeName);
console.log(target.nodeType);
console.log(target.parentElement); //this is what you probably want
console.log(target.parentNode);
console.log(target.childNodes);
console.log(target.children);
const main = document.querySelector('main');
console.log(main.children);

console.clear();

target.nextElementSibling.style.color = "hotpink";
//const p = main.querySelector('p');
//console.log(p);

console.log(target.nextSibling.style);
