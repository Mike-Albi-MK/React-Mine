// The OR operator ||

let ticket = 100;
let pass = `green`;

let vip = ticket > 100 || pass === `green`;


console.log(vip);



let nodePort = 2000;
let port;

if(nodePort){
    port = nodePort;
} else {
    port = 3000;
}

console.log(port);

//=====================================================================//

// Short circuit hand assignment ||

let name = `Ramba`;

let greet;

/*if (name) {
    greet = `Hello ` + name;
} else {
    greet = `Hello World`;
} */

// greet = name ? `Hello ` + name : `Hello World`; ternary operator

greet = name || `Hello World`;

console.log(greet);
