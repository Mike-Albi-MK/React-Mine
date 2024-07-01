//Default parameter

function sayHello1(name = 'World'){
    if (name) {
    console.log(`Hello ${name}`);
    } else {
        console.log(`Hello World`);
    }

    name = name || `World`;
    console.log(`Hello ${name}`);
}

sayHello1('Mario');
sayHello1();


//======================================================================//

function sayHello(name = 'World'){
    console.log(`Hello ${name}`);
}

sayHello('Mario');
sayHello();