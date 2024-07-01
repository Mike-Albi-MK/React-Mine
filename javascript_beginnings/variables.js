/*
Naming variables
– camel case: customerName (I will stick with this one)
– snake case: custome_name

the name should be short and meaningful!
*/

//HOW TO DECLARE VARIABLES

//OLD FASHON WAY
// A variable created using "var" can redeclared multiple times and reassigned
var myName = "Mike"; //we should never use it

/* var myName (DECLARE)
= "Mike" (ASSIGNMENT)
*/

console.log ( myName );

console.log ( "asfsd" ); // use "" when printing characters
console.log( myName); // Do NOT use "" when dealing with variables!!!

var myName = "Mary";
console.log(myName);

// MODERN WAYS
// LET – A variable can be redeclared ONCE but can be reassigned
let firstName = "Jenna";

// ERROR
// let firstName = "Bob; Identifier" 'firstName' has already been decleared
firstName = "Bob";
console.log( firstName );

// CONST – A variable cannot be redeclared OR assigned ( READONLY )
const last = "Smith";
consolge.log( lastName );


// ERROR
// lastName = "Robinson"; Assignment to constant variable.
console.log( lastName );

// We can also print out multiple variables at once by separatint them with a comma
console.log();
// Battle sequence with user input
function battle(pokemon1, pokemon2) {
    while (pokemon1.isAlive() && pokemon2.isAlive()) {
        // Pokemon 1's turn
        console.log(`${pokemon1.name}'s turn. Choose an attack:`);
        pokemon1.skills.forEach((skill, index) => {
            console.log(`${index + 1}. ${skill.attack} (Damage: ${skill.damage}, Magic: ${skill.magic})`);
        });
        let choice1 = readline.questionInt('Enter the number of the attack: ') - 1;
        if (choice1 >= 0 && choice1 < pokemon1.skills.length) {
            pokemon1.attack(pokemon1.skills[choice1].attack, pokemon2);
        } else {
            console.log('Invalid choice. Turn skipped.');
        }

        if (!pokemon2.isAlive()) break;

        // Pokemon 2's turn
        console.log(`${pokemon2.name}'s turn. Choose an attack:`);
        pokemon2.skills.forEach((skill, index) => {
            console.log(`${index + 1}. ${skill.attack} (Damage: ${skill.damage}, Magic: ${skill.magic})`);
        });
        let choice2 = readline.questionInt('Enter the number of the attack: ') - 1;
        if (choice2 >= 0 && choice2 < pokemon2.skills.length) {
            pokemon2.attack(pokemon2.skills[choice2].attack, pokemon1);
        } else {
            console.log('Invalid choice. Turn skipped.');
        }
    }

    // Determine the winner
    if (pokemon1.isAlive()) {
        console.log(`${pokemon1.name} wins the battle!`);
    } else if (pokemon2.isAlive()) {
        console.log(`${pokemon2.name} wins the battle!`);
    } else {
        console.log(`It's a draw!`);
    }
}

// Start the battle
battle(pikachu, bulbasaur);

/*Explanation:

    User Input for Attack Skills: During each turn, the user is prompted to select an attack skill for the current Pokémon. The skills are displayed with an index, and the user inputs the number corresponding to the desired skill.
    Battle Function: The battle function manages the turn-based sequence of attacks between two Pokémon. It uses the readline-sync library to get user input for each turn.
    Skill Validation: The code checks if the user's choice is valid before executing the attack. If the choice is invalid, the turn is skipped.

This code allows for an interactive battle where the user selects the attack skills during each turn, making the battle dynamic and engaging. */


attack(skillName, opponent) {
    if (this.isAlive() && opponent.isAlive()) {
        const skill = this.skills.find(skill => skill.attack === skillName);

        if (skill && this.hasEnoughMagic(skillName)) {
            this.magic -= skill.magic;
            opponent.receiveDamage(skill.damage);
            this.counter++;
            console.log(`${this.name} uses ${skillName}!`);
            this.showStatus();
            opponent.showStatus();
            console.log(`${this.name}'s Status After Attack: Health: ${this.health}, Magic: ${this.magic}`);
            console.log(`${opponent.name}'s Status After Receiving Damage: Health: ${opponent.health}, Magic: ${opponent.magic}`);
        } else if (!skill) {
            console.log(`${this.name} does not know ${skillName}!`);
        } else {
            console.log(`${this.name} does not have enough magic to use ${skillName}!`);
        }
    } else {
        console.log(`${this.name} or ${opponent.name} is already defeated!`);
    }
}

/*attack(skillName, opponent){
        if (this.health > 0 && opponent.health > 0 && this.hasEnoughMagic(skillName)) {
            const skill = this.skills.find(skill => skill.attack === skillName);

            if (skill && this.hasEnoughMagic(skillName)) {

            this.magic -= skill.magic;
            opponent.receiveDamage(skill.damage);
            this.counter++;
            this.showStatus();
            opponent.showStatus();
            console.log(`${this.name} uses ${skillName}!`);
                console.log(`${this.name}'s Status After Attack: Health: ${this.health}, Magic: ${this.magic}`);
                console.log(`${opponent.name}'s Status After Receiving Damage: Health: ${opponent.health}, Magic: ${opponent.magic}`)
        } 
    } else {
        return `${this.name} has no ${skillName} to attack!`
    } 
    }; */

    const readline = require('readline-sync');

// Define the Pokemon class and AttackSkill class (same as before)

// Define the available Pokemon and their skills
const pokemonData = [
    { name: 'Pikachu', skills: [lightning, slam, thunder, swift] },
    { name: 'Bulbasaur', skills: [bombing, powerWhip, solarBeam, seedBomb] },
    // Add more Pokemon and their skills here...
];

// Helper function to get a random Pokemon from the roster
function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemonData.length);
    return pokemonData[randomIndex];
}

// Function to let the player choose their Pokemon
function chooseYourPokemon() {
    console.log('Pick your Pokémon:');
    pokemonData.forEach(pokemon => {
        console.log(`- ${pokemon.name}`);
    });

    const chosenName = readline.question('Enter the name of the Pokémon: ').trim().toLowerCase();
    const chosenPokemon = pokemonData.find(pokemon => pokemon.name.toLowerCase() === chosenName);
    if (!chosenPokemon) {
        console.log('Invalid Pokémon choice!');
        return chooseYourPokemon(); // Retry if the choice is invalid
    }
    return chosenPokemon;
}

// Function to let the player choose their opponent
function chooseOpponent() {
    const opponent = getRandomPokemon();
    console.log(`${opponent.name} will challenge you this time!\nLet's go!!!`);
    return opponent;
}

// Create your Pokemon and the opponent
const yourPokemon = chooseYourPokemon();
const opponentPokemon = chooseOpponent();

// Initialize the battle
const maxRounds = 10;

function pokeBattle(yourPokemon, opponentPokemon) {
    let round = 1;

    while (yourPokemon.isAlive() && opponentPokemon.isAlive() && round <= maxRounds) {
        console.log(`Round ${round}`);
        console.log(`${yourPokemon.name} has the first turn. Start your attack!`);
        yourPokemon.skills.forEach(skill => {
            console.log(`${skill.attack} (Damage: ${skill.damage}, Magic: ${skill.magic})`);
        });

        let attackChoice1 = readline.question('Enter the attack name: ').trim();
        const chosenAttack1 = yourPokemon.skills.find(skill => skill.attack.toLowerCase() === attackChoice1.toLowerCase());
        if (!chosenAttack1) {
            console.log('Invalid attack choice!');
            continue; // Retry if the choice is invalid
        }
        yourPokemon.attack(attackChoice1, opponentPokemon);

        if (!opponentPokemon.isAlive()) {
            console.log(`${yourPokemon.name} wins the match!!!`);
            break;
        }

        console.log(`It's ${opponentPokemon.name}'s turn.`);
        opponentPokemon.skills.forEach(skill => {
            console.log(`${skill.attack} (Damage: ${skill.damage}, Magic: ${skill.magic})`);
        });

        let attackChoice2 = readline.question('Enter the attack name: ').trim();
        const chosenAttack2 = opponentPokemon.skills.find(skill => skill.attack.toLowerCase() === attackChoice2.toLowerCase());
        if (!chosenAttack2) {
            console.log('Invalid attack choice!');
            continue; // Retry if the choice is invalid
        }
        opponentPokemon.attack(attackChoice2, yourPokemon);

        if (!yourPokemon.isAlive()) {
            console.log(`${opponentPokemon.name} wins the match!!!`);
            break;
        }

        round++;
    }

    if (!yourPokemon.isAlive() && !opponentPokemon.isAlive()) {
        console.log(`It's a draw!`);
    } else if (round > maxRounds) {
        console.log(`Max rounds reached! It's a draw!`);
    }
}

// Start the battle
pokeBattle(yourPokemon, opponentPokemon);


//STREET FIGHTER

const ryu = {
    name: "Ryu",
    health: 10000,
    attackSkill: "Hadoken",
    attackDamage: 5600,
};

const ken = {
    name: "Ken",
    health: 10000,
    attackSkill: "Shoryuken",
    attackDamage: 3800,
};

ryu.attack = function(target){
    target.health -= this.attackDamage;
    console.log(`${this.name} attacked ${target.name} with his ${this.attackSkill}, inflicting ${this.attackDamage} damage. ${target.name}'s health is now ${target.health}`);
};

ken.attack = function(target){
    target.health -= this.attackDamage;
    console.log(`${this.name} attacked ${target.name} with his ${this.attackSkill}, inflicting ${this.attackDamage} damage. ${target.name}'s health is now ${target.health}`);
};

ryu.attack(ken);
ken.attack(ryu);