//ADVANCED ARRAY METHODS

/* – iterating over arrays
   – converting an array to a different array
   – getting a subset of an array */

   /* Advanced array methods don't actually include any new techniques.
   They are incredible useful and common tools built into JavaScript itself.
   Two of them do really look familiar. */

   const bookshelf = [
    { title: 'The Silent Spring', author: 'Rachel Carson', genre: 'Science' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
    { title: '1984', author: 'George Orwell', genre: 'Fiction' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Fiction' },
    { title: 'Faust', author: 'Johann Wolfgang von Goethe', genre: 'Drama' },
];

/*old way: for (const book of bookshelf) [
    console.log(book.title)
]*/

//helper function
function printTitle(book){
    console.log(book.title);
}

//ForEach iterates (loops) for each item of the array
//Performs a specific action for each element in an array
bookshelf.forEach(printTitle); //forEach returns void, it has no return value

/*bookshelf is array, we access through dot notation, forEach requires a function as input */

function printAuthor(book){
    console.log(book.author);
}

bookshelf.forEach(printAuthor);

function printGenre(book){
    console.log(book.genre);
}

bookshelf.forEach(printGenre);

bookshelf.forEach((book => console.log(book.author)));
bookshelf.forEach((book => console.log(book.genre)));

//a callback function accepts up to three arguments

const numbers = [2, 4, 5, 7];
numbers.forEach((number, index, array) => {
    console.log(number, index, array);
});

/*  4 1 [ 2, 4, 5, 7 ]
    5 2 [ 2, 4, 5, 7 ]
    7 3 [ 2, 4, 5, 7 ] */

//array is always the third argument of the function, so you need an "empty" line or so if you don't want to access the index

//MAP METHOD

function getTitle(book){
    return book.title;
}
const bookTitle = bookshelf.map(getTitle);

console.log(bookTitle);


const numbers1 = [2, 4, 6, 8];
const products = numbers1.map((number) => number * number);
console.log(products);

const genreArray = bookshelf.map(book => book.genre);
console.log(genreArray);



//Filter function

//requires to work with some condition
//returns items that pass the test
//returns a new array

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//const evenNumbers = numbers2.filter((number) => number % 2 === 0);


//helper function

function isEven(number){
    return number % 2 === 0;
};

const evenNumbers = numbers2.filter(isEven);
console.log(evenNumbers);


const oddNumbers = numbers2.filter((number) => number % 2 !== 0);
console.log(oddNumbers);

//TASK
//create a new array with only fiction books

const fictionBooks = bookshelf.map((book) => {
    if (book.genre === "Fiction"){
        return book;
    }
});

//const fictionBooks = bookshelf.filter(book => book.genre === 'Fiction');
//const fictionBooks = bookshelf.filter((book) => {
    //if(book.genre === 'Fiction'){ return book;};

console.log(fictionBooks);

//create an array with only the title of books of the Non fiction books
//hint use filter and map

const nonFictionBookTitles = bookshelf.filter((book) => book.genre !== "Fiction").map(book => book.title);

console.log(nonFictionBookTitles);