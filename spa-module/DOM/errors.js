// error: const h1 = (document.querySelector('h1').innerText = 'Hello');



//syntax for catching errors is try and catch

try {
    //execute code that may or may not work
    const h1 = document.querySelector('h1');
    h1.innerText = 'Hello';

} catch(error) {
    //if it didn't work do something else
    console.log('Something went wrong');
    console.log(error);
    console.log(error.message);
}

const myError = new Error('No banana');
const banana = document.querySelector('banana');

if (!banana) {
    throw myError;
}

//console.log(h1);