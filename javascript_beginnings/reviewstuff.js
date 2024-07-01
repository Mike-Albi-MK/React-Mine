const users = [
    {
      name: "Petra Morin",
      address: {
        delivery: {
          street: "371-7636 Nulla Road",
          zip: "83-315",
          country: "Germany",
        },
        billing: {
          street: "123-999 Fake Street",
          zip: "12345",
          country: "Germany",
        },
      },
      hobbies: ["drums", "skating", "comics"],
      languages: [
        {
          name: "German",
          level: 5,
        },
        {
          name: "English",
          level: 4,
        },
        {
          name: "Spanish",
          level: 2,
        },
      ],
    },
    {
      name: "Abel Ashley",
      address: {
        delivery: {
          street: "9977 Aliquam Avenue",
          zip: "920134",
          country: "Mexico",
        },
        billing: {
          street: "123 Lorem Square",
          zip: "912098",
          country: "Mexico",
        },
      },
      hobbies: ["reading books", "wood working"],
      languages: [
        {
          name: "Spanish",
          level: 5,
        },
        {
          name: "English",
          level: 5,
        },
        {
          name: "Italian",
          level: 3,
        },
      ],
    },
    {
      name: "Aaron Cardenas",
      address: {
        delivery: {
          street: "987 Ipsum",
          zip: "129-234",
          country: "France",
        },
        billing: {
          street: "123 Etwas Plaza",
          zip: "912098",
          country: "Spain",
        },
      },
      hobbies: ["painting", "singing", "hiking"],
      languages: [
        {
          name: "French",
          level: 5,
        },
        {
          name: "Spanish",
          level: 5,
        },
        {
          name: "German",
          level: 1,
        },
      ],
    },
    {
      name: "Felix Moreno",
      address: {
        delivery: {
          street: "320-7871 Nec, Av.",
          zip: "59156",
          country: "New Zealand",
        },
        billing: {
          street: "921 Nullae Aliquam",
          zip: "912098",
          country: "New Zealand",
        },
      },
      hobbies: ["jogging", "coffee", "bird watching"],
      languages: [
        {
          name: "English",
          level: 5,
        },
        {
          name: "Italian",
          level: 3,
        },
      ],
    },
    {
      name: "Skyler May",
      address: {
        delivery: {
          street: "Ap #854-6462 Consectetuer Ave",
          zip: "00608",
          country: "Singapore",
        },
        billing: {
          street: "Ap #854-6462 Consectetuer Ave",
          zip: "00608",
          country: "Singapore",
        },
      },
      hobbies: ["cycling", "soccer", "bouldering"],
      languages: [
        {
          name: "Malay",
          level: 5,
        },
        {
          name: "English",
          level: 5,
        },
        {
          name: "Mandarin",
          level: 4,
        },
        {
          name: "French",
          level: 2,
        },
      ],
    },
  ];
  
  /*
  Task 2.1
  
  Print the name and hobbies separated by commas from the last 
  person on the list
  
  Expected output:
  Skyler May
  Hobbies: cycling, soccer, bouldering
  */
  
  console.log("\nLast person:");
  const lastPerson = users[4];
  console.log(`${lastPerson.name}\n Hobbies: ${lastPerson.hobbies.join(", ")}`);
  
  
  /*
  Task 2.2
  
  Print the name and information about the billing address of 
  the second person on the list
  
  Expected output:
  Abel Ashley
  
  Billing address:
  Street: 123 Lorem Square
  Zip: 912098
  Country: Mexico
  */
  
  console.log("\nSecond person:");
  const secondPerson = users[1];
  console.log(`${secondPerson.name}\n Billing Address:\n Street ${secondPerson.address.billing.street}\n Zip: ${secondPerson.address.billing.zip}\n Country: ${secondPerson.address.billing.country}`);
  /*
  Task 2.3
  
  Using loops, print all the names of the people on the list. 
  
  For each name, print also an index that starts at 1.
  
  Expected output:
  1. Petra Morin
  2. Abel Ashley
  3. Aaron Cardenas
  4. Felix Moreno
  5. Skyler May
  */
  
  console.log("\nUsers:");
  for(let i = 0; i < users.length; i++){
    console.log(`${i + 1}. ${users[i].name}`);
  };
  
  /*
  Task 2.4
  
  Using loops, print a message for each person with a message 
  showing the name, the delivery country and the first hobby in the list.
  
  Expected output:
  Petra Morin lives in Germany and their favourite hobby is: drums.
  
  Abel Ashley lives in Mexico and their favourite hobby is: reading books.
  
  Aaron Cardenas lives in France and their favourite hobby is: painting.
  
  Felix Moreno lives in New Zealand and their favourite hobby is: jogging.
  
  Skyler May lives in Singapore and their favourite hobby is: cycling.
  */
  
  for(let i = 0; i < users.length; i++){
    const person = users[i];
    console.log(`${person.name} lives in ${person.address.delivery.country} and their favorite hobby is: ${person.hobbies[0]}`);
  
  };
  
  
  /*
  Task 2.5
  
  Using loops, print each name and every language they know 
  with a level greater than or equal to 4.
  
  Expected output:
  Petra Morin speaks fluently:
  - German
  - English
  
  Abel Ashley speaks fluently:
  - Spanish
  - English
  
  ...
  */
  
  
  console.log("\nKnown languages:");
  for(let i = 0; i < users.length; i++){
    const personal = users[i];
    console.log(`${personal.name} speaks fluently:\n`)
    for(let j = 0; j < personal.languages.length; j++){
    const knownLanguage = personal.languages[j];
    if(knownLanguage.level >= 4){
      console.log(`- ${knownLanguage.name}`)
    }
  }
  };

  //BETTER SOLUTION:
  for (let user of users) {
    console.log(`${user.name} speaks fluently:`);
    for (const language of user.languages) {
        if (language.level >= 4) console.log(`– ${language.name}`);
    }
  };

  const user = {
    name: "Jane",
    age: 20,
    country: "Germany",
  };

  for (const key in user) {
    console.log(key, user.key);     //outpt: key: name, age, country 
                                    //output key, user.key: name, age, country: all undefined
  };

for (const key of Object.keys(user)) {
    console.log(key, user[key]);
};

for (const entry of Object.entries(user)) {
    console.log(entry);
};

for (const entry of Object.entries(user)) {
    const [key, value] = entry;         //destructuring

    console.log(key, value);
};

//even simpler:


for (const [key, value] of Object.entries(user)) {  //destructuring right there

    console.log(key, value);
};