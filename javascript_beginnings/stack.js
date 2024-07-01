//Callstack example

const a = 20;
const b = 30; //Memory = set to undefined

function sum(x, y) {
    return x + y;
}

function average(x, y) {
    const avg = sum(x, y) / 2;
    return avg;
}

const avg = average(a, b);

console.log(avg);

/* Global execution context:
    Its job is to read the function setup and alocate the memory for it and the individual value of the memory.
    The function call triggers a mini program to run. And so a new execution context is started, essentially the same as the global context but locally limited to the function (avg). Avg has the same values in the memory located (x, y).
    
    Call stack

    sum(),
    average(),
    log(),
    global()
*/