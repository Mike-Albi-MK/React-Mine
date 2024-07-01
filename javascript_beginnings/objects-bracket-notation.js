//BRACKET NOTATION

const myObj = { 
    //Object
    name: 'John',
    "first name": "John Smith",
    fantasy_name: "Cinderella Rockefeller",
    sayHello() {
        console.log(this);
    }
};

myObj.lastName = 'Smith';

myObj.sayHello(); //Output the object sayHello: [Function: sayHello]
console.log(myObj.name);
console.log(myObj['first name']);
console.log(myObj.fantasy_name);

console.log(Object.entries(myObj)); //turns property values of object into strings
console.log(Object.keys(myObj)); //returns string only with keys (name,  first name, function name etc.)
console.log(Object.values(myObj));
console.log(typeof [1, 2]);
console.log(Array.isArray(myObj));

//Object.seal: we're still able to modify existing keys but can't add new ones to the object

const data = {
    id: 5,
    type: 'couch potato',
    'first name': 'Arturo',
    'last name': 'Velvetfur',
    'pet-type': 'Chinchilla',
};

const data2 = {
    title: 'Han Moo Doo Championship',
    'event-description': 'Exciting event featuring top athletes from around the world',
    'starting date': '2022-10-15',
    participants: ['Team Ahma', 'Team Bear','Team Crocodile'],
    ticketPrice: 50.99,
};

let prop = 'title';
let prop1 = 'ticketPrice';

console.log(data2[prop]); //Output: Han Moo Doo Championship

let newPrice = data2[prop1]++;

console.log(newPrice);



let word = "Hello world";

//count letter frequency

const letterCount = {

};

//loop through eac letter of the word

for (let letter of word) {
    letter = letter.toLowerCase(); //convert word to lowercase, case sensitive so H and h will be counted as one letter

    //console.log(letter);
    //user bracket notation as value of "letter" will be different each time
    if (letterCount[letter]) {
        //if key exist, add 1 to it
        letterCount[letter]++;
    } else {
        //if value is undefined, creat and assign value of 1
        letterCount[letter] = 1;
    }
};

console.log(letterCount);


//Practice word count
//write a function wordCount that takes a string and returns an object with unique word count

const countUniqueWords = (string) => {
    const words = string.toLowerCase().split(" ");
    const res = {};
    //console.log(words);
    for (const word of words) {
        if (res[word]) {
            res[word]++;
        } else {
            res[word] = 2;
        }
    }
    return res;
};

const str = 'Katana Zero is a 2019 platform game created by the indie developer Justin Stander. Set in a dystopian metropolis, the neo-noir storyline follows Subject Zero, a katana-wielding assassin with amnesia who can slow down time and predict the future. Zero unravels his past while completing assassination contracts.';

console.log(countUniqueWords(str));