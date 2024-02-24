console.log("script file wire up!!!")

// 1. allNames:
// Use .forEach to print all persons names in the console.

data.forEach(element => {
    console.log(element.name);
});

// 2. totalAgeAllPersons:
// Find the total combined age of all persons.
let totalAgeAllPersons = data.map(person => person.age);
totalAgeAllPersons = Number(totalAgeAllPersons.reduce((acc, num) => acc + num, 0));

console.log(totalAgeAllPersons);

// 3. totalAgeAllPets:
// Find the total combined age of all pets.
let totalAgeAllPets = data.reduce ((acc, person) => acc + person.pets.reduce((acc, pets) => acc + pets.age, 0), 0);

console.log(totalAgeAllPets);

// 4. oldEnough:
// Use .filter() to create an array of people old enough to be president.
function oldEnough (pers) {
    return (pers.age >= 35);
}

let ages = data.map(person => person);
let elders = ages.filter(oldEnough);

console.log(elders);

// 5. sadPeople:
// Use .filter() to create an array of "sad" people (people with no pets).
function checkForPets (pers) {
    return (pers.pets.length == 0);
}

let sadPeople = data.filter(checkForPets);

console.log(sadPeople);

// 6. warAndPeace:
// Use.map() to create an array called warAndPeace that has, in each index the string "war" or "peace"
//   * the string "war" if the person at that has BOTH a cat AND a dog.
//   * the string "peace" otherwise.
function turnAnimalsIntoSadBook (petList) {
    petList.forEach(personsPets => {
        let hasDog = false;
        let hasCat = false;

        personsPets.forEach(individualPet => {
            if (individualPet.type == 'dog') {
                hasDog = true;
            }

            if (individualPet.type == 'cat') {
                hasCat = true;
            }
        });

        if (hasCat === true && hasDog === true) {
            return (warAndPeace.push("War"));
        }

        if (hasCat !== true || hasDog !== true) {
            return (warAndPeace.push("Peace"));
        }
    });
}

let siberianWinter = data.map(person => person.pets);
let warAndPeace = [];
turnAnimalsIntoSadBook(siberianWinter);
console.log(warAndPeace);

// 7. justSpock:
// Create an array of all the pet objects where the pets named is "spock".
function isNamedSpock (pet) {
    return (pet.name === "spock");
}

let petNames = data.map(person => person.pets);
petNames = petNames.flat(2);
petNames = petNames.filter(isNamedSpock);

console.log(petNames);


// HUNGRY FOR MORE???  NO. ABSOLUTELY NOT. BEGONE FROM HERE!

// 8. catYears:
// Find the total combined age of all cats (type: "cat").


// 9. combinedAgeOfAllPetsOfDrinkers:
// Find the combined age of all pets belonging to people old enough to legally purchase alcohol


// 10. youngestPets:
// Create an array containing the youngest pet each pet owner has.
// Here's the answer: 
/*
[ { type: 'rock', name: 'herbert', age: 126003219 },
  { type: 'cat', name: 'colby', age: 1 },
  { type: 'guinea pig', name: 'kirk', age: 1 },
  { type: 'dog', name: 'midnight', age: 3 },
  { type: 'dog', name: 'quinn', age: 8 },
  { type: 'dog', name: 'hazel', age: 7 },
  { type: 'monstera', name: 'holey', age: 1 },
  { type: 'goldfish', name: 'betsy', age: 4 },
  { type: 'cat', name: 'rosie', age: 0.005 },
  { type: 'dog', name: 'nacho', age: 1 },
  { type: 'bearded dragon', name: 'ferg', age: 3 },
  { type: 'cockatoo', name: 'spockatoo', age: 33 },
  { type: 'cat', name: 'mija', age: 6 },
  { type: 'cat', name: 'caesar', age: 3 },
  { type: 'cat', name: 'eddie', age: 7 },
  { type: 'cat', name: 'rocky', age: 5 },
  { type: 'snake', name: 'reginald', age: 12 } ]
*/


// 11. petNameString:
// Create a string that is all the pets names separated by spaces (order doesn't matter).